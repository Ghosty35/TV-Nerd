import { internalAction } from "./_generated/server";
import { v } from "convex/values";

function parseDuration(value: string) {
  const match = value.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) return "";
  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const seconds = Number(match[3] || 0);
  const totalMinutes = hours * 60 + minutes + Math.round(seconds / 60);
  return totalMinutes ? `${totalMinutes} min` : `${seconds} sec`;
}

export const searchTrailer = internalAction({
  args: {
    title: v.string(),
    year: v.optional(v.string()),
    type: v.optional(v.string()),
  },
  handler: async (_ctx, args) => {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) throw new Error("YouTube API is not configured");

    const query = [args.title, args.year, args.type === "Movie" ? "movie" : "series", "official trailer"]
      .filter(Boolean)
      .join(" ");
    const searchParams = new URLSearchParams({
      part: "snippet",
      q: query,
      type: "video",
      maxResults: "10",
      videoEmbeddable: "true",
      videoSyndicated: "true",
      safeSearch: "moderate",
      key: apiKey,
    });
    const searchResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?${searchParams}`);
    if (!searchResponse.ok) throw new Error(`YouTube search failed (${searchResponse.status})`);
    const searchData = await searchResponse.json();
    const candidates = (searchData.items || []).filter((item: any) => item.id?.videoId);
    if (!candidates.length) return null;

    const ids = candidates.map((item: any) => item.id.videoId).join(",");
    const detailParams = new URLSearchParams({
      part: "snippet,contentDetails,status",
      id: ids,
      key: apiKey,
    });
    const detailResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?${detailParams}`);
    if (!detailResponse.ok) throw new Error(`YouTube video lookup failed (${detailResponse.status})`);
    const detailData = await detailResponse.json();
    const candidateOrder = new Map(candidates.map((item: any, index: number) => [item.id.videoId, index]));
    const titleWords = args.title.toLowerCase().split(/[^a-z0-9]+/).filter(word => word.length > 2);
    const videos = (detailData.items || [])
      .filter((item: any) => item.status?.embeddable !== false)
      .sort((a: any, b: any) => {
        const score = (item: any) => {
          const text = `${item.snippet?.title || ""} ${item.snippet?.channelTitle || ""}`.toLowerCase();
          const titleMatches = titleWords.filter(word => text.includes(word)).length;
          const officialBoost = /official|hbo|netflix|amazon|prime video|fx|apple tv|disney|warner|sony|paramount/.test(text) ? 3 : 0;
          const trailerBoost = /trailer|teaser/.test(text) ? 5 : 0;
          return titleMatches * 2 + officialBoost + trailerBoost - (candidateOrder.get(item.id) || 0) / 10;
        };
        return score(b) - score(a);
      });
    const video = videos[0];
    if (!video) return null;

    return {
      videoId: video.id,
      title: video.snippet?.title || `${args.title} trailer`,
      channelTitle: video.snippet?.channelTitle || "YouTube",
      publishedAt: video.snippet?.publishedAt || "",
      thumbnail: video.snippet?.thumbnails?.maxres?.url || video.snippet?.thumbnails?.high?.url || video.snippet?.thumbnails?.medium?.url || "",
      duration: parseDuration(video.contentDetails?.duration || ""),
      watchUrl: `https://www.youtube.com/watch?v=${encodeURIComponent(video.id)}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?rel=0&modestbranding=1`,
    };
  },
});

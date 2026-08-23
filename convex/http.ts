import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

function allowedOrigin(request: Request) {
  const origin = request.headers.get("Origin") || "";
  const configured = (process.env.TVNERD_ALLOWED_ORIGINS || "")
    .split(",")
    .map(value => value.trim())
    .filter(Boolean);
  const isLocal = origin === "http://localhost:5173" || origin === "http://127.0.0.1:5173";
  let isNetlifyPreview = false;
  try {
    const url = new URL(origin);
    isNetlifyPreview = url.protocol === "https:" && url.hostname.endsWith(".netlify.app");
  } catch {
    isNetlifyPreview = false;
  }
  return configured.includes(origin) || isLocal || isNetlifyPreview ? origin : "null";
}

function corsHeaders(origin: string) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Authorization, Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

http.route({
  path: "/youtube/trailer",
  method: "OPTIONS",
  handler: httpAction(async (_ctx, request) => new Response(null, {
    status: 204,
    headers: corsHeaders(allowedOrigin(request)),
  })),
});

http.route({
  path: "/youtube/trailer",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const identity = await ctx.auth.getUserIdentity();
    const origin = allowedOrigin(request);
    if (!identity) return new Response("Unauthorized", { status: 401, headers: corsHeaders(origin) });

    let body: { title?: string; year?: string; type?: string };
    try {
      body = await request.json();
    } catch {
      return new Response("Invalid JSON", { status: 400 });
    }
    if (!body.title?.trim()) return new Response("A title is required", { status: 400 });

    try {
      const trailer = await ctx.runAction(internal.youtube.searchTrailer, {
        title: body.title.trim().slice(0, 120),
        year: body.year?.trim().slice(0, 10),
        type: body.type?.trim().slice(0, 20),
      });
      return new Response(JSON.stringify({ trailer }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "private, max-age=3600",
          ...corsHeaders(origin),
        },
      });
    } catch (error) {
      console.error("YouTube trailer lookup failed", error);
      return new Response(JSON.stringify({ error: "Trailer lookup unavailable" }), {
        status: 502,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders(origin),
        },
      });
    }
  }),
});

export default http;

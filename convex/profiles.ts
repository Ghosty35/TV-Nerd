import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

async function requireUser(ctx: any) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Not authenticated");
  return identity.subject;
}

export const getMine = query({
  args: {},
  handler: async (ctx) => {
    const userId = await requireUser(ctx);
    return await ctx.db.query("profiles").withIndex("by_user", q => q.eq("userId", userId)).unique();
  },
});

export const save = mutation({
  args: {
    displayName: v.string(),
    username: v.string(),
    bio: v.string(),
    avatarUrl: v.optional(v.string()),
    activityVisibility: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await requireUser(ctx);
    const existing = await ctx.db.query("profiles").withIndex("by_user", q => q.eq("userId", userId)).unique();
    if (existing) {
      await ctx.db.patch(existing._id, args);
      return existing._id;
    }
    return await ctx.db.insert("profiles", { userId, ...args });
  },
});

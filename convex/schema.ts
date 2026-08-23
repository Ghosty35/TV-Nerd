import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  profiles: defineTable({
    userId: v.string(),
    displayName: v.string(),
    username: v.string(),
    bio: v.string(),
    avatarUrl: v.optional(v.string()),
    activityVisibility: v.string(),
  }).index("by_user", ["userId"]),
  libraryItems: defineTable({
    userId: v.string(),
    catalogId: v.string(),
    title: v.string(),
    type: v.string(),
    status: v.string(),
    watchedCount: v.number(),
    personalRating: v.optional(v.number()),
    note: v.optional(v.string()),
    favorite: v.boolean(),
    updatedAt: v.number(),
  }).index("by_user", ["userId"]).index("by_user_catalog", ["userId", "catalogId"]),
  friendships: defineTable({
    requesterId: v.string(),
    addresseeId: v.string(),
    status: v.string(),
    createdAt: v.number(),
  }).index("by_requester", ["requesterId"]).index("by_addressee", ["addresseeId"]),
  activity: defineTable({
    userId: v.string(),
    catalogId: v.string(),
    text: v.string(),
    visibility: v.string(),
    createdAt: v.number(),
  }).index("by_user", ["userId"]).index("by_created", ["createdAt"]),
  reminderSettings: defineTable({
    userId: v.string(),
    googleCalendarEnabled: v.boolean(),
    browserNotificationsEnabled: v.boolean(),
    timezone: v.string(),
  }).index("by_user", ["userId"]),
});

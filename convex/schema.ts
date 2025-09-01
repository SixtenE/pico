import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  projects: defineTable({
    name: v.string(),
  }),
  audios: defineTable({
    slug: v.string(),
    project: v.id('users'),
  }),
})

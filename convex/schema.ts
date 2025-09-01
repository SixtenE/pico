import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  projects: defineTable({
    name: v.string(),
  }),
  audios: defineTable({
    storageId: v.string(),
    project: v.id('projects'),
  }),
})

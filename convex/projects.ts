import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query('projects').collect()
    return projects
  },
})

export const createProject = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const newProjectId = await ctx.db.insert('projects', {
      name: args.name,
    })
    return newProjectId
  },
})

export const deleteAllProjects = mutation({
  handler: async (ctx) => {
    const projects = await ctx.db.query('projects').collect()

    projects.forEach(async (p) => {
      await ctx.db.delete(p._id)
    })
    return projects
  },
})

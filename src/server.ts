import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono! hoge hoge')
})
app.get("/public/*", async (ctx) => {
  return await ctx.env.ASSETS.fetch(ctx.req.raw);
});

export default app

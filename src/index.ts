import { OpenAPIHono, createRoute } from '@hono/zod-openapi'
import { showRoutes } from 'hono/dev'

const app = new OpenAPIHono()
const v1 = new OpenAPIHono().basePath('/api/v1')

v1.openapi(createRoute({
  method: 'get',
  path: "/message2",
  responses: {
    200: {
      description: 'Get message',
    },
  },
}), (c) => c.json({ message: 'Hello' }))


app.openapi(createRoute({
  method: 'get',
  path: "/message",
  responses: {
    200: {
      description: 'Get message',
    },
  },
}), (c) => c.json({ message: 'Hello' }))

app.route('/', v1)

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
});

// This prints the correct routes:
// GET  /message
// GET  /api/v1/message2
// GET  /doc
showRoutes(app)

export default app;

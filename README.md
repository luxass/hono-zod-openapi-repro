# hono-zod-openapi-repro

To install dependencies:

```bash
pnpm install
```

To run:

```bash
pnpm run dev
```

## Steps to reproduce

Make sure to run the project, and put attention to the console output.

You will see the following:
```
GET  /message
GET  /api/v1/message2
GET  /doc
```

The routes are correctly registered.

If you then make a request to `/doc`, you will see the following output:

```json
{
  "openapi": "3.0.0",
  "info": {
    "version": "1.0.0",
    "title": "My API"
  },
  "components": {
    "schemas": {

    },
    "parameters": {

    }
  },
  "paths": {
    "/message": {
      "get": {
        "responses": {
          "200": {
            "description": "Get message"
          }
        }
      }
    },
    "/message2": {
      "get": {
        "responses": {
          "200": {
            "description": "Get message"
          }
        }
      }
    }
  }
}
```

The `/api/v1/message2` route is not present in the OpenAPI document, instead the `/message2` route is present.

## Expected behavior

The `/api/v1/message2` route should be present in the OpenAPI document, and not the `/message2` route.

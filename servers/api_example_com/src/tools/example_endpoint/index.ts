import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "example_endpoint",
  "toolDescription": "this endpoint is an example",
  "baseUrl": "https://api.example.com",
  "path": "/dummy/{slug}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "slug": "slug"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool
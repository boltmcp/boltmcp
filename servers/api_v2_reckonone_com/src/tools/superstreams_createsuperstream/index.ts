import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_createsuperstream",
  "toolDescription": "Creates a new superstream.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "fromDate": "fromDate",
      "toDate": "toDate",
      "description": "description",
      "lineItems": "lineItems"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_updatesuperstream",
  "toolDescription": "Updates an existing superstream.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/{superstreamId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superstreamId": "superstreamId"
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
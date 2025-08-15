import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superstreams_patchsuperstream",
  "toolDescription": "Updates selected fields of a superstream.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superstreams/{superstreamId}",
  "method": "patch",
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
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool
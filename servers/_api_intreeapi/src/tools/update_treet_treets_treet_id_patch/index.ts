import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_treet_treets_treet_id_patch",
  "toolDescription": "Update Treet",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets/{treet_id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "treet_id": "treet_id"
    },
    "body": {
      "treet": "treet",
      "treet_version": "treet_version",
      "gallery_ids": "gallery_ids",
      "locations": "locations",
      "category_ids": "category_ids"
    }
  },
  inputParamsSchema
}

export default tool
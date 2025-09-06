import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_treets_as_featured_packs_pack_id_treets_featured_put",
  "toolDescription": "Set Treets As Featured",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/packs/{pack_id}/treets/featured",
  "method": "put",
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
      "pack_id": "pack_id"
    },
    "body": {
      "treet_ids": "treet_ids"
    }
  },
  inputParamsSchema
}

export default tool
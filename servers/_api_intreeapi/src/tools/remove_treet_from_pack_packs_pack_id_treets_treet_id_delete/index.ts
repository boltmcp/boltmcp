import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_treet_from_pack_packs_pack_id_treets_treet_id_delete",
  "toolDescription": "Remove Treet From Pack",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/packs/{pack_id}/treets/{treet_id}",
  "method": "delete",
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
      "pack_id": "pack_id",
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool
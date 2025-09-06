import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_treets_to_packs_batch_hub_hub_id_pack_treets_post",
  "toolDescription": "Add Treets To Packs",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/batch/hub/{hub_id}/pack-treets",
  "method": "post",
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
      "hub_id": "hub_id"
    },
    "body": {
      "treet_ids": "treet_ids",
      "pack_ids": "pack_ids"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_packs_internal_packs_validate_post",
  "toolDescription": "Validate Packs",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/packs/validate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "hub_id": "hub_id",
      "pack_ids": "pack_ids"
    }
  },
  inputParamsSchema
}

export default tool
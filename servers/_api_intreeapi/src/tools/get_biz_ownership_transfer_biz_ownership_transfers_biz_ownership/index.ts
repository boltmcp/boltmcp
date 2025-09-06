import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_biz_ownership_transfer_biz_ownership_transfers_biz_ownership",
  "toolDescription": "Get Biz Ownership Transfer",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-ownership-transfers/{biz_ownership_transfer_id}",
  "method": "get",
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
      "biz_ownership_transfer_id": "biz_ownership_transfer_id"
    }
  },
  inputParamsSchema
}

export default tool
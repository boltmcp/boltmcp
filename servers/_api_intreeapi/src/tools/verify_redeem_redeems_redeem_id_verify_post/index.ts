import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_redeem_redeems_redeem_id_verify_post",
  "toolDescription": "Verify Redeem",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/redeems/{redeem_id}/verify",
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
      "redeem_id": "redeem_id"
    }
  },
  inputParamsSchema
}

export default tool
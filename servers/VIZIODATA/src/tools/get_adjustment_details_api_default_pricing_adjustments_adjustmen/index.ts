import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_adjustment_details_api_default_pricing_adjustments_adjustmen",
  "toolDescription": "Get adjustment details",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/default-pricing/adjustments/{adjustment_id}",
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
      "adjustment_id": "adjustment_id"
    }
  },
  inputParamsSchema
}

export default tool
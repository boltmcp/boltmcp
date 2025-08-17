import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "preview_pricing_adjustment_api_default_pricing_adjustments_previ",
  "toolDescription": "Preview pricing adjustment",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/default-pricing/adjustments/preview",
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
    "body": {
      "adjustment_name": "adjustment_name",
      "description": "description",
      "adjustment_type": "adjustment_type",
      "percentage_data": "percentage_data",
      "fixed_value_data": "fixed_value_data",
      "template_data": "template_data",
      "target_companies": "target_companies",
      "preview_only": "preview_only"
    }
  },
  inputParamsSchema
}

export default tool
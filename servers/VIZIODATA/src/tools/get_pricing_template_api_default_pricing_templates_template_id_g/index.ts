import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_pricing_template_api_default_pricing_templates_template_id_g",
  "toolDescription": "Get pricing template",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/default-pricing/templates/{template_id}",
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
      "template_id": "template_id"
    }
  },
  inputParamsSchema
}

export default tool
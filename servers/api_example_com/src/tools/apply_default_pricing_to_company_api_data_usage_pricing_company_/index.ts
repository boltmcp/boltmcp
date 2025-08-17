import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apply_default_pricing_to_company_api_data_usage_pricing_company_",
  "toolDescription": "Apply default pricing template to company",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/pricing/{company_id}/apply-default",
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
      "company_id": "company_id"
    },
    "query": {
      "override_existing": "override_existing"
    }
  },
  inputParamsSchema
}

export default tool
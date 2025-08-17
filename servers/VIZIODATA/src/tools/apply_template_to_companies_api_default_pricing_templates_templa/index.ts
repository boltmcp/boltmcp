import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apply_template_to_companies_api_default_pricing_templates_templa",
  "toolDescription": "Apply template to companies",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/default-pricing/templates/{template_id}/apply",
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
      "template_id": "template_id"
    },
    "body": {
      "template_id": "b_template_id",
      "company_ids": "company_ids",
      "override_existing": "override_existing",
      "preserve_monthly_limits": "preserve_monthly_limits"
    }
  },
  inputParamsSchema
}

export default tool
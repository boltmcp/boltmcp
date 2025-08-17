import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_pricing_template_api_default_pricing_templates_template_i",
  "toolDescription": "Update pricing template",
  "baseUrl": "https://api.example.com",
  "path": "/api/default-pricing/templates/{template_id}",
  "method": "put",
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
      "name": "name",
      "description": "description",
      "price_per_gb_input": "price_per_gb_input",
      "price_per_gb_output": "price_per_gb_output",
      "price_per_gb_storage": "price_per_gb_storage",
      "price_per_1k_requests": "price_per_1k_requests",
      "monthly_limit_gb": "monthly_limit_gb",
      "alert_threshold_percentage": "alert_threshold_percentage",
      "storage_billing_day": "storage_billing_day",
      "is_default": "is_default"
    }
  },
  inputParamsSchema
}

export default tool
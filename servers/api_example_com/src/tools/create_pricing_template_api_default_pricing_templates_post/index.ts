import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_pricing_template_api_default_pricing_templates_post",
  "toolDescription": "Create pricing template",
  "baseUrl": "https://api.example.com",
  "path": "/api/default-pricing/templates",
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
      "name": "name",
      "description": "description",
      "price_per_gb_input": "price_per_gb_input",
      "price_per_gb_output": "price_per_gb_output",
      "price_per_gb_storage": "price_per_gb_storage",
      "price_per_1k_requests": "price_per_1k_requests",
      "currency": "currency",
      "monthly_limit_gb": "monthly_limit_gb",
      "alert_threshold_percentage": "alert_threshold_percentage",
      "storage_calculation_type": "storage_calculation_type",
      "storage_billing_day": "storage_billing_day",
      "is_default": "is_default"
    }
  },
  inputParamsSchema
}

export default tool
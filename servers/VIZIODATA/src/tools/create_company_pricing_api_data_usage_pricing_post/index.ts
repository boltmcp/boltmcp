import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_company_pricing_api_data_usage_pricing_post",
  "toolDescription": "Create company pricing configuration",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/pricing",
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
      "company_id": "company_id",
      "price_per_gb_input": "price_per_gb_input",
      "price_per_gb_output": "price_per_gb_output",
      "price_per_gb_storage": "price_per_gb_storage",
      "price_per_1k_requests": "price_per_1k_requests",
      "currency": "currency",
      "monthly_limit_gb": "monthly_limit_gb",
      "alert_threshold_percentage": "alert_threshold_percentage",
      "storage_calculation_type": "storage_calculation_type",
      "storage_billing_day": "storage_billing_day"
    }
  },
  inputParamsSchema
}

export default tool
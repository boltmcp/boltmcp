import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_company_api_companies_company_id_put",
  "toolDescription": "Update company",
  "baseUrl": "https://api.example.com",
  "path": "/api/companies/{company_id}",
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
      "company_id": "company_id"
    },
    "body": {
      "name": "name",
      "cnpj": "cnpj",
      "address": "address",
      "active": "active",
      "hidden": "hidden",
      "timezone": "timezone",
      "logo_url": "logo_url",
      "primary_color": "primary_color",
      "secondary_color": "secondary_color",
      "accent_color": "accent_color",
      "background_color": "background_color",
      "text_color": "text_color",
      "sidebar_color": "sidebar_color"
    }
  },
  inputParamsSchema
}

export default tool
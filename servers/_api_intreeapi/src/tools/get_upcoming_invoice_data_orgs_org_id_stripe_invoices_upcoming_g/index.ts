import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_upcoming_invoice_data_orgs_org_id_stripe_invoices_upcoming_g",
  "toolDescription": "Get Upcoming Invoice Data",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/orgs/{org_id}/stripe/invoices/upcoming",
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
      "org_id": "org_id"
    }
  },
  inputParamsSchema
}

export default tool
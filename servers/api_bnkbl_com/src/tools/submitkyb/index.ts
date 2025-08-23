import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submitkyb",
  "toolDescription": "Submit KYB form",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/client/{client_id}/product/{product}/kyb",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "client_id": "client_id",
      "product": "product"
    },
    "body": {
      "annual_revenue": "annual_revenue",
      "incorporation_date": "incorporation_date",
      "financial_institution": "financial_institution",
      "income_source": "income_source",
      "trading_name": "trading_name",
      "industry": "industry",
      "financing_frequency": "financing_frequency",
      "financing_needed": "financing_needed",
      "comments": "comments",
      "ultimate_beneficial_owners": "ultimate_beneficial_owners",
      "directors": "directors",
      "corporate_structure": "corporate_structure"
    }
  },
  inputParamsSchema
}

export default tool
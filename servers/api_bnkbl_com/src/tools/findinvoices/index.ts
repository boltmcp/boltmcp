import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findinvoices",
  "toolDescription": "List invoices",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/invoices",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "sort_by": "sort_by",
      "descending": "descending",
      "invoice_number": "invoice_number",
      "invoice_number[]": "invoice_number[]",
      "payment_reference": "payment_reference",
      "payment_reference[]": "payment_reference[]",
      "face_value_from": "face_value_from",
      "face_value_to": "face_value_to",
      "currency": "currency",
      "currency[]": "currency[]",
      "issuer_name_like": "issuer_name_like",
      "issuer_country[]": "issuer_country[]",
      "issuer_registration_number": "issuer_registration_number",
      "issuer_registration_number[]": "issuer_registration_number[]",
      "debtor_name_like": "debtor_name_like",
      "debtor_country[]": "debtor_country[]",
      "debtor_registration_number": "debtor_registration_number",
      "debtor_registration_number[]": "debtor_registration_number[]"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_credit_notes",
  "toolDescription": "List credit notes",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/credit_notes",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "include_deleted": "include_deleted",
      "id": "id",
      "customer_id": "customer_id",
      "subscription_id": "subscription_id",
      "reference_invoice_id": "reference_invoice_id",
      "type": "type",
      "reason_code": "reason_code",
      "create_reason_code": "create_reason_code",
      "status": "status",
      "date": "date",
      "total": "total",
      "price_type": "price_type",
      "amount_allocated": "amount_allocated",
      "amount_refunded": "amount_refunded",
      "amount_available": "amount_available",
      "voided_at": "voided_at",
      "updated_at": "updated_at",
      "sort_by": "sort_by",
      "channel": "channel",
      "einvoice": "einvoice"
    },
    "header": {
      "chargebee-request-origin-device": "chargebee-request-origin-device",
      "chargebee-request-origin-user": "chargebee-request-origin-user",
      "chargebee-request-origin-user-encoded": "chargebee-request-origin-user-encoded",
      "chargebee-request-origin-ip": "chargebee-request-origin-ip",
      "chargebee-business-entity-id": "chargebee-business-entity-id"
    }
  },
  inputParamsSchema
}

export default tool
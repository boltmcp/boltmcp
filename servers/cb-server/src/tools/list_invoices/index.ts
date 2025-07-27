import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_invoices",
  "toolDescription": "List invoices",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/invoices",
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
      "subscription_id": "subscription_id",
      "customer_id": "customer_id",
      "recurring": "recurring",
      "status": "status",
      "price_type": "price_type",
      "date": "date",
      "paid_at": "paid_at",
      "total": "total",
      "amount_paid": "amount_paid",
      "amount_adjusted": "amount_adjusted",
      "credits_applied": "credits_applied",
      "amount_due": "amount_due",
      "dunning_status": "dunning_status",
      "payment_owner": "payment_owner",
      "updated_at": "updated_at",
      "channel": "channel",
      "voided_at": "voided_at",
      "void_reason_code": "void_reason_code",
      "sort_by": "sort_by",
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
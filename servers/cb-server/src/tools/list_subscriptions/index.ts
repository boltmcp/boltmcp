import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_subscriptions",
  "toolDescription": "List subscriptions",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/subscriptions",
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
      "item_id": "item_id",
      "item_price_id": "item_price_id",
      "status": "status",
      "cancel_reason": "cancel_reason",
      "cancel_reason_code": "cancel_reason_code",
      "remaining_billing_cycles": "remaining_billing_cycles",
      "created_at": "created_at",
      "activated_at": "activated_at",
      "next_billing_at": "next_billing_at",
      "cancelled_at": "cancelled_at",
      "has_scheduled_changes": "has_scheduled_changes",
      "updated_at": "updated_at",
      "offline_payment_method": "offline_payment_method",
      "auto_close_invoices": "auto_close_invoices",
      "override_relationship": "override_relationship",
      "sort_by": "sort_by",
      "business_entity_id": "business_entity_id",
      "channel": "channel"
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
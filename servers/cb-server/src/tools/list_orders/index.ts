import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_orders",
  "toolDescription": "List orders",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/orders",
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
      "exclude_deleted_credit_notes": "exclude_deleted_credit_notes",
      "id": "id",
      "invoice_id": "invoice_id",
      "subscription_id": "subscription_id",
      "status": "status",
      "shipping_date": "shipping_date",
      "shipped_at": "shipped_at",
      "order_type": "order_type",
      "order_date": "order_date",
      "paid_on": "paid_on",
      "updated_at": "updated_at",
      "created_at": "created_at",
      "resent_status": "resent_status",
      "is_resent": "is_resent",
      "original_order_id": "original_order_id",
      "sort_by": "sort_by"
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_transactions",
  "toolDescription": "List transactions",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/transactions",
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
      "payment_source_id": "payment_source_id",
      "payment_method": "payment_method",
      "gateway": "gateway",
      "gateway_account_id": "gateway_account_id",
      "id_at_gateway": "id_at_gateway",
      "reference_number": "reference_number",
      "type": "type",
      "date": "date",
      "amount": "amount",
      "amount_capturable": "amount_capturable",
      "status": "status",
      "updated_at": "updated_at",
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
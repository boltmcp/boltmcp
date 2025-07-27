import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_bank_account_payment_source",
  "toolDescription": "Update a bank account payment source",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/payment_sources/{cust-payment-source-id}/update_bank_account",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "cust-payment-source-id": "cust-payment-source-id"
    },
    "header": {
      "chargebee-request-origin-device": "chargebee-request-origin-device",
      "chargebee-request-origin-user": "chargebee-request-origin-user",
      "chargebee-request-origin-user-encoded": "chargebee-request-origin-user-encoded",
      "chargebee-request-origin-ip": "chargebee-request-origin-ip",
      "chargebee-event-actions": "chargebee-event-actions",
      "chargebee-event-email": "chargebee-event-email",
      "chargebee-event-webhook": "chargebee-event-webhook",
      "chargebee-business-entity-id": "chargebee-business-entity-id"
    }
  },
  inputParamsSchema
}

export default tool
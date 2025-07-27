import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_one_time_charge_to_a_pending_invoice",
  "toolDescription": "Add one-time charge to a pending invoice",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/invoices/{invoice-id}/add_charge",
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
      "invoice-id": "invoice-id"
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
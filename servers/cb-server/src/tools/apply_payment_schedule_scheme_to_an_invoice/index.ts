import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apply_payment_schedule_scheme_to_an_invoice",
  "toolDescription": "Apply payment schedule scheme to an invoice",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/invoices/{invoice-id}/apply_payment_schedule_scheme",
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
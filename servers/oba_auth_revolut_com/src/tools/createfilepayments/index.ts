import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfilepayments",
  "toolDescription": "Create a file payment",
  "baseUrl": "https://oba-auth.revolut.com",
  "path": "/file-payments",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    },
    {
      "key": "x-jws-signature",
      "value": "<mcp-env-var>X_JWS_SIGNATURE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_JWS_SIGNATURE"
    }
  ],
  "paramsMap": {
    "body": {
      "Data": "Data"
    },
    "header": {
      "x-fapi-financial-id": "x-fapi-financial-id",
      "x-fapi-customer-last-logged-time": "x-fapi-customer-last-logged-time",
      "x-fapi-customer-ip-address": "x-fapi-customer-ip-address",
      "x-fapi-interaction-id": "x-fapi-interaction-id",
      "Authorization": "Authorization",
      "x-idempotency-key": "x-idempotency-key",
      "x-jws-signature": "x-jws-signature",
      "x-customer-user-agent": "x-customer-user-agent"
    }
  },
  inputParamsSchema
}

export default tool
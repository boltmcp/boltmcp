import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfilepaymentsfilepaymentid",
  "toolDescription": "Retrieve a file payment",
  "baseUrl": "https://oba-auth.revolut.com",
  "path": "/file-payments/{FilePaymentId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "FilePaymentId": "FilePaymentId"
    },
    "header": {
      "x-fapi-financial-id": "x-fapi-financial-id",
      "x-fapi-customer-last-logged-time": "x-fapi-customer-last-logged-time",
      "x-fapi-customer-ip-address": "x-fapi-customer-ip-address",
      "x-fapi-interaction-id": "x-fapi-interaction-id",
      "Authorization": "Authorization",
      "x-customer-user-agent": "x-customer-user-agent"
    }
  },
  inputParamsSchema
}

export default tool
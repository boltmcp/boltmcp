import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evmaerov2providersummary",
  "toolDescription": "V2 - Provider Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/evm/aero/v2/provider-summary",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "wallet_address": "wallet_address"
    }
  },
  inputParamsSchema
}

export default tool
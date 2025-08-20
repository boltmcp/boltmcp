import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanaholdertokenbalances",
  "toolDescription": "Holder Token Balances (USD)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/holder-token-balances",
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
      "wallet_address": "wallet_address",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
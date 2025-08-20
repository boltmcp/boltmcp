import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanawalletbalancehistory",
  "toolDescription": "Wallet Token Balance History",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/wallet-balance-history",
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
      "token_address": "token_address",
      "after_time": "after_time",
      "before_time": "before_time",
      "limit": "limit",
      "offset": "offset",
      "order_asc": "order_asc",
      "order_desc": "order_desc"
    }
  },
  inputParamsSchema
}

export default tool
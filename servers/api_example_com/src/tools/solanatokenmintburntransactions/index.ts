import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanatokenmintburntransactions",
  "toolDescription": "Token Mint/Burn Transactions",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/token-mint-burn-transactions",
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
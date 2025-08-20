import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solana_tokentransactions",
  "toolDescription": "Token Transaction Feed",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/token-transactions",
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
      "days": "days",
      "tx_type": "tx_type",
      "dex": "dex",
      "pool_address": "pool_address",
      "min_value_usd": "min_value_usd",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
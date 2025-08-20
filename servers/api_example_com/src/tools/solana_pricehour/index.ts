import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solana_pricehour",
  "toolDescription": "Token Price (Interval Aggregated)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/price-hour",
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
      "interval": "interval",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanatokentransactionstimebounded",
  "toolDescription": "Token Transaction Feed (Time Bounded)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/token-transactions-time-bounded",
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
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
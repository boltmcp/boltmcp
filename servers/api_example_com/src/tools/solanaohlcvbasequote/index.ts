import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanaohlcvbasequote",
  "toolDescription": "OHLCV (Base/Quote)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/ohlcv/base-quote",
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
      "base_address": "base_address",
      "quote_address": "quote_address",
      "after_time": "after_time",
      "before_time": "before_time",
      "interval": "interval"
    }
  },
  inputParamsSchema
}

export default tool
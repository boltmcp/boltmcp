import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanapricevolumesingle",
  "toolDescription": "Token Price and Volume (Single)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/price-volume/single",
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
      "timeframe": "timeframe"
    }
  },
  inputParamsSchema
}

export default tool
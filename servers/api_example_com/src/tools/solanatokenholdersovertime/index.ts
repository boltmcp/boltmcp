import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanatokenholdersovertime",
  "toolDescription": "Token Holders Over Time",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/tokens/holders-over-time",
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
      "start_block": "start_block",
      "end_block": "end_block"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evmpricecurrent",
  "toolDescription": "Token Price (Current)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/evm/price-current",
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
      "chain_id": "chain_id"
    }
  },
  inputParamsSchema
}

export default tool
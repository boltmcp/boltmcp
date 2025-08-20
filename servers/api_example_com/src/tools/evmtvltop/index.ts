import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evmtvltop",
  "toolDescription": "Top token holders",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/evm/tvl/top-owners",
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
      "chain_id": "chain_id",
      "token_address": "token_address",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool
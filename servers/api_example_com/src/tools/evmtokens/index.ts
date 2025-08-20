import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evmtokens",
  "toolDescription": "Whitelisted Tokens",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/evm/tokens",
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
      "chain_id": "chain_id"
    }
  },
  inputParamsSchema
}

export default tool
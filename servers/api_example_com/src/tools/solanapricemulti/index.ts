import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanapricemulti",
  "toolDescription": "Multi Token Price (Current)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/price-multi",
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
      "token_addresses": "token_addresses"
    }
  },
  inputParamsSchema
}

export default tool
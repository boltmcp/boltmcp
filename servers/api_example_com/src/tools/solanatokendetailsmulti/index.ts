import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanatokendetailsmulti",
  "toolDescription": "Token Details Multi",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/token-details-multi",
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
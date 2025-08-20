import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanaorcapoolmulti",
  "toolDescription": "Pool Info (Multi)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/orca/pool-multi",
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
      "pool_addresses": "pool_addresses"
    }
  },
  inputParamsSchema
}

export default tool
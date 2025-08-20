import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "solanapoolsliquiditymap",
  "toolDescription": "Pool Liquidity Map",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/solana/orca/pools/liquidity-map",
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
      "pool_address": "pool_address",
      "resolution": "resolution"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evmaerov2pool",
  "toolDescription": "V2 - Pool Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/evm/aero/v2/pool",
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
      "apr_days_annualized": "apr_days_annualized"
    }
  },
  inputParamsSchema
}

export default tool
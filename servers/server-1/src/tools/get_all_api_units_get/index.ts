import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_api_units_get",
  "toolDescription": "Get All",
  "baseUrl": "https://api.example.com",
  "path": "/api/units",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "search": "search",
      "orderBy": "orderBy",
      "orderByNullPosition": "orderByNullPosition",
      "orderDirection": "orderDirection",
      "queryFilter": "queryFilter",
      "paginationSeed": "paginationSeed",
      "page": "page",
      "perPage": "perPage"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool
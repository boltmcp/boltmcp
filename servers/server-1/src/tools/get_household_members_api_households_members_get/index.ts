import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_household_members_api_households_members_get",
  "toolDescription": "Get Household Members",
  "baseUrl": "https://api.example.com",
  "path": "/api/households/members",
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_one_api_units_post",
  "toolDescription": "Create One",
  "baseUrl": "https://api.example.com",
  "path": "/api/units",
  "method": "post",
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
    "body": {
      "id": "id",
      "name": "name",
      "pluralName": "pluralName",
      "description": "description",
      "extras": "extras",
      "fraction": "fraction",
      "abbreviation": "abbreviation",
      "pluralAbbreviation": "pluralAbbreviation",
      "useAbbreviation": "useAbbreviation",
      "aliases": "aliases"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool
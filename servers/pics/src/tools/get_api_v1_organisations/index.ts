import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_organisations",
  "toolDescription": "Search Organisations",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/organisations",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "additionalID": "additionalID",
      "status": "status",
      "name": "name",
      "postcode": "postcode",
      "site": "site",
      "tag": "tag",
      "createdSince": "createdSince",
      "updatedSince": "updatedSince",
      "sortDirection": "sortDirection",
      "pageNumber": "pageNumber",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool
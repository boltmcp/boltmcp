import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_officers",
  "toolDescription": "Search Officers",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/officers",
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
      "firstNames": "firstNames",
      "surname": "surname",
      "sex": "sex",
      "postcode": "postcode",
      "email": "email",
      "role": "role",
      "jobTitle": "jobTitle",
      "mainOrganisation": "mainOrganisation",
      "superiorOfficer": "superiorOfficer",
      "site": "site",
      "status": "status",
      "tag": "tag",
      "createdSince": "createdSince",
      "modifiedSince": "modifiedSince",
      "sortBy": "sortBy",
      "sortDirection": "sortDirection",
      "pageNumber": "pageNumber",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool
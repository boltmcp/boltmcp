import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_appointments",
  "toolDescription": "Search Appointments",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/appointments",
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
      "text": "text",
      "type": "type",
      "class": "class",
      "status": "status",
      "subStatus": "subStatus",
      "workflow": "workflow",
      "modifiedSince": "modifiedSince",
      "createdSince": "createdSince",
      "sortDirection": "sortDirection",
      "pageNumber": "pageNumber",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool
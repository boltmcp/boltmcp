import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_applicants_id_udfanswers",
  "toolDescription": "Get Applicant User Defined Form answers",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/applicants/{id}/udfanswers",
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
    "path": {
      "id": "id"
    },
    "query": {
      "udfApiCodes": "udfApiCodes"
    }
  },
  inputParamsSchema
}

export default tool
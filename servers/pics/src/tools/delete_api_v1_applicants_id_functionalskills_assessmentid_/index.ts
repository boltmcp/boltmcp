import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_v1_applicants_id_functionalskills_assessmentid_",
  "toolDescription": "Delete an Applicant Functional Skills Assessment",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/applicants/{id}/functionalskills/{assessmentid}",
  "method": "delete",
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
      "id": "id",
      "assessmentId": "assessmentId"
    }
  },
  inputParamsSchema
}

export default tool
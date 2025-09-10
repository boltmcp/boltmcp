import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_learners_id_functionalskills_assessmentid_",
  "toolDescription": "Edit an Learner Functional Skills Assessment",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/learners/{id}/functionalskills/{assessmentid}",
  "method": "put",
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
    },
    "body": {
      "type": "type",
      "subject": "subject",
      "level": "level",
      "date": "date",
      "result": "result"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_learners_id_qualifications_aimreference_",
  "toolDescription": "Get a single Learner Qualification by Aim Reference",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/learners/{id}/qualifications/{aimreference}",
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
      "id": "id",
      "aimReference": "aimReference"
    }
  },
  inputParamsSchema
}

export default tool
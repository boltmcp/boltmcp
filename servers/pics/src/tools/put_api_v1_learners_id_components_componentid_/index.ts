import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_learners_id_components_componentid_",
  "toolDescription": "Edit a Learner Component",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/learners/{id}/components/{componentid}",
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
      "componentId": "componentId"
    },
    "body": {
      "id": "b_id",
      "start": "start",
      "priorityFlag": "priorityFlag",
      "due": "due",
      "done": "done",
      "notes": "notes",
      "linkId": "linkId"
    }
  },
  inputParamsSchema
}

export default tool
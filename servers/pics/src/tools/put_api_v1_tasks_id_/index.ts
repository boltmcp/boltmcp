import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_tasks_id_",
  "toolDescription": "Edit Task",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/tasks/{id}",
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
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "description": "description",
      "notes": "notes",
      "status": "status",
      "subStatus": "subStatus",
      "workflow": "workflow",
      "dueOn": "dueOn",
      "doneOn": "doneOn",
      "start": "start",
      "participants": "participants"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_tasks",
  "toolDescription": "Insert Task",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/tasks",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "description": "description",
      "notes": "notes",
      "type": "type",
      "workflow": "workflow",
      "dueOn": "dueOn",
      "doneOn": "doneOn",
      "start": "start",
      "participants": "participants",
      "templateID": "templateID",
      "templateIDChecksum": "templateIDChecksum"
    }
  },
  inputParamsSchema
}

export default tool
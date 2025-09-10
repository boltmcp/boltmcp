import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_appointments",
  "toolDescription": "Insert Appointment",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/appointments",
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
      "title": "title",
      "description": "description",
      "workflow": "workflow",
      "class": "class",
      "type": "type",
      "expectedStart": "expectedStart",
      "expectedEnd": "expectedEnd",
      "actualStart": "actualStart",
      "actualEnd": "actualEnd",
      "allDay": "allDay",
      "participants": "participants",
      "templateID": "templateID",
      "templateIDChecksum": "templateIDChecksum"
    }
  },
  inputParamsSchema
}

export default tool
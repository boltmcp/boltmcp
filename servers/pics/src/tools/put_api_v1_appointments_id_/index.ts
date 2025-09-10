import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_appointments_id_",
  "toolDescription": "Edit Appointment",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/appointments/{id}",
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
      "title": "title",
      "description": "description",
      "status": "status",
      "subStatus": "subStatus",
      "workflow": "workflow",
      "class": "class",
      "type": "type",
      "expectedStart": "expectedStart",
      "expectedEnd": "expectedEnd",
      "actualStart": "actualStart",
      "actualEnd": "actualEnd",
      "allDay": "allDay",
      "participants": "participants"
    }
  },
  inputParamsSchema
}

export default tool
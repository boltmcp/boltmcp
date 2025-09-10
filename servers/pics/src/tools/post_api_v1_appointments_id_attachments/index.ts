import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_appointments_id_attachments",
  "toolDescription": "Add an Attachment to an Appointment",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/appointments/{id}/attachments",
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
    "path": {
      "id": "id"
    },
    "body": {
      "iD": "iD",
      "description": "description",
      "fileType": "fileType",
      "expires": "expires",
      "file": "file"
    }
  },
  inputParamsSchema
}

export default tool
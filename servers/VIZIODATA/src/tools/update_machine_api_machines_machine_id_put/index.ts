import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_machine_api_machines_machine_id_put",
  "toolDescription": "Update machine",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/machines/{machine_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "machine_id": "machine_id"
    },
    "body": {
      "name": "name",
      "area_id": "area_id",
      "subarea_id": "subarea_id",
      "active": "active",
      "hidden": "hidden"
    }
  },
  inputParamsSchema
}

export default tool
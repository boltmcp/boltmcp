import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_machine_api_machines_machine_id_get",
  "toolDescription": "Get machine by ID",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/machines/{machine_id}",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool
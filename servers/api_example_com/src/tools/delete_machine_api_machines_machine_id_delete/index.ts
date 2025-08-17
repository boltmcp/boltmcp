import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_machine_api_machines_machine_id_delete",
  "toolDescription": "Delete machine",
  "baseUrl": "https://api.example.com",
  "path": "/api/machines/{machine_id}",
  "method": "delete",
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
    "query": {
      "permanent": "permanent"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_data_source_api_data_sources_source_id_delete",
  "toolDescription": "Delete data source",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-sources/{source_id}",
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
      "source_id": "source_id"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_data_source_api_data_sources_source_id_get",
  "toolDescription": "Get data source by ID",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-sources/{source_id}",
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
      "source_id": "source_id"
    }
  },
  inputParamsSchema
}

export default tool
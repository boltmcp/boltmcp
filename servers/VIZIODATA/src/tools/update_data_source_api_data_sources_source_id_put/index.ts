import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_data_source_api_data_sources_source_id_put",
  "toolDescription": "Update data source",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-sources/{source_id}",
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
      "source_id": "source_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "company_id": "company_id",
      "config": "config",
      "collection_interval": "collection_interval"
    }
  },
  inputParamsSchema
}

export default tool
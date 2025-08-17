import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_data_source_api_data_sources_post",
  "toolDescription": "Create a new data source",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-sources/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "type": "type",
      "description": "description",
      "company_id": "company_id",
      "config": "config",
      "collection_interval": "collection_interval"
    }
  },
  inputParamsSchema
}

export default tool
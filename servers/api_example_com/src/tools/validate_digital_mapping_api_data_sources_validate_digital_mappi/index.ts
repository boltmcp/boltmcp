import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_digital_mapping_api_data_sources_validate_digital_mappi",
  "toolDescription": "Validate digital mapping configuration",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-sources/validate-digital-mapping",
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
      "mappings": "mappings"
    }
  },
  inputParamsSchema
}

export default tool
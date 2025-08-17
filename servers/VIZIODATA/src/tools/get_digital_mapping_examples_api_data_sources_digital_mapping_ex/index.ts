import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_digital_mapping_examples_api_data_sources_digital_mapping_ex",
  "toolDescription": "Get examples of digital mappings",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-sources/digital-mapping-examples",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
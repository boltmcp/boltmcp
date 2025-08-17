import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invalidate_tag_cache_api_sensor_data_cache_invalidate_tag_id_del",
  "toolDescription": "Invalidate cache for a tag",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-data/cache/invalidate/{tag_id}",
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
      "tag_id": "tag_id"
    }
  },
  inputParamsSchema
}

export default tool
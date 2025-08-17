import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_cache_statistics_api_sensor_data_cache_stats_tag_id_get",
  "toolDescription": "Get cache statistics for a tag",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sensor-data/cache/stats/{tag_id}",
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
      "tag_id": "tag_id"
    }
  },
  inputParamsSchema
}

export default tool
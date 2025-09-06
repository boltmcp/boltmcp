import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_time_frame_treets_treet_id_time_frames_post",
  "toolDescription": "Create Time Frame",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets/{treet_id}/time-frames",
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
    "path": {
      "treet_id": "treet_id"
    },
    "body": {
      "interval_type": "interval_type",
      "limit": "limit",
      "tz": "tz"
    }
  },
  inputParamsSchema
}

export default tool
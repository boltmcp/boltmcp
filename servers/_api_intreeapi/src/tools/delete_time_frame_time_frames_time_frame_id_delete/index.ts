import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_time_frame_time_frames_time_frame_id_delete",
  "toolDescription": "Delete Time Frame",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/time-frames/{time_frame_id}",
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
      "time_frame_id": "time_frame_id"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_position_of_aspect_aspects_change_position_post",
  "toolDescription": "Change Position Of Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspects/change-position",
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
      "item_to_move_id": "item_to_move_id",
      "previous_item_id": "previous_item_id"
    }
  },
  inputParamsSchema
}

export default tool
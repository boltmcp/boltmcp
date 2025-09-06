import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_activity_by_object_internal_notifications_by_object_delet",
  "toolDescription": "Delete Activity By Object",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/notifications/by-object",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "object_id": "object_id",
      "activity_type": "activity_type"
    }
  },
  inputParamsSchema
}

export default tool
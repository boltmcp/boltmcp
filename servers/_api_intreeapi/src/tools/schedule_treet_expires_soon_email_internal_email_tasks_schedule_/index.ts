import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "schedule_treet_expires_soon_email_internal_email_tasks_schedule_",
  "toolDescription": "Schedule Treet Expires Soon Email",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/email-tasks/schedule-expires-soon",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "valid_from": "valid_from",
      "expires_at": "expires_at",
      "treet_id": "treet_id",
      "hub_id": "hub_id",
      "treet_name": "treet_name",
      "cover_image_url": "cover_image_url"
    }
  },
  inputParamsSchema
}

export default tool
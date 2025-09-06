import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reschedule_treet_expires_soon_email_internal_email_tasks_schedul",
  "toolDescription": "Reschedule Treet Expires Soon Email",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/email-tasks/schedule-expires-soon",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "body": {
      "valid_from": "valid_from",
      "expires_at": "expires_at",
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool
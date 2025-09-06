import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_moderation_emails_task_internal_email_tasks_moderation_post",
  "toolDescription": "Send Moderation Emails Task",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/email-tasks/moderation",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "media_id": "media_id",
      "moderation_label_names": "moderation_label_names"
    }
  },
  inputParamsSchema
}

export default tool
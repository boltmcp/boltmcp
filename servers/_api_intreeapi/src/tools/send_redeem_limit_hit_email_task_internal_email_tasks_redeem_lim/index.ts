import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_redeem_limit_hit_email_task_internal_email_tasks_redeem_lim",
  "toolDescription": "Send Redeem Limit Hit Email Task",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/email-tasks/redeem-limit-hit",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "treet_name": "treet_name",
      "hub_id": "hub_id",
      "cover_image_url": "cover_image_url"
    }
  },
  inputParamsSchema
}

export default tool
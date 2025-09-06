import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_new_partner_treet_email_internal_email_tasks_new_partner_tr",
  "toolDescription": "Send New Partner Treet Email",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/email-tasks/new-partner-treet",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "partner_id": "partner_id",
      "hub_id": "hub_id",
      "treet": "treet",
      "cover_image_url": "cover_image_url"
    }
  },
  inputParamsSchema
}

export default tool
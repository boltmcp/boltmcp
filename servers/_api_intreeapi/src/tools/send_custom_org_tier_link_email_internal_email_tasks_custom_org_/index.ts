import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_custom_org_tier_link_email_internal_email_tasks_custom_org_",
  "toolDescription": "Send Custom Org Tier Link Email",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/email-tasks/custom-org-tier-link",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "org_id": "org_id",
      "price": "price",
      "max_hubs": "max_hubs",
      "max_admins_per_hub": "max_admins_per_hub",
      "max_ambassadors": "max_ambassadors",
      "allow_extra_ambassadors": "allow_extra_ambassadors",
      "extra_ambassador_price": "extra_ambassador_price",
      "allow_hidden_member_list": "allow_hidden_member_list",
      "allow_free_packs": "allow_free_packs",
      "max_share_access_level": "max_share_access_level"
    }
  },
  inputParamsSchema
}

export default tool
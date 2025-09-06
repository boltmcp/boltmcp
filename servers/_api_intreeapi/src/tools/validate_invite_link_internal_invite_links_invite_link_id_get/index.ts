import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_invite_link_internal_invite_links_invite_link_id_get",
  "toolDescription": "Validate Invite Link",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/invite-links/{invite_link_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "invite_link_id": "invite_link_id"
    }
  },
  inputParamsSchema
}

export default tool
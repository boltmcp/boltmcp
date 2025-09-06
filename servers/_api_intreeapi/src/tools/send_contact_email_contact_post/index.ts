import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "send_contact_email_contact_post",
  "toolDescription": "Send Contact Email",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/contact",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "hub_type": "hub_type"
    }
  },
  inputParamsSchema
}

export default tool
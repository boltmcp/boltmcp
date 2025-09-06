import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_by_link_auth_verify_by_link_post",
  "toolDescription": "Verify By Link",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/verify-by-link",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "code": "code",
      "device": "device"
    }
  },
  inputParamsSchema
}

export default tool
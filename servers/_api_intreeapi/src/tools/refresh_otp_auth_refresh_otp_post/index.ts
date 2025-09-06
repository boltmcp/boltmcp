import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refresh_otp_auth_refresh_otp_post",
  "toolDescription": "Refresh Otp",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/refresh-otp",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "require_handshake": "require_handshake"
    },
    "body": {
      "dev_access_expiry_minutes": "dev_access_expiry_minutes",
      "dev_refresh_expiry_minutes": "dev_refresh_expiry_minutes",
      "refresh_token": "refresh_token"
    }
  },
  inputParamsSchema
}

export default tool
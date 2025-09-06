import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invalidate_refresh_token_auth_refresh_otp_invalidate_post",
  "toolDescription": "Invalidate Refresh Token",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/refresh-otp/invalidate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "dev_access_expiry_minutes": "dev_access_expiry_minutes",
      "dev_refresh_expiry_minutes": "dev_refresh_expiry_minutes",
      "refresh_token": "refresh_token"
    }
  },
  inputParamsSchema
}

export default tool
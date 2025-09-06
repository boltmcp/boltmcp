import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refresh_biz_tokens_auth_refresh_biz_post",
  "toolDescription": "Refresh Biz Tokens",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/refresh-biz",
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
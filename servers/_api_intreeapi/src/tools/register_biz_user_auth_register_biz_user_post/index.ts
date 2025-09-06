import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_biz_user_auth_register_biz_user_post",
  "toolDescription": "Register Biz User",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/auth/register-biz-user",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "dev_access_expiry_minutes": "dev_access_expiry_minutes",
      "dev_refresh_expiry_minutes": "dev_refresh_expiry_minutes",
      "email": "email",
      "phone": "phone",
      "settings": "settings",
      "password": "password",
      "name": "name"
    },
    "header": {
      "X-Firebase-AppCheck": "X-Firebase-AppCheck",
      "X-Recaptcha-Token": "X-Recaptcha-Token"
    }
  },
  inputParamsSchema
}

export default tool
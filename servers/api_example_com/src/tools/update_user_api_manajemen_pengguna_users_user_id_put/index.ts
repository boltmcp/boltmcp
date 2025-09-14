import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_api_manajemen_pengguna_users_user_id_put",
  "toolDescription": "Update User",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-pengguna/users/{user_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "user_id": "user_id"
    },
    "body": {
      "id": "id",
      "full_name": "full_name",
      "phone_number": "phone_number",
      "preferred_language": "preferred_language",
      "last_login_at": "last_login_at",
      "role": "role",
      "plan_id": "plan_id",
      "company": "company",
      "website": "website",
      "current_credits": "current_credits",
      "email": "email",
      "referred_by": "referred_by",
      "affiliate_active_until": "affiliate_active_until"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
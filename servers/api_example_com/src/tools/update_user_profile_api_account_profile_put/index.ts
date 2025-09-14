import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_profile_api_account_profile_put",
  "toolDescription": "Update User Profile",
  "baseUrl": "https://api.example.com",
  "path": "/api/account/profile",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "full_name": "full_name",
      "email": "email",
      "company": "company",
      "website": "website",
      "phone_number": "phone_number",
      "current_credits": "current_credits",
      "role": "role"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool
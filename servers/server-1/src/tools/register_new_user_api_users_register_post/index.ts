import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "register_new_user_api_users_register_post",
  "toolDescription": "Register New User",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "group": "group",
      "household": "household",
      "groupToken": "groupToken",
      "email": "email",
      "username": "username",
      "fullName": "fullName",
      "password": "password",
      "passwordConfirm": "passwordConfirm",
      "advanced": "advanced",
      "private": "private",
      "seedData": "seedData",
      "locale": "locale"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool
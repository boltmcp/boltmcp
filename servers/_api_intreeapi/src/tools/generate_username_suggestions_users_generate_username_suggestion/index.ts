import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_username_suggestions_users_generate_username_suggestion",
  "toolDescription": "Generate Username Suggestions",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/generate-username-suggestions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "full_name": "full_name"
    }
  },
  inputParamsSchema
}

export default tool
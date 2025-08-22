import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_resume_from_content_create_resume_from_content_post",
  "toolDescription": "Create Resume From Content",
  "baseUrl": "https://api.example.com",
  "path": "/create_resume_from_content",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "role": "role",
      "profile_summary": "profile_summary",
      "key_achievements": "key_achievements",
      "areas_of_expertise": "areas_of_expertise",
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool
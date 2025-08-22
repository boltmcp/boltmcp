import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_resume_generate_resume_post",
  "toolDescription": "Generate Resume",
  "baseUrl": "https://api.example.com",
  "path": "/generate_resume",
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
      "job_description": "job_description",
      "format": "format",
      "original_resume": "original_resume",
      "enable_thinking": "enable_thinking"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_verify_link_auth_generate_verify_link_post",
  "toolDescription": "Generate Verify Link",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/generate-verify-link",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "full_name": "full_name",
      "phone": "phone",
      "date_of_birth": "date_of_birth",
      "salt": "salt"
    },
    "header": {
      "X-Recaptcha-Token": "X-Recaptcha-Token"
    }
  },
  inputParamsSchema
}

export default tool
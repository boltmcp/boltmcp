import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_otp_dev_auth_generate_otp_dev_post",
  "toolDescription": "Generate Otp Dev",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/generate-otp-dev",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phone": "phone",
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool
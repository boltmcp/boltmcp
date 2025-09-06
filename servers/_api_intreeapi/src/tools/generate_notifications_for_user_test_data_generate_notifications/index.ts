import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_notifications_for_user_test_data_generate_notifications",
  "toolDescription": "Generate Notifications For User",
  "baseUrl": "/api/intreeapi",
  "path": "/test-data/generate-notifications",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phone_number": "phone_number"
    }
  },
  inputParamsSchema
}

export default tool
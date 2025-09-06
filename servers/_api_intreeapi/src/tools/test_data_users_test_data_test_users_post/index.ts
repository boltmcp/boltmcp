import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_data_users_test_data_test_users_post",
  "toolDescription": "Test Data Users",
  "baseUrl": "/api/intreeapi",
  "path": "/test-data/test-users",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "amount_of_users": "amount_of_users",
      "is_in_relation": "is_in_relation"
    }
  },
  inputParamsSchema
}

export default tool
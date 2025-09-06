import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_data_users_for_load_least_test_data_test_users_load_test_po",
  "toolDescription": "Test Data Users For Load Least",
  "baseUrl": "/api/intreeapi",
  "path": "/test-data/test-users/load-test",
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
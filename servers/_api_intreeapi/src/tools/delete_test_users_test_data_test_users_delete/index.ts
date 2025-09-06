import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_test_users_test_data_test_users_delete",
  "toolDescription": "Delete Test Users",
  "baseUrl": "/api/intreeapi",
  "path": "/test-data/test-users",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "phone_numbers": "phone_numbers"
    }
  },
  inputParamsSchema
}

export default tool
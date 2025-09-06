import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_test_users_test_data_test_users_get",
  "toolDescription": "Get Test Users",
  "baseUrl": "/api/intreeapi",
  "path": "/test-data/test-users",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
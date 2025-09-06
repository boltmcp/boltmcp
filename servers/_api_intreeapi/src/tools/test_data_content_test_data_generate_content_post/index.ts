import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_data_content_test_data_generate_content_post",
  "toolDescription": "Test Data Content",
  "baseUrl": "/api/intreeapi",
  "path": "/test-data/generate-content",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phone_numbers": "phone_numbers",
      "num_relations": "num_relations"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validate_business_access_internal_businesses_business_id_access_",
  "toolDescription": "Validate Business Access",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/businesses/{business_id}/access",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "expected_type": "expected_type",
      "role": "role",
      "user_id": "user_id",
      "account_type": "account_type"
    }
  },
  inputParamsSchema
}

export default tool
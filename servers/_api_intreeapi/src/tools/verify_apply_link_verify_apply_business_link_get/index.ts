import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verify_apply_link_verify_apply_business_link_get",
  "toolDescription": "Verify Apply Link",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/verify-apply-business-link",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "domain_id": "domain_id",
      "token": "token",
      "tag": "tag"
    }
  },
  inputParamsSchema
}

export default tool
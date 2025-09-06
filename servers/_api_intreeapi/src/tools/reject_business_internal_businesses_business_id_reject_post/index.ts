import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reject_business_internal_businesses_business_id_reject_post",
  "toolDescription": "Reject Business",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/businesses/{business_id}/reject",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool
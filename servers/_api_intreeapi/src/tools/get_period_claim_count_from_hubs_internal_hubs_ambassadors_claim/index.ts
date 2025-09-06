import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_period_claim_count_from_hubs_internal_hubs_ambassadors_claim",
  "toolDescription": "Get Period Claim Count From Hubs",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/hubs/ambassadors/claims",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "hub_id": "hub_id",
      "start": "start",
      "end": "end"
    }
  },
  inputParamsSchema
}

export default tool
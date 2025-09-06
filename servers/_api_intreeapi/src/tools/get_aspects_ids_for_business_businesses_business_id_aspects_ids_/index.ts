import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_aspects_ids_for_business_businesses_business_id_aspects_ids_",
  "toolDescription": "Get Aspects Ids For Business",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/businesses/{business_id}/aspects-ids",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool
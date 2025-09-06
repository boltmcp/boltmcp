import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_treet_codes_treets_treet_id_codes_post",
  "toolDescription": "Upload Treet Codes",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets/{treet_id}/codes",
  "method": "post",
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
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool
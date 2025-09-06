import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_contract_agreement_contract_agreements_post",
  "toolDescription": "Create Contract Agreement",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/contract-agreements",
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
    "body": {
      "obj_id": "obj_id",
      "obj_type": "obj_type",
      "contract_type": "contract_type"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadproofofaddress",
  "toolDescription": "Upload proof of address",
  "baseUrl": "https://api.bnkbl.com",
  "path": "/partner/client/{client_id}/product/{product}/contract/signers/proof-of-address",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "client_id": "client_id",
      "product": "product"
    }
  },
  inputParamsSchema
}

export default tool
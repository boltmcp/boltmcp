import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putfleetsfleetidmembersmemberid",
  "toolDescription": "Move fleet member",
  "baseUrl": "https://esi.evetech.net",
  "path": "/fleets/{fleet_id}/members/{member_id}",
  "method": "put",
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
      "fleet_id": "fleet_id",
      "member_id": "member_id"
    },
    "body": {
      "role": "role",
      "squad_id": "squad_id",
      "wing_id": "wing_id"
    },
    "header": {
      "Accept-Language": "Accept-Language",
      "If-None-Match": "If-None-Match",
      "X-Compatibility-Date": "X-Compatibility-Date",
      "X-Tenant": "X-Tenant"
    }
  },
  inputParamsSchema
}

export default tool
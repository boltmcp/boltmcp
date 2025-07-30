import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postuiopenwindownewmail",
  "toolDescription": "Open New Mail Window",
  "baseUrl": "https://esi.evetech.net",
  "path": "/ui/openwindow/newmail",
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
    "body": {
      "body": "body",
      "recipients": "recipients",
      "subject": "subject",
      "to_corp_or_alliance_id": "to_corp_or_alliance_id",
      "to_mailing_list_id": "to_mailing_list_id"
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
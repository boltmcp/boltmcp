import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getkillmailskillmailidkillmailhash",
  "toolDescription": "Get a single killmail",
  "baseUrl": "https://esi.evetech.net",
  "path": "/killmails/{killmail_id}/{killmail_hash}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "killmail_hash": "killmail_hash",
      "killmail_id": "killmail_id"
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
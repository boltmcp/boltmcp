import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfwleaderboardscharacters",
  "toolDescription": "List of the top pilots in faction warfare",
  "baseUrl": "https://esi.evetech.net",
  "path": "/fw/leaderboards/characters",
  "method": "get",
  "security": [],
  "paramsMap": {
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_household_api_explore_groups_group_slug_households_household",
  "toolDescription": "Get Household",
  "baseUrl": "https://api.example.com",
  "path": "/api/explore/groups/{group_slug}/households/{household_slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "household_slug": "household_slug",
      "group_slug": "group_slug"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool
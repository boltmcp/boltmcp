import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "countries_getcountry",
  "toolDescription": "Gets a country.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/countries/{countryId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "countryId": "countryId"
    }
  },
  inputParamsSchema
}

export default tool
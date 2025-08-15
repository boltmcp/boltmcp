import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "defaultsuperfunds_upsertdefaultsuperfund",
  "toolDescription": "Persists the given default super fund into the database.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/defaultsuperfund",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "fund": "fund",
      "fundProduct": "fundProduct"
    }
  },
  inputParamsSchema
}

export default tool
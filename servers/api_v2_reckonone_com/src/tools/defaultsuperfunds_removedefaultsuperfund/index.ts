import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "defaultsuperfunds_removedefaultsuperfund",
  "toolDescription": "Remove the default super fund for the given book from the database.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/defaultsuperfund",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool
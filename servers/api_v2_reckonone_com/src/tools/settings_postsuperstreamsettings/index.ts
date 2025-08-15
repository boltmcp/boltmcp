import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_postsuperstreamsettings",
  "toolDescription": "Update book's superstream settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/superstream",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "selectedProvider": "selectedProvider"
    }
  },
  inputParamsSchema
}

export default tool
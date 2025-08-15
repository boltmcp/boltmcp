import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfundproviders_requestnewsuperfundprovider",
  "toolDescription": "Requests the addition of a super fund provider.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfundProviders/requestNewProvider",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "name": "name",
      "abn": "abn",
      "usi": "usi"
    }
  },
  inputParamsSchema
}

export default tool
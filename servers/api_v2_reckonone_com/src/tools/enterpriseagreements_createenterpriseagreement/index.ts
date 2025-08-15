import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "enterpriseagreements_createenterpriseagreement",
  "toolDescription": "Persists the given enterprise agreement into the database.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/enterpriseagreements",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "name": "name",
      "classifications": "classifications"
    }
  },
  inputParamsSchema
}

export default tool
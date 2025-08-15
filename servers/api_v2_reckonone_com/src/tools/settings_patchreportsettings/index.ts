import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchreportsettings",
  "toolDescription": "Updates selected fields of a book's report settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/reports",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "reportBasis": "reportBasis",
      "reportAgeingBasis": "reportAgeingBasis",
      "pdfSetup": "pdfSetup"
    }
  },
  inputParamsSchema
}

export default tool
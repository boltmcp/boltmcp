import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_getcreditnote",
  "toolDescription": "Gets a credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId"
    },
    "query": {
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool
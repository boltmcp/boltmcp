import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "creditnotes_deletecreditnote",
  "toolDescription": "Deletes an existing credit note.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/creditNotes/{creditNoteId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "creditNoteId": "creditNoteId"
    }
  },
  inputParamsSchema
}

export default tool
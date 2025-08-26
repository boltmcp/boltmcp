import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusermangalist",
  "toolDescription": "User Manga lists have been discontinued since May 1st, 2022. <a href='https://docs.google.com/document/d/1-6H-agSnqa8Mfmw802UYfGQrceIEnAaEh4uCXAPiX5A'>Read more</a>",
  "baseUrl": "https://api.jikan.moe/v4",
  "path": "/users/{username}/mangalist",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username"
    },
    "query": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool
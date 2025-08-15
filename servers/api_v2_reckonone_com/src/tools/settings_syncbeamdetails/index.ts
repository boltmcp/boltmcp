import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_syncbeamdetails",
  "toolDescription": "Processes any details the user has changed in the Beam UI, whether when initially enabling Beam\nor when later updating any details.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/superstream/beam/readDetails/{participantId}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "participantId": "participantId"
    }
  },
  inputParamsSchema
}

export default tool
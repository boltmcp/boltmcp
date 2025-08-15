import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paytemplates_duplicatepaytemplate",
  "toolDescription": "Duplicate pay template.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/paytemplates/{payTemplateId}/duplicate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "payTemplateId": "payTemplateId"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paytemplates_postbatchpaytemplateearningsandallowances",
  "toolDescription": "Creates, updates, or deletes the earnings and allowance items of a pay template in a batch process.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/paytemplates/{payTemplateId}/payitems/batch",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "payTemplateId": "payTemplateId"
    },
    "body": {
      "processMethod": "processMethod",
      "earningsItems": "earningsItems",
      "allowanceItems": "allowanceItems"
    }
  },
  inputParamsSchema
}

export default tool
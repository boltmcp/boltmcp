import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_latest_contract_by_type_contracts_latest_get",
  "toolDescription": "Get Latest Contract By Type",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/contracts/latest",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "contract_type": "contract_type"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v2_cmdb_firewall_policy",
  "toolDescription": "List firewall policies",
  "baseUrl": "https://fortigate.eastus.cloudapp.azure.com",
  "path": "/api/v2/cmdb/firewall/policy",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "vdom": "vdom"
    }
  },
  inputParamsSchema
}

export default tool
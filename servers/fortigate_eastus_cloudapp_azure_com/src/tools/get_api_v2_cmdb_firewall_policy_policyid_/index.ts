import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v2_cmdb_firewall_policy_policyid_",
  "toolDescription": "Get a policy by ID",
  "baseUrl": "https://fortigate.eastus.cloudapp.azure.com",
  "path": "/api/v2/cmdb/firewall/policy/{policyid}",
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
    "path": {
      "policyid": "policyid"
    },
    "query": {
      "vdom": "vdom"
    }
  },
  inputParamsSchema
}

export default tool
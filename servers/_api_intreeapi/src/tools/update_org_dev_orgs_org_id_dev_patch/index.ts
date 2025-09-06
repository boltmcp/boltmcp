import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_org_dev_orgs_org_id_dev_patch",
  "toolDescription": "Update Org Dev",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/orgs/{org_id}/dev",
  "method": "patch",
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
      "org_id": "org_id"
    },
    "body": {
      "stripe_customer_id": "stripe_customer_id",
      "num_ambassadors": "num_ambassadors",
      "org_tier": "org_tier"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_listsandtypes_customprovisions",
  "toolDescription": "Get list of Custom Provisions codes and descriptions",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/listsandtypes/customprovisions",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
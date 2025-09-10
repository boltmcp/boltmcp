import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_listsandtypes_asstatus",
  "toolDescription": "Get list of Apprenticeships.Service Status codes and descriptions",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/listsandtypes/asstatus",
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
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_tasks_template_templateid_for_forid_",
  "toolDescription": "Get a create task object for a given template and entity",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/tasks/template/{templateid}/for/{forid}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "templateID": "templateID",
      "forID": "forID"
    }
  },
  inputParamsSchema
}

export default tool
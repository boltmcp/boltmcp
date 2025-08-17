import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_instances_api_processor_instances_instances_get",
  "toolDescription": "List Instances",
  "baseUrl": "https://api.example.com",
  "path": "/api/processor-instances/instances",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
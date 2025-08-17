import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_instance_details_api_processor_instances_instances_instance_",
  "toolDescription": "Get Instance Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/processor-instances/instances/{instance_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "instance_id": "instance_id"
    }
  },
  inputParamsSchema
}

export default tool
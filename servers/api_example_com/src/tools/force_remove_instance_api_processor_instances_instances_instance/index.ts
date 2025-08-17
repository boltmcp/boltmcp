import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "force_remove_instance_api_processor_instances_instances_instance",
  "toolDescription": "Force Remove Instance",
  "baseUrl": "https://api.example.com",
  "path": "/api/processor-instances/instances/{instance_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "instance_id": "instance_id"
    }
  },
  inputParamsSchema
}

export default tool
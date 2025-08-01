import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_taskupdate",
  "toolDescription": "Update a Task",
  "baseUrl": "https://api.example.com",
  "path": "/tasks/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "slug": "slug",
      "description": "description",
      "completed": "completed",
      "due_date": "due_date"
    }
  },
  inputParamsSchema
}

export default tool
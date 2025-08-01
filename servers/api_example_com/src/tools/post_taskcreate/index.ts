import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_taskcreate",
  "toolDescription": "Create a new Task",
  "baseUrl": "https://api.example.com",
  "path": "/tasks",
  "method": "post",
  "security": [],
  "paramsMap": {
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
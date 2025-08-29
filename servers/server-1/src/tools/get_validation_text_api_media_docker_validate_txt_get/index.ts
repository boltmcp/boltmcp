import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_validation_text_api_media_docker_validate_txt_get",
  "toolDescription": "Get Validation Text",
  "baseUrl": "https://api.example.com",
  "path": "/api/media/docker/validate.txt",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
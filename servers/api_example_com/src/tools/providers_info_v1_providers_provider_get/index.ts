import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "providers_info_v1_providers_provider_get",
  "toolDescription": "Providers Info",
  "baseUrl": "https://api.example.com",
  "path": "/v1/providers/{provider}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "provider": "provider"
    }
  },
  inputParamsSchema
}

export default tool
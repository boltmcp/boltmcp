import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_image_v1_media_generate_post",
  "toolDescription": "Generate Image",
  "baseUrl": "https://api.example.com",
  "path": "/v1/media/generate",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "provider": "provider"
    },
    "body": {
      "prompt": "prompt",
      "model": "model",
      "provider": "b_provider",
      "response_format": "response_format",
      "api_key": "api_key",
      "proxy": "proxy",
      "width": "width",
      "height": "height",
      "num_inference_steps": "num_inference_steps",
      "seed": "seed",
      "guidance_scale": "guidance_scale",
      "aspect_ratio": "aspect_ratio",
      "n": "n",
      "negative_prompt": "negative_prompt",
      "resolution": "resolution",
      "audio": "audio",
      "download_media": "download_media"
    }
  },
  inputParamsSchema
}

export default tool
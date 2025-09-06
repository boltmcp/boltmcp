import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_profile_by_business_businesses_business_id_profile_patch",
  "toolDescription": "Patch Profile By Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/profile",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "website_url": "website_url",
      "phone": "phone",
      "video_url": "video_url",
      "email": "email",
      "title": "title",
      "logo_image_id": "logo_image_id",
      "cover_image_id": "cover_image_id",
      "description": "description",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool
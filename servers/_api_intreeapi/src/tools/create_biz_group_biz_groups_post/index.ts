import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_biz_group_biz_groups_post",
  "toolDescription": "Create Biz Group",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-groups",
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
    "body": {
      "cover_image_id": "cover_image_id",
      "vertical_cover_image_id": "vertical_cover_image_id",
      "banner_image_id": "banner_image_id",
      "gradient_color_start": "gradient_color_start",
      "gradient_color_end": "gradient_color_end",
      "pattern_id": "pattern_id",
      "price_type": "price_type",
      "paid_by": "paid_by",
      "price": "price",
      "interval": "interval",
      "interval_count": "interval_count",
      "one_time_duration_minutes": "one_time_duration_minutes",
      "business_id": "business_id",
      "avatar_image_id": "avatar_image_id",
      "title": "title",
      "show_title": "show_title",
      "description": "description",
      "visibility": "visibility",
      "access_state": "access_state",
      "member_limit": "member_limit",
      "treet_ids": "treet_ids",
      "is_draft": "is_draft",
      "treet_share_access": "treet_share_access"
    }
  },
  inputParamsSchema
}

export default tool
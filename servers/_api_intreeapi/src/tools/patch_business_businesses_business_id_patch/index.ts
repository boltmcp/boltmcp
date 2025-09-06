import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_business_businesses_business_id_patch",
  "toolDescription": "Patch Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}",
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
      "name": "name",
      "invited_by_ref_code": "invited_by_ref_code",
      "onboarding_data": "onboarding_data",
      "location_type": "location_type",
      "location_data": "location_data",
      "access_type": "access_type",
      "can_app_members_invite": "can_app_members_invite",
      "can_app_members_accept_applications": "can_app_members_accept_applications",
      "hub_type": "hub_type",
      "categories": "categories",
      "location_update_data": "location_update_data",
      "join_type": "join_type",
      "require_member_verification": "require_member_verification",
      "enable_feed": "enable_feed",
      "enable_app_user_post": "enable_app_user_post",
      "enable_members": "enable_members",
      "enable_aspects": "enable_aspects",
      "enable_app_leaderboard": "enable_app_leaderboard",
      "default_currency": "default_currency"
    }
  },
  inputParamsSchema
}

export default tool
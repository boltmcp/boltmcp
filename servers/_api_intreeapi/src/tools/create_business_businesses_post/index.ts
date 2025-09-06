import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_business_businesses_post",
  "toolDescription": "Create Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses",
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
      "org_id": "org_id",
      "web_domain": "web_domain",
      "can_app_members_invite": "can_app_members_invite",
      "can_app_members_accept_applications": "can_app_members_accept_applications",
      "access_type": "access_type",
      "hub_type": "hub_type",
      "location_type": "location_type",
      "location_data": "location_data",
      "join_type": "join_type",
      "require_member_verification": "require_member_verification",
      "business_profile": "business_profile",
      "categories": "categories",
      "locations": "locations",
      "apply_domains": "apply_domains",
      "enable_feed": "enable_feed",
      "enable_app_user_post": "enable_app_user_post",
      "enable_members": "enable_members",
      "enable_aspects": "enable_aspects",
      "default_currency": "default_currency"
    }
  },
  inputParamsSchema
}

export default tool
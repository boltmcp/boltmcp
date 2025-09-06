import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_treet_treets_post",
  "toolDescription": "Create Treet",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets",
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
      "hub_id": "hub_id",
      "valid_from": "valid_from",
      "expires_at": "expires_at",
      "hidden_until": "hidden_until",
      "treet_version": "treet_version",
      "total_redeem_limit": "total_redeem_limit",
      "user_redeem_limit": "user_redeem_limit",
      "share_redeem_limit": "share_redeem_limit",
      "show_redeems_left": "show_redeems_left",
      "is_sharable": "is_sharable",
      "total_share_limit": "total_share_limit",
      "user_share_limit": "user_share_limit",
      "branch_limit": "branch_limit",
      "redeem_validation_type": "redeem_validation_type",
      "schedule_id": "schedule_id",
      "cooldown": "cooldown",
      "allow_reservations": "allow_reservations",
      "gallery_ids": "gallery_ids",
      "category_ids": "category_ids",
      "codes": "codes",
      "locations": "locations"
    }
  },
  inputParamsSchema
}

export default tool
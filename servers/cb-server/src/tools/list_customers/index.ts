import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_customers",
  "toolDescription": "List customers",
  "baseUrl": "https://medimitra-test.chargebee.com/api/v2/",
  "path": "/customers",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "include_deleted": "include_deleted",
      "id": "id",
      "first_name": "first_name",
      "last_name": "last_name",
      "email": "email",
      "company": "company",
      "phone": "phone",
      "auto_collection": "auto_collection",
      "taxability": "taxability",
      "created_at": "created_at",
      "updated_at": "updated_at",
      "offline_payment_method": "offline_payment_method",
      "auto_close_invoices": "auto_close_invoices",
      "channel": "channel",
      "business_entity_id": "business_entity_id",
      "sort_by": "sort_by",
      "relationship": "relationship"
    },
    "header": {
      "chargebee-request-origin-device": "chargebee-request-origin-device",
      "chargebee-request-origin-user": "chargebee-request-origin-user",
      "chargebee-request-origin-user-encoded": "chargebee-request-origin-user-encoded",
      "chargebee-request-origin-ip": "chargebee-request-origin-ip",
      "chargebee-business-entity-id": "chargebee-business-entity-id"
    }
  },
  inputParamsSchema
}

export default tool
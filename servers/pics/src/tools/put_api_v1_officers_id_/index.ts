import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_officers_id_",
  "toolDescription": "Edit Officer",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/officers/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "title": "title",
      "firstNames": "firstNames",
      "surname": "surname",
      "jobTitle": "jobTitle",
      "email": "email",
      "roles": "roles",
      "systemStatus": "systemStatus",
      "address": "address",
      "postcode": "postcode",
      "phone": "phone",
      "mobile": "mobile",
      "allowedContactMethods": "allowedContactMethods",
      "preferredContactMethod": "preferredContactMethod",
      "sex": "sex",
      "ethnicity": "ethnicity",
      "additionalID": "additionalID",
      "superior": "superior"
    }
  },
  inputParamsSchema
}

export default tool
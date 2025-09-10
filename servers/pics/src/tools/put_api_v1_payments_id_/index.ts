import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_payments_id_",
  "toolDescription": "Edit Payment",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/payments/{id}",
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
      "paymentItem": "paymentItem",
      "systemType": "systemType",
      "creditDebit": "creditDebit",
      "description": "description",
      "reference": "reference",
      "purchaseOrderNumber": "purchaseOrderNumber",
      "invoiceNumber": "invoiceNumber",
      "notes": "notes",
      "status": "status",
      "createdDate": "createdDate",
      "raisedDate": "raisedDate",
      "raisedBy": "raisedBy",
      "expectedDate": "expectedDate",
      "expectedAmount": "expectedAmount",
      "authorisedDate": "authorisedDate",
      "authorisedBy": "authorisedBy",
      "actualDate": "actualDate",
      "actualAmount": "actualAmount",
      "actualBy": "actualBy",
      "invoicedDate": "invoicedDate",
      "reconciledDate": "reconciledDate"
    }
  },
  inputParamsSchema
}

export default tool
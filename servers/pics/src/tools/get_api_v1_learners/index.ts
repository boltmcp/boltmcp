import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_learners",
  "toolDescription": "Search Learners",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/learners",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "surname": "surname",
      "firstNames": "firstNames",
      "sex": "sex",
      "learningStatus": "learningStatus",
      "status": "status",
      "workflow": "workflow",
      "workflowStatus": "workflowStatus",
      "workflowSubStatus": "workflowSubStatus",
      "qualificationPlan": "qualificationPlan",
      "site": "site",
      "subcontractorCode": "subcontractorCode",
      "nINumber": "nINumber",
      "postcode": "postcode",
      "uLN": "uLN",
      "mainOfficer": "mainOfficer",
      "dateOfBirth": "dateOfBirth",
      "employer": "employer",
      "pONumber": "pONumber",
      "providerIdent": "providerIdent",
      "learnerReferenceNumber": "learnerReferenceNumber",
      "createdSince": "createdSince",
      "modifiedSince": "modifiedSince",
      "plannedStartAfter": "plannedStartAfter",
      "plannedStartBefore": "plannedStartBefore",
      "expectedEndAfter": "expectedEndAfter",
      "expectedEndBefore": "expectedEndBefore",
      "sortBy": "sortBy",
      "sortDirection": "sortDirection",
      "pageNumber": "pageNumber",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool
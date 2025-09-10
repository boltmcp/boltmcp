import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_applicants",
  "toolDescription": "Search Applicants",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/applicants",
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
      "status": "status",
      "workflowCode": "workflowCode",
      "workflowStatus": "workflowStatus",
      "workflowSubStatus": "workflowSubStatus",
      "qualificationPlan": "qualificationPlan",
      "site": "site",
      "nINumber": "nINumber",
      "learnerReferenceNumber": "learnerReferenceNumber",
      "postcode": "postcode",
      "uLN": "uLN",
      "mainOfficer": "mainOfficer",
      "recruitmentOfficer": "recruitmentOfficer",
      "dateOfBirth": "dateOfBirth",
      "employerCode": "employerCode",
      "modifiedSince": "modifiedSince",
      "createdSince": "createdSince",
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
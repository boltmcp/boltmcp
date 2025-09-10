import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_organisations_id_",
  "toolDescription": "Edit Organisation",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/organisations/{id}",
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
      "name": "name",
      "alias": "alias",
      "phone": "phone",
      "mobile": "mobile",
      "email": "email",
      "alternateEmail": "alternateEmail",
      "address": "address",
      "ward": "ward",
      "allowedContactMethods": "allowedContactMethods",
      "preferredContactMethod": "preferredContactMethod",
      "risk": "risk",
      "website": "website",
      "upin": "upin",
      "ukprn": "ukprn",
      "edsReference": "edsReference",
      "companyRegistrationNumber": "companyRegistrationNumber",
      "epaOrganisation": "epaOrganisation",
      "mainOfficer": "mainOfficer",
      "mainContact": "mainContact",
      "headOffice": "headOffice",
      "status": "status",
      "roles": "roles",
      "additionalID": "additionalID",
      "invoiceAddress": "invoiceAddress",
      "invoiceName": "invoiceName",
      "invoicePhone": "invoicePhone",
      "invoiceEmail": "invoiceEmail",
      "allowMarketing": "allowMarketing",
      "hasIIP": "hasIIP",
      "previousTraining": "previousTraining",
      "ethnicMinorityBusiness": "ethnicMinorityBusiness",
      "notes": "notes",
      "employerSizeBand": "employerSizeBand",
      "accountingSystemID": "accountingSystemID",
      "vatRegNo": "vatRegNo",
      "employeeCount": "employeeCount",
      "annualTurnover": "annualTurnover"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_v1_applicants",
  "toolDescription": "Insert Applicant",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/applicants",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "title": "title",
      "firstNames": "firstNames",
      "preferredFirstName": "preferredFirstName",
      "surname": "surname",
      "previousSurname": "previousSurname",
      "email": "email",
      "risk": "risk",
      "address": "address",
      "homePhone": "homePhone",
      "mobile": "mobile",
      "picsUsername": "picsUsername",
      "allowedContactMethods": "allowedContactMethods",
      "preferredContactMethod": "preferredContactMethod",
      "dateOfBirth": "dateOfBirth",
      "sex": "sex",
      "ethnicity": "ethnicity",
      "niNumber": "niNumber",
      "learnerReferenceNumber": "learnerReferenceNumber",
      "ilrDisability": "ilrDisability",
      "lldDs": "lldDs",
      "primaryLLDD": "primaryLLDD",
      "householdSituation": "householdSituation",
      "nextOfKinName": "nextOfKinName",
      "nextOfKinRelationship": "nextOfKinRelationship",
      "nextOfKinPhone": "nextOfKinPhone",
      "nextOfKinPhone2": "nextOfKinPhone2",
      "nextOfKinEmail": "nextOfKinEmail",
      "otherSystemID": "otherSystemID",
      "providerIdent": "providerIdent",
      "mainOfficer": "mainOfficer",
      "recruitmentOfficer": "recruitmentOfficer",
      "mentorOfficer": "mentorOfficer",
      "plannedStart": "plannedStart",
      "expectedEnd": "expectedEnd",
      "countryOfDomicile": "countryOfDomicile",
      "site": "site",
      "uln": "uln",
      "restrictedUseIndicator": "restrictedUseIndicator",
      "gcseMath": "gcseMath",
      "gcseEnglish": "gcseEnglish",
      "qualificationPlan": "qualificationPlan",
      "act": "act",
      "vatStatus": "vatStatus",
      "asStatus": "asStatus",
      "asCohort": "asCohort",
      "bksbUsername": "bksbUsername",
      "workflow": "workflow",
      "employerCode": "employerCode",
      "recruitmentAgencyCode": "recruitmentAgencyCode",
      "opportunityID": "opportunityID"
    }
  },
  inputParamsSchema
}

export default tool
import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_applicants_id_",
  "toolDescription": "Edit Applicant",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/applicants/{id}",
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
      "originalApplicantID": "originalApplicantID",
      "title": "title",
      "firstNames": "firstNames",
      "preferredFirstName": "preferredFirstName",
      "surname": "surname",
      "previousSurname": "previousSurname",
      "email": "email",
      "risk": "risk",
      "address": "address",
      "ward": "ward",
      "homePhone": "homePhone",
      "mobile": "mobile",
      "username": "username",
      "userID": "userID",
      "allowedContactMethods": "allowedContactMethods",
      "preferredContactMethod": "preferredContactMethod",
      "dateOfBirth": "dateOfBirth",
      "currentAge": "currentAge",
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
      "employerCode": "employerCode",
      "recruitmentAgencyCode": "recruitmentAgencyCode",
      "opportunityID": "opportunityID"
    }
  },
  inputParamsSchema
}

export default tool
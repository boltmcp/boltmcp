import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_v1_learners_id_",
  "toolDescription": "Edit Learner",
  "baseUrl": "https://pathwaygroup.picsweb.co.uk/",
  "path": "/api/v1/learners/{id}",
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
      "preferredFirstName": "preferredFirstName",
      "surname": "surname",
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
      "sex": "sex",
      "ethnicity": "ethnicity",
      "niNumber": "niNumber",
      "ilrDisability": "ilrDisability",
      "lldDs": "lldDs",
      "primaryLLDD": "primaryLLDD",
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
      "qualificationPlan": "qualificationPlan"
    }
  },
  inputParamsSchema
}

export default tool
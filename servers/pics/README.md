# @open-mcp/pics

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "pics": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/pics@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/pics@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
AUTHORIZATION='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add pics \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add pics \
  .cursor/mcp.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Other

```bash
npx @open-mcp/config add pics \
  /path/to/client/config.json \
  --AUTHORIZATION=$AUTHORIZATION
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "pics": {
      "command": "npx",
      "args": ["-y", "@open-mcp/pics"],
      "env": {"AUTHORIZATION":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `AUTHORIZATION` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_api_v1_applicants

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `surname` (string)
- `firstNames` (string)
- `sex` (string)
- `status` (string)
- `workflowCode` (string)
- `workflowStatus` (string)
- `workflowSubStatus` (string)
- `qualificationPlan` (string)
- `site` (string)
- `nINumber` (string)
- `learnerReferenceNumber` (string)
- `postcode` (string)
- `uLN` (string)
- `mainOfficer` (string)
- `recruitmentOfficer` (string)
- `dateOfBirth` (string)
- `employerCode` (string)
- `modifiedSince` (string)
- `createdSince` (string)
- `plannedStartAfter` (string)
- `plannedStartBefore` (string)
- `expectedEndAfter` (string)
- `expectedEndBefore` (string)
- `sortBy` (string)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### post_api_v1_applicants

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `title` (string)
- `firstNames` (string)
- `preferredFirstName` (string)
- `surname` (string)
- `previousSurname` (string)
- `email` (string)
- `risk` (string)
- `address` (object)
- `homePhone` (string)
- `mobile` (string)
- `picsUsername` (string)
- `allowedContactMethods` (array)
- `preferredContactMethod` (string)
- `dateOfBirth` (string)
- `sex` (string)
- `ethnicity` (string)
- `niNumber` (string)
- `learnerReferenceNumber` (string)
- `ilrDisability` (string)
- `lldDs` (array)
- `primaryLLDD` (string)
- `householdSituation` (array)
- `nextOfKinName` (string)
- `nextOfKinRelationship` (string)
- `nextOfKinPhone` (string)
- `nextOfKinPhone2` (string)
- `nextOfKinEmail` (string)
- `otherSystemID` (string)
- `providerIdent` (string)
- `mainOfficer` (string)
- `recruitmentOfficer` (string)
- `mentorOfficer` (string)
- `plannedStart` (string)
- `expectedEnd` (string)
- `countryOfDomicile` (string)
- `site` (string)
- `uln` (string)
- `restrictedUseIndicator` (string)
- `gcseMath` (string)
- `gcseEnglish` (string)
- `qualificationPlan` (string)
- `act` (string)
- `vatStatus` (string)
- `asStatus` (string)
- `asCohort` (string)
- `bksbUsername` (string)
- `workflow` (string)
- `employerCode` (string)
- `recruitmentAgencyCode` (string)
- `opportunityID` (integer)

### get_api_v1_applicants_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### put_api_v1_applicants_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `b_id` (string)
- `originalApplicantID` (string)
- `title` (string)
- `firstNames` (string)
- `preferredFirstName` (string)
- `surname` (string)
- `previousSurname` (string)
- `email` (string)
- `risk` (string)
- `address` (object)
- `ward` (string)
- `homePhone` (string)
- `mobile` (string)
- `username` (string)
- `userID` (string)
- `allowedContactMethods` (array)
- `preferredContactMethod` (string)
- `dateOfBirth` (string)
- `currentAge` (string)
- `sex` (string)
- `ethnicity` (string)
- `niNumber` (string)
- `learnerReferenceNumber` (string)
- `ilrDisability` (string)
- `lldDs` (array)
- `primaryLLDD` (string)
- `householdSituation` (array)
- `nextOfKinName` (string)
- `nextOfKinRelationship` (string)
- `nextOfKinPhone` (string)
- `nextOfKinPhone2` (string)
- `nextOfKinEmail` (string)
- `otherSystemID` (string)
- `providerIdent` (string)
- `mainOfficer` (string)
- `recruitmentOfficer` (string)
- `mentorOfficer` (string)
- `plannedStart` (string)
- `expectedEnd` (string)
- `countryOfDomicile` (string)
- `site` (string)
- `uln` (string)
- `restrictedUseIndicator` (string)
- `gcseMath` (string)
- `gcseEnglish` (string)
- `qualificationPlan` (string)
- `act` (string)
- `vatStatus` (string)
- `asStatus` (string)
- `asCohort` (string)
- `bksbUsername` (string)
- `employerCode` (string)
- `recruitmentAgencyCode` (string)
- `opportunityID` (integer)

### get_api_v1_applicants_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `udfApiCodes` (array)

### post_api_v1_applicants_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `udfAnswers` (object)

### get_api_v1_applicants_udfs

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_applicants_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_applicants_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_applicants_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### delete_api_v1_applicants_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### get_api_v1_applicants_id_functionalskills

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_applicants_id_functionalskills

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `type` (string)
- `subject` (string)
- `level` (string)
- `date` (string)
- `result` (number)

### put_api_v1_applicants_id_functionalskills_assessmentid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `assessmentId` (string)
- `type` (string)
- `subject` (string)
- `level` (string)
- `date` (string)
- `result` (number)

### delete_api_v1_applicants_id_functionalskills_assessmentid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `assessmentId` (string)

### get_api_v1_applicants_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_applicants_id_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_applicants_id_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### delete_api_v1_applicants_id_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### get_api_v1_applicants_id_photo

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_appointments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `text` (string)
- `type` (string)
- `class` (string)
- `status` (string)
- `subStatus` (string)
- `workflow` (string)
- `modifiedSince` (string)
- `createdSince` (string)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### post_api_v1_appointments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `title` (string)
- `description` (string)
- `workflow` (string)
- `class` (string)
- `type` (string)
- `expectedStart` (string)
- `expectedEnd` (string)
- `actualStart` (string)
- `actualEnd` (string)
- `allDay` (boolean)
- `participants` (array)
- `templateID` (string)
- `templateIDChecksum` (string)

### get_api_v1_appointments_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)

### put_api_v1_appointments_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `title` (string)
- `description` (string)
- `status` (string)
- `subStatus` (string)
- `workflow` (string)
- `class` (string)
- `type` (string)
- `expectedStart` (string)
- `expectedEnd` (string)
- `actualStart` (string)
- `actualEnd` (string)
- `allDay` (boolean)
- `participants` (array)

### get_api_v1_appointments_template_templateid_for_forid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `templateID` (string)
- `forID` (string)

### get_api_v1_appointments_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `udfApiCodes` (array)

### post_api_v1_appointments_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `udfAnswers` (object)

### get_api_v1_appointments_udfs

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_appointments_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_appointments_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)

### post_api_v1_appointments_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `items` (array)

### delete_api_v1_appointments_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `items` (array)

### get_api_v1_appointments_id_attachments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)

### post_api_v1_appointments_id_attachments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `iD` (integer)
- `description` (string)
- `fileType` (string)
- `expires` (string)
- `file` (string)

### get_api_v1_appointments_id_attachments_attachmentid_download

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `attachmentId` (string)

### get_api_v1_appointments_templates

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_appointments_workflows

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_appointments_participantroles

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_appointments_participanttypes

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_appointments_statuses

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### post_api_v1_authentication

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `username` (string)
- `password` (string)

### post_api_v1_imports

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `importType` (string)
- `fields` (array)

### get_api_v1_learners

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `surname` (string)
- `firstNames` (string)
- `sex` (string)
- `learningStatus` (string)
- `status` (string)
- `workflow` (string)
- `workflowStatus` (string)
- `workflowSubStatus` (string)
- `qualificationPlan` (string)
- `site` (string)
- `subcontractorCode` (string)
- `nINumber` (string)
- `postcode` (string)
- `uLN` (string)
- `mainOfficer` (string)
- `dateOfBirth` (string)
- `employer` (string)
- `pONumber` (string)
- `providerIdent` (string)
- `learnerReferenceNumber` (string)
- `createdSince` (string)
- `modifiedSince` (string)
- `plannedStartAfter` (string)
- `plannedStartBefore` (string)
- `expectedEndAfter` (string)
- `expectedEndBefore` (string)
- `sortBy` (string)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### get_api_v1_learners_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### put_api_v1_learners_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `b_id` (string)
- `title` (string)
- `firstNames` (string)
- `preferredFirstName` (string)
- `surname` (string)
- `email` (string)
- `risk` (string)
- `address` (object)
- `ward` (string)
- `homePhone` (string)
- `mobile` (string)
- `username` (string)
- `userID` (string)
- `allowedContactMethods` (array)
- `preferredContactMethod` (string)
- `dateOfBirth` (string)
- `sex` (string)
- `ethnicity` (string)
- `niNumber` (string)
- `ilrDisability` (string)
- `lldDs` (array)
- `primaryLLDD` (string)
- `nextOfKinName` (string)
- `nextOfKinRelationship` (string)
- `nextOfKinPhone` (string)
- `nextOfKinPhone2` (string)
- `nextOfKinEmail` (string)
- `otherSystemID` (string)
- `providerIdent` (string)
- `mainOfficer` (string)
- `recruitmentOfficer` (string)
- `mentorOfficer` (string)
- `plannedStart` (string)
- `expectedEnd` (string)
- `countryOfDomicile` (string)
- `site` (string)
- `uln` (string)
- `restrictedUseIndicator` (string)
- `gcseMath` (string)
- `gcseEnglish` (string)
- `qualificationPlan` (string)

### get_api_v1_learners_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `udfApiCodes` (array)

### post_api_v1_learners_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `udfAnswers` (object)

### get_api_v1_learners_udfs

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_learners_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_learners_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_learners_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### delete_api_v1_learners_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### get_api_v1_learners_id_functionalskills

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_learners_id_functionalskills

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `type` (string)
- `subject` (string)
- `level` (string)
- `date` (string)
- `result` (number)

### put_api_v1_learners_id_functionalskills_assessmentid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `assessmentId` (string)
- `type` (string)
- `subject` (string)
- `level` (string)
- `date` (string)
- `result` (number)

### delete_api_v1_learners_id_functionalskills_assessmentid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `assessmentId` (string)

### get_api_v1_learners_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_learners_id_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_learners_id_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### delete_api_v1_learners_id_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### get_api_v1_learners_id_qualifications

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_learners_id_qualifications_aimreference_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `aimReference` (string)

### get_api_v1_learners_id_photo

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_learners_id_components

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_learners_id_components

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `componentID` (string)

### put_api_v1_learners_id_components_componentid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `componentId` (string)
- `b_id` (string)
- `start` (string)
- `priorityFlag` (integer)
- `due` (string)
- `done` (string)
- `notes` (string)
- `linkId` (string)

### delete_api_v1_learners_id_components_componentid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `componentId` (string)

### get_api_v1_learners_id_availablecomponents

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_learners_id_contactandlearninghours

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_learners_id_contactandlearninghourtotals

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_learners_id_placements

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_listsandtypes_actstatus

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_asstatus

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_functionalskillsliteracyassessmentlevel

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_functionalskillsnumeracyassessmentlevel

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_functionalskillsassessmenttype

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_functionalskillsassessmentsubject

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_countryofdomicile

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_customprovisions

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_ilrdisability

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_ethnicity

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_lldd

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_priorqualificationgrade

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_priorqualificationlevel

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_getpriorqualificationtitle

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_priorqualificationverified

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_qualificationplans

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_restricteduseindicator

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_sex

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_title

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_vatstatus

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_filetype

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_sites

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_listsandtypes_componentpriorityflags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `firstNames` (string)
- `surname` (string)
- `sex` (string)
- `postcode` (string)
- `email` (string)
- `role` (array)
- `jobTitle` (array)
- `mainOrganisation` (string)
- `superiorOfficer` (string)
- `site` (string)
- `status` (array)
- `tag` (array)
- `createdSince` (string)
- `modifiedSince` (string)
- `sortBy` (integer)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### post_api_v1_officers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `firstNames` (string)
- `surname` (string)
- `email` (string)
- `phone` (string)
- `roles` (array)

### get_api_v1_officers_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### put_api_v1_officers_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `b_id` (string)
- `title` (string)
- `firstNames` (string)
- `surname` (string)
- `jobTitle` (string)
- `email` (string)
- `roles` (array)
- `systemStatus` (string)
- `address` (string)
- `postcode` (string)
- `phone` (string)
- `mobile` (string)
- `allowedContactMethods` (array)
- `preferredContactMethod` (string)
- `sex` (string)
- `ethnicity` (string)
- `additionalID` (string)
- `superior` (string)

### get_api_v1_officers_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_officers_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### delete_api_v1_officers_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### get_api_v1_officers_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_officers_id_appointments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_officers_id_photo

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_organisations

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `additionalID` (array)
- `status` (array)
- `name` (array)
- `postcode` (array)
- `site` (string)
- `tag` (array)
- `createdSince` (string)
- `updatedSince` (string)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### post_api_v1_organisations

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `name` (string)
- `alias` (string)
- `phone` (string)
- `mobile` (string)
- `email` (string)
- `alternateEmail` (string)
- `address` (object)
- `ward` (string)
- `allowedContactMethods` (array)
- `preferredContactMethod` (string)
- `risk` (string)
- `website` (string)
- `upin` (string)
- `ukprn` (string)
- `edsReference` (string)
- `companyRegistrationNumber` (string)
- `epaOrganisation` (string)
- `mainOfficer` (string)
- `mainContact` (string)
- `headOffice` (string)
- `status` (string)
- `additionalID` (string)
- `roles` (array)
- `invoiceAddress` (object)
- `invoiceName` (string)
- `invoicePhone` (string)
- `invoiceEmail` (string)
- `allowMarketing` (string)
- `hasIIP` (string)
- `previousTraining` (string)
- `ethnicMinorityBusiness` (string)
- `notes` (string)
- `employerSizeBand` (string)
- `accountingSystemID` (string)
- `vatRegNo` (string)
- `employeeCount` (integer)
- `annualTurnover` (number)

### get_api_v1_organisations_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### put_api_v1_organisations_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `alias` (string)
- `phone` (string)
- `mobile` (string)
- `email` (string)
- `alternateEmail` (string)
- `address` (object)
- `ward` (string)
- `allowedContactMethods` (array)
- `preferredContactMethod` (string)
- `risk` (string)
- `website` (string)
- `upin` (string)
- `ukprn` (string)
- `edsReference` (string)
- `companyRegistrationNumber` (string)
- `epaOrganisation` (string)
- `mainOfficer` (string)
- `mainContact` (string)
- `headOffice` (string)
- `status` (string)
- `roles` (array)
- `additionalID` (string)
- `invoiceAddress` (object)
- `invoiceName` (string)
- `invoicePhone` (string)
- `invoiceEmail` (string)
- `allowMarketing` (string)
- `hasIIP` (string)
- `previousTraining` (string)
- `ethnicMinorityBusiness` (string)
- `notes` (string)
- `employerSizeBand` (string)
- `accountingSystemID` (string)
- `vatRegNo` (string)
- `employeeCount` (integer)
- `annualTurnover` (number)

### get_api_v1_organisations_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `udfApiCodes` (array)

### post_api_v1_organisations_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `udfAnswers` (object)

### get_api_v1_organisations_udfs

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_organisations_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_organisations_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### post_api_v1_organisations_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### delete_api_v1_organisations_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `items` (array)

### get_api_v1_organisations_id_photo

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### get_api_v1_payments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `learnerIdent` (string)
- `organisationCode` (string)
- `reference` (string)
- `status` (array)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### post_api_v1_payments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `learnerIdent` (string)
- `organisationCode` (string)
- `paymentItem` (string)
- `systemType` (string)
- `creditDebit` (string)
- `description` (string)
- `reference` (string)
- `purchaseOrderNumber` (string)
- `invoiceNumber` (string)
- `notes` (string)
- `status` (string)
- `createdDate` (string)
- `raisedDate` (string)
- `raisedBy` (string)
- `expectedDate` (string)
- `expectedAmount` (number)
- `authorisedDate` (string)
- `authorisedBy` (string)
- `actualDate` (string)
- `actualAmount` (number)
- `actualBy` (string)
- `invoicedDate` (string)
- `reconciledDate` (string)

### get_api_v1_payments_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)

### put_api_v1_payments_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (string)
- `b_id` (string)
- `paymentItem` (string)
- `systemType` (string)
- `creditDebit` (string)
- `description` (string)
- `reference` (string)
- `purchaseOrderNumber` (string)
- `invoiceNumber` (string)
- `notes` (string)
- `status` (string)
- `createdDate` (string)
- `raisedDate` (string)
- `raisedBy` (string)
- `expectedDate` (string)
- `expectedAmount` (number)
- `authorisedDate` (string)
- `authorisedBy` (string)
- `actualDate` (string)
- `actualAmount` (number)
- `actualBy` (string)
- `invoicedDate` (string)
- `reconciledDate` (string)

### get_api_v1_tasks

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `text` (string)
- `type` (string)
- `status` (string)
- `subStatus` (string)
- `workflow` (string)
- `modifiedSince` (string)
- `createdSince` (string)
- `sortDirection` (string)
- `pageNumber` (integer)
- `pageSize` (integer)

### post_api_v1_tasks

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `description` (string)
- `notes` (string)
- `type` (string)
- `workflow` (string)
- `dueOn` (string)
- `doneOn` (string)
- `start` (string)
- `participants` (array)
- `templateID` (string)
- `templateIDChecksum` (string)

### get_api_v1_tasks_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)

### put_api_v1_tasks_id_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `b_id` (integer)
- `description` (string)
- `notes` (string)
- `status` (string)
- `subStatus` (string)
- `workflow` (string)
- `dueOn` (string)
- `doneOn` (string)
- `start` (string)
- `participants` (array)

### get_api_v1_tasks_template_templateid_for_forid_

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `templateID` (string)
- `forID` (string)

### get_api_v1_tasks_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `udfApiCodes` (array)

### post_api_v1_tasks_id_udfanswers

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `udfAnswers` (object)

### get_api_v1_tasks_udfs

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)

### post_api_v1_tasks_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `items` (array)

### delete_api_v1_tasks_id_tags

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `items` (array)

### get_api_v1_tasks_id_attachments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)

### post_api_v1_tasks_id_attachments

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `iD` (integer)
- `description` (string)
- `fileType` (string)
- `expires` (string)
- `file` (string)

### get_api_v1_tasks_id_attachments_attachmentid_download

**Environment variables**

- `AUTHORIZATION`

**Input schema**

- `id` (integer)
- `attachmentId` (string)

### get_api_v1_tasks_templates

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_workflows

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_participantroles

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_participanttypes

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_types

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

### get_api_v1_tasks_statuses

**Environment variables**

- `AUTHORIZATION`

**Input schema**

No input parameters

import { z } from "zod"

export const inputParamsSchema = {
  "SchemeName": z.array(z.string()).describe("The name of the identification scheme, which is published in an external list.").optional(),
  "Identification": z.string().min(1).max(35).describe("The unique ID of the servicing institution.").optional(),
  "Name": z.string().min(1).max(140).describe("The name of a known agent used to identify the agent.").optional(),
  "PostalAddress": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `PostalAddress` to the tool, first call the tool `expandSchema` with \"/properties/Data/properties/Initiation/properties/CreditorAgent/properties/PostalAddress\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The postal address of the creditor, as defined by postal services.</property-description>").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.union([z.string().uuid(), z.null()]).describe("When this is provided then the business receives the report. If the report is related to a business, user in a business, or post in a business, the business id must be provided. If not, it will be assumed that the report is in regards to a relationship between users. Leave it out if the reported object is the business - e.g. if the post author is the business itself. Since we do not allow sending reports to a business when they are the one being reported.").optional(),
  "object_id": z.string().uuid().describe("The object id concerned by the report."),
  "object_type": z.enum(["post","user","business"]).describe("The type of object that is being reported. "),
  "message": z.union([z.string().max(500), z.null()]).describe("The message to send with the report, if any.").optional(),
  "reasons": z.array(z.enum(["harmful_content","nudity_or_pornography","fraud_or_scam","sale_or_promotion_of_illegal_items","spam","misinformation_and_disinformation","intellectual_property_violation","imminent_physical_harm"]).describe("Enum for report reasons.\n\n- `harmful_content` - Harmful Content\n- `nudity_or_pornography` - Nudity\n- `fraud_or_scam` - Fraud or Scam\n- `sale_or_promotion_of_illegal_items` - Sale or Promotion of Illegal Items\n- `spam` - Spam\n- `misinformation_and_disinformation` - Misinformation and Disinformation\n- `intellectual_property_violation` - Intellectual Property Violation\n- `imminent_physical_harm` - Imminent Physical Harm")).min(1)
}
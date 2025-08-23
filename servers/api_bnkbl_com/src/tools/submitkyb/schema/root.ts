import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().uuid().describe("Unique identifier for the client."),
  "product": z.enum(["credit-line","payables","receivables","revolving-credit"]).describe("Product identifier."),
  "annual_revenue": z.number().describe("Annual revenue of the company"),
  "incorporation_date": z.string().date().describe("The incorporation date of the company"),
  "financial_institution": z.boolean().describe("The company is a financial institution. False is obligatory to be able to onboard. We give out an error if true."),
  "income_source": z.enum(["business_activities","investment_activities","royalties"]).describe("Source of income."),
  "trading_name": z.string().describe("The trading name of the company if different from the legal name.").optional(),
  "industry": z.string().describe("Standard Industrial Classification code.").optional(),
  "financing_frequency": z.enum(["regular","sporadic","season"]).describe("The financing frequency."),
  "financing_needed": z.number().describe("Amount of financing needed.").optional(),
  "comments": z.string().describe("Extra comment.").optional(),
  "ultimate_beneficial_owners": z.array(z.object({ "name": z.string().describe("Name of the owner."), "nationality": z.string().min(2).max(2).describe("Nationality of the owner."), "share": z.number().describe("Share of the owner."), "date_of_birth": z.string().date().describe("Birth data of the owner."), "personal_id": z.string().describe("Personal ID number of the owner, optional for UK nationals."), "address": z.string().describe("Address of the owner, mandatory for UK company or people with different nationality from company."), "sanctioned": z.boolean().describe("Whether the owner is sanctioned or not"), "pep": z.boolean().describe("Whether the owner is a Politically Exposed Person or not.") })).max(4).describe("Array of objects where each object is an owner with at least 25% ownership. 0-4 people.").optional(),
  "directors": z.array(z.object({ "name": z.string().describe("Name of the director."), "nationality": z.string().min(2).max(2).describe("Nationality of the director."), "position": z.string().describe("Position in the company."), "date_of_birth": z.string().date().describe("Birth data of the director."), "personal_id": z.string().describe("Personal ID number of the director, optional for UK nationals."), "address": z.string().describe("Address of the director, mandatory for UK company or people with different nationality from company."), "sanctioned": z.boolean().describe("Whether the director is sanctioned or not"), "pep": z.boolean().describe("Whether the director is a Politically Exposed Person or not.") })).min(1).describe("Array of objects where each object is a director of the company."),
  "corporate_structure": z.array(z.string()).describe("Array of objects where each object is a company with at least 25% ownership. Unlimited companies.").optional()
}
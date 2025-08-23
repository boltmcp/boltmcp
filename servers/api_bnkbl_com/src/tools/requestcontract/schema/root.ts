import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().uuid().describe("Unique identifier for the client."),
  "product": z.enum(["credit-line","payables","receivables","revolving-credit"]).describe("Product identifier."),
  "signers": z.array(z.object({ "email": z.string().describe("Signer email."), "first_name": z.string().describe("Signer first name."), "last_name": z.string().describe("Signer last name."), "address": z.string().describe("Address of the signer, mandatory for UK companies.").optional(), "proof_of_address": z.string().describe("Unique identifier of the file returned by the Upload Proof of Address endpoint. Mandatory for companies in the UK.").optional() })).min(1).max(3).describe("List of signing parties.")
}
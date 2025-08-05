import { z } from "zod"

export const inputParamsSchema = {
  "SchemeName": z.enum(["UK.OBIE.IBAN","UK.OBIE.SortCodeAccountNumber","US.RoutingNumberAccountNumber","US.BranchCodeAccountNumber"]).describe("The name of the identification scheme."),
  "Identification": z.string().min(1).max(256).describe("The account ID that the institution assigns to identify an account, which is known by the account owner."),
  "Name": z.string().min(1).max(70).describe("The account name that the account servicing institution assigns.\n\nThe account name is the name or names of the account owner(s) represented at an account level.\n\nThe account name is not the product name or the nickname of the account.\n\n:::note\n[ASPSP](https://developer.revolut.com/docs/guides/build-banking-apps/glossary)s might optionally validate this name to confirm the payee.\n:::"),
  "SecondaryIdentification": z.string().min(1).max(34).describe("The secondary account ID that the account servicing institution assigns.\n\nBuilding societies can use this ID to identify accounts with a roll number in addition to a sort code and account number combination.").optional()
}
import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "enterpriseAgreementId": z.string().describe("The enterprise agreement's id.")
}
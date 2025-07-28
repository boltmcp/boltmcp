import { z } from "zod"

export const inputParamsSchema = {
  "quantity": z.string().describe("Amount of results you want the api to return, defualts tp 10 if left blank").optional(),
  "query": z.string().describe("The query string you are searching by / for").optional(),
  "type": z.string().describe("The id of the center type you would like to filter by, get all center types and their using \"List Center Types\" (https://www.chabad.org/api/v2/chabadorg/centers/types)").optional(),
  "name": z.string().describe("Search by shliach's last name. For example if you want to search for someone named \"Shmuli Novack\", Search for \"Novack\".").optional()
}
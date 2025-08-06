import { z } from "zod"

export const inputParamsSchema = {
  "kb_uuid": z.string().describe("UUID of the knowledgebox"),
  "q": z.string().describe("Text query. It can be with quotes to force keyword search on that elements.").optional(),
  "filter": z.string().describe("Filter query. It should be a list of tags to filter. It can be a range query.").optional(),
  "order": z.string().describe("Order query").optional(),
  "v": z.string().describe("BASE64 vector encoding").optional(),
  "rid": z.string().describe("Resource search").optional(),
  "disable": z.array(z.enum(["paragraph","semantic","document","relations"])).describe("Disable paragraph, semantic, document, relations").optional(),
  "enable": z.array(z.literal("ask")).describe("Disable paragraph, semantic, document, relations").optional()
}
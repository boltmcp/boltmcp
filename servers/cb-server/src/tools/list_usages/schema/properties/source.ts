import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["admin_console","api","bulk_operation"]).describe("\\* \\`admin_console\\` - Operation made through the Chargebee admin UI \\* \\`api\\` - Operation made through the API \\* \\`bulk_operation\\` - Operation that are triggerd through bulk operation.\n").optional(),
  "is_not": z.enum(["admin_console","api","bulk_operation"]).describe("\\* \\`admin_console\\` - Operation made through the Chargebee admin UI \\* \\`api\\` - Operation made through the API \\* \\`bulk_operation\\` - Operation that are triggerd through bulk operation.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(admin_console|api|bulk_operation)(,(admin_console|api|bulk_operation))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(admin_console|api|bulk_operation)(,(admin_console|api|bulk_operation))*\\]$")).optional()
}
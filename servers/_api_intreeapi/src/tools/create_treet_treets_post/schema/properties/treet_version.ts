import { z } from "zod"

export const inputParamsSchema = {
  "cover_image_id": z.union([z.string().uuid(), z.null()]).optional(),
  "title": z.string().min(1).max(100),
  "description": z.union([z.string().min(1).max(2000), z.null()]).optional(),
  "additional_info": z.union([z.string().min(1).max(2000), z.null()]).optional(),
  "website_url": z.union([z.string().min(1).max(2047), z.null()]).optional(),
  "instructions": z.union([z.string().max(2000), z.null()]).optional(),
  "static_code": z.union([z.string().min(1).max(255), z.null()]).optional(),
  "code_type": z.enum(["no_code","static","upload"]).describe("Code type for Treet.\n\n- `no_code`: Treet does not have a code.\n- `static`: Single static code is used for all Treets.\n- `upload`: Each Redeem gets a unique code from one of the uploaded codes.").optional(),
  "code_display_type": z.enum(["none","text","qrcode","barcode"]).describe("How a code of a Treet is displayed.\n\n- `none`: Do not display the code\n- `text`: Display code as text\n- `qrcode`: Display as QR code\n- `barcode`: display as barcode").optional()
}
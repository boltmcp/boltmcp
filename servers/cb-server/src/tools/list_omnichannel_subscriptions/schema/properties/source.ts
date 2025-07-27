import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["apple_app_store","google_play_store"]).describe("\\* \\`apple_app_store\\` - Source of the app is apple app store \\* \\`google_play_store\\` - Source of the app is google play store\n").optional(),
  "is_not": z.enum(["apple_app_store","google_play_store"]).describe("\\* \\`apple_app_store\\` - Source of the app is apple app store \\* \\`google_play_store\\` - Source of the app is google play store\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(apple_app_store|google_play_store)(,(apple_app_store|google_play_store))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(apple_app_store|google_play_store)(,(apple_app_store|google_play_store))*\\]$")).optional()
}
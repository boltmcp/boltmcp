import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "sort_by": z.enum(["asc(title)","desc(title)","asc(created_at)","desc(created_at)","asc(total_members)","desc(total_members)","asc(total_treets)","desc(total_treets)","asc(price)","desc(price)"]).describe("Sort by options for packs for hub.\n\n- `title`: sort by the title of the pack.\n- `created_at`: sort by when the pack is created.\n- `total_members`: sort by the amount of members in the pack.\n- `total_treets`: sort by the amount of treets in the pack.\n- `price`: sort by the price of the pack.").optional(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional(),
  "price_period_start": z.union([z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.number()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }), z.null()]).optional(),
  "price_period_end": z.union([z.any().superRefine((x, ctx) => {
    const schemas = [z.string(), z.number()];
    const errors = schemas.reduce<z.ZodError[]>(
      (errors, schema) =>
        ((result) =>
          result.error ? [...errors, result.error] : errors)(
          schema.safeParse(x),
        ),
      [],
    );
    if (schemas.length - errors.length !== 1) {
      ctx.addIssue({
        path: ctx.path,
        code: "invalid_union",
        unionErrors: errors,
        message: "Invalid input: Should pass single schema",
      });
    }
  }), z.null()]).optional(),
  "category_id": z.array(z.string().uuid()).describe("ID of category to fetch treets with.").optional(),
  "search": z.union([z.string().min(1), z.null()]).describe("Search for the title of the Group.").optional(),
  "include_draft": z.boolean().describe("If true includes draft packs. If false does not include draft packs. Default is false.").optional(),
  "embed_treet_count": z.boolean().optional(),
  "embed_treet_owner_avatars": z.boolean().optional(),
  "embed_member_count": z.boolean().optional(),
  "embed_active_payment_count": z.boolean().optional(),
  "embed_revenue": z.boolean().describe("Get revenue and members in period for groups").optional(),
  "embed_featured_treets": z.boolean().optional()
}
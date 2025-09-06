import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "offset": z.number().int().gte(0).optional(),
  "limit": z.number().int().gte(1).lte(100).optional(),
  "external_client_id": z.union([z.string().uuid(), z.null()]).optional(),
  "task_type": z.union([z.enum(["email","other"]).describe("Enum for Bulk Task Types.\n\n- `email`: Bulk email tasks.\n- `other`: Other types of bulk tasks - likely not implemented yet."), z.null()]).optional(),
  "start_date": z.union([z.any().superRefine((x, ctx) => {
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
  }), z.null()]).describe("Filter by date range").optional(),
  "end_date": z.union([z.any().superRefine((x, ctx) => {
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
  }), z.null()]).describe("Filter by date range").optional()
}
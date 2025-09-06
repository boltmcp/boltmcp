import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "limit": z.number().int().gt(0).lte(100).optional(),
  "token": z.union([z.string(), z.null()]).optional(),
  "embed_biz_user": z.boolean().optional(),
  "role": z.union([z.enum(["owner","admin","billing","collaborator","moderator","viewer"]).describe("Role of a BusinessMember.\n\n`owner`: Has complete read and write access to the business.\nCan delete the business.\n\n`admin`: Has the same access as the owner, except they cannot delete the business,\nchange the owner or promote other users to admin.\n\n`billing`: Has read access to the business and can manage billing.\n\n`collaborator`: Has the same access as the admin, except they cannot edit the\nbusiness or view billing.\n\n`moderator`: Has the same access as the collaborator, except they cannot manage\ntreets.\n\n`viewer`: Has read access to the business.\n\nThe tree lookup is as follows:\nowner\n  |\n  │\nadmin\n  ├──────────────┐\n  │              │\ncollaborator  billing\n  │\n  │\nmoderator\n  │\n  │\nviewer"), z.null()]).describe("Filters the BusinessMembers based on their role.").optional(),
  "search": z.union([z.string().min(1).max(100), z.null()]).describe("Search string for the name of a BusinessMember.").optional()
}
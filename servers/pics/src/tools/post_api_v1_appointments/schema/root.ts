import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().min(1).max(255).describe("The Appointment Title"),
  "description": z.string().nullable().describe("Description of the Appointment").optional(),
  "workflow": z.string().nullable().describe("The Appointment's Workflow Code").optional(),
  "class": z.string().nullable().describe("The Appointment Class").optional(),
  "type": z.string().nullable().describe("The Appointment Class").optional(),
  "expectedStart": z.string().datetime({ offset: true }).nullable().describe("The Appointment's Expected Start").optional(),
  "expectedEnd": z.string().datetime({ offset: true }).nullable().describe("The Appointment's Expected End").optional(),
  "actualStart": z.string().datetime({ offset: true }).nullable().describe("The Appointment's Actual Start").optional(),
  "actualEnd": z.string().datetime({ offset: true }).nullable().describe("The Appointment's Actual End").optional(),
  "allDay": z.boolean().describe("Indicates if the Appointment is set to run All Day").optional(),
  "participants": z.array(z.object({ "eventID": z.number().int().describe("Event ID").optional(), "id": z.string().nullable().describe("The Participant's ID").optional(), "type": z.string().nullable().describe("The Type of Participant").optional(), "roles": z.array(z.string()).nullable().describe("The Roles assigned to the Participant for the Appointment").optional() }).strict()).nullable().describe("List of Appointment Participants").optional(),
  "templateID": z.string().nullable().describe("Not user editable. Assigned when using the create with template function.").optional(),
  "templateIDChecksum": z.string().nullable().describe("Not user editable. Assigned when using the create with template function.").optional()
}
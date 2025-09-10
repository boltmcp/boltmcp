import { z } from "zod"

export const inputParamsSchema = {
  "description": z.string().nullable().describe("Description of the Task").optional(),
  "notes": z.string().nullable().describe("Additional Notes for the Task - Employability Only").optional(),
  "type": z.string().nullable().describe("The Task's Type").optional(),
  "workflow": z.string().nullable().describe("The Task's Workflow Code").optional(),
  "dueOn": z.string().datetime({ offset: true }).nullable().describe("The Task's Expected End").optional(),
  "doneOn": z.string().datetime({ offset: true }).nullable().describe("The Task's Actual End").optional(),
  "start": z.string().datetime({ offset: true }).nullable().describe("The Task's Actual Start").optional(),
  "participants": z.array(z.object({ "eventID": z.number().int().describe("Event ID").optional(), "id": z.string().nullable().describe("The Participant's ID").optional(), "type": z.string().nullable().describe("The Type of Participant").optional(), "roles": z.array(z.string()).nullable().describe("The Roles assigned to the Participant for the Appointment").optional() }).strict()).nullable().describe("List of Task Participants").optional(),
  "templateID": z.string().nullable().describe("Not user editable. Assigned when using the create with template function.").optional(),
  "templateIDChecksum": z.string().nullable().describe("Not user editable. Assigned when using the create with template function.").optional()
}
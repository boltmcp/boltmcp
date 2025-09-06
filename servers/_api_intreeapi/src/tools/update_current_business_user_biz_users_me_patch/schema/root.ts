import { z } from "zod"

export const inputParamsSchema = {
  "name": z.union([z.string().max(255), z.null()]).optional(),
  "phone": z.union([z.string().max(255), z.null()]).optional(),
  "settings": z.union([z.record(z.string()), z.null()]).describe("\n            The settings allows you to specify time preferences.\n\n            The possible settings and their allowed values are as follows:\n                - `date_format`: The format for displaying dates.\n                Allowed values are 'dd/mm/yyyy', 'mm/dd/yyyy', and 'yyy/mm/dd'.\n                - `time_format`: The format for displaying time.\n                Allowed values are '12h' and '24h'.\n                - `country`: The country configuration. This is not validated.\n                - `time_zone`: The time zone using dst aware Canonical timezones.\n                    Format is their TZ identifier e.g. `Continent/City`.\n                    See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\n\n            If a `settings` value is set to `None`,\n            the frontend should use the current system default values.\n        ").optional(),
  "avatar_image_id": z.union([z.string().uuid(), z.null()]).describe("The UUID of the image to set as the avatar image. Must be media that belongs to the user.").optional()
}
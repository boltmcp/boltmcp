import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name of the user."),
  "password": z.string().describe("The password of the user, either in clear text of hex-encoded (see above)."),
  "email": z.string().describe("The email address of the user.").optional(),
  "ldapAuthenticated": z.boolean().describe("Whether the user is authenicated in LDAP.").optional(),
  "adminRole": z.boolean().describe("Whether the user is administrator.").optional(),
  "settingsRole": z.boolean().describe("Whether the user is allowed to change personal settings and password.").optional(),
  "streamRole": z.boolean().describe("Whether the user is allowed to play files.").optional(),
  "jukeboxRole": z.boolean().describe("Whether the user is allowed to play files in jukebox mode.").optional(),
  "downloadRole": z.boolean().describe("Whether the user is allowed to download files.").optional(),
  "uploadRole": z.boolean().describe("Whether the user is allowed to upload files.").optional(),
  "coverArtRole": z.boolean().describe("Whether the user is allowed to change cover art and tags.").optional(),
  "commentRole": z.boolean().describe("Whether the user is allowed to create and edit comments and ratings.").optional(),
  "podcastRole": z.boolean().describe("Whether the user is allowed to administrate Podcasts.").optional(),
  "shareRole": z.boolean().describe("Whether the user is allowed to share files with anyone.").optional(),
  "videoConversionRole": z.boolean().describe("(Since 1.15.0) Whether the user is allowed to start video conversions.").optional(),
  "musicFolderId": z.array(z.string()).describe("(Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder.").optional(),
  "maxBitRate": z.union([z.literal(0), z.literal(32), z.literal(40), z.literal(48), z.literal(56), z.literal(64), z.literal(80), z.literal(96), z.literal(112), z.literal(128), z.literal(160), z.literal(192), z.literal(224), z.literal(256), z.literal(320)]).describe("(Since 1.13.0) The maximum bit rate (in Kbps) for the user. Audio streams of higher bit rates are automatically downsampled to this bit rate. Legal values: 0 (no limit), 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320.").optional()
}
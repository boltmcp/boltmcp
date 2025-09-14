import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name of the new user."),
  "password": z.string().describe("The password of the new user, either in clear text of hex-encoded (see above)."),
  "email": z.string().describe("The email address of the new user."),
  "ldapAuthenticated": z.boolean().describe("Whether the user is authenticated in LDAP.").optional(),
  "adminRole": z.boolean().describe("Whether the user is administrator.").optional(),
  "settingsRole": z.boolean().describe("Whether the user is allowed to change personal settings and password.").optional(),
  "streamRole": z.boolean().describe("Whether the user is allowed to play files.").optional(),
  "jukeboxRole": z.boolean().describe("Whether the user is allowed to play files in jukebox mode.").optional(),
  "downloadRole": z.boolean().describe("Whether the user is allowed to download files.").optional(),
  "uploadRole": z.boolean().describe("Whether the user is allowed to upload files.").optional(),
  "playlistRole": z.boolean().describe("Whether the user is allowed to create and delete playlists. Since 1.8.0, changing this role has no effect.").optional(),
  "coverArtRole": z.boolean().describe("Whether the user is allowed to change cover art and tags.").optional(),
  "commentRole": z.boolean().describe("Whether the user is allowed to create and edit comments and ratings.").optional(),
  "podcastRole": z.boolean().describe("Whether the user is allowed to administrate Podcasts.").optional(),
  "shareRole": z.boolean().describe("(Since 1.8.0) Whether the user is allowed to share files with anyone.").optional(),
  "videoConversionRole": z.boolean().describe("(Since 1.15.0) Whether the user is allowed to start video conversions.").optional(),
  "musicFolderId": z.array(z.string()).describe("(Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder. Default all folders.").optional()
}
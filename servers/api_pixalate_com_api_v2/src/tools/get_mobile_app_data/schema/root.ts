import { z } from "zod"

export const inputParamsSchema = {
  "appId": z.string().describe("The app's unique identifier. This is a package name on Google Play or a track id on Apple app Store."),
  "widget": z.array(z.enum(["appOverview","appDetails","pixalateAdvisories","appAdvisories","riskOverview","developerOverview","trafficOverview","brandSafety","appPermissions","trafficOverlap","authorizedSellers","invalidTraffic","viewability","inventory","ctr","availableCountries","rankings","rankingsByCountry","coppa"]).describe("The identifier for a predefined subset of all the app information available. *If not supplied, usually indicates all widgets.*")).min(1).describe("Filter by comma-separated list of widgets to return. All widgets are returned by default.").optional(),
  "region": z.enum(["GLOBAL","NA","EMEA","LATAM","APAC"]).describe("A geographic region. *GLOBAL* indicates an aggregate of all regions.").optional(),
  "device": z.enum(["GLOBAL","smartphone","tablet"]).describe("The device. *GLOBAL* indicates an aggregate of all devices.").optional(),
  "pretty": z.boolean().describe("If true, return pretty JSON. Default is false.").optional()
}
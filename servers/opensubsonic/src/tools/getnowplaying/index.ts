import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnowplaying",
  "toolDescription": "Returns what is currently being played by all users.",
  "baseUrl": "{url}",
  "path": "/rest/getNowPlaying",
  "method": "get",
  "security": [
    {
      "key": "apiKey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "v",
      "value": "<mcp-env-var>V</mcp-env-var>",
      "in": "query",
      "envVarName": "V"
    },
    {
      "key": "c",
      "value": "<mcp-env-var>C</mcp-env-var>",
      "in": "query",
      "envVarName": "C"
    },
    {
      "key": "f",
      "value": "<mcp-env-var>F</mcp-env-var>",
      "in": "query",
      "envVarName": "F"
    },
    {
      "key": "u",
      "value": "<mcp-env-var>U</mcp-env-var>",
      "in": "query",
      "envVarName": "U"
    },
    {
      "key": "p",
      "value": "<mcp-env-var>P</mcp-env-var>",
      "in": "query",
      "envVarName": "P"
    },
    {
      "key": "v",
      "value": "<mcp-env-var>V</mcp-env-var>",
      "in": "query",
      "envVarName": "V"
    },
    {
      "key": "c",
      "value": "<mcp-env-var>C</mcp-env-var>",
      "in": "query",
      "envVarName": "C"
    },
    {
      "key": "f",
      "value": "<mcp-env-var>F</mcp-env-var>",
      "in": "query",
      "envVarName": "F"
    },
    {
      "key": "u",
      "value": "<mcp-env-var>U</mcp-env-var>",
      "in": "query",
      "envVarName": "U"
    },
    {
      "key": "t",
      "value": "<mcp-env-var>T</mcp-env-var>",
      "in": "query",
      "envVarName": "T"
    },
    {
      "key": "s",
      "value": "<mcp-env-var>S</mcp-env-var>",
      "in": "query",
      "envVarName": "S"
    },
    {
      "key": "v",
      "value": "<mcp-env-var>V</mcp-env-var>",
      "in": "query",
      "envVarName": "V"
    },
    {
      "key": "c",
      "value": "<mcp-env-var>C</mcp-env-var>",
      "in": "query",
      "envVarName": "C"
    },
    {
      "key": "f",
      "value": "<mcp-env-var>F</mcp-env-var>",
      "in": "query",
      "envVarName": "F"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool
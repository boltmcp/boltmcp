import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "jukeboxcontrol",
  "toolDescription": "Controls the jukebox, i.e., playback directly on the server’s audio hardware.",
  "baseUrl": "{url}",
  "path": "/rest/jukeboxControl",
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
  "paramsMap": {
    "query": {
      "action": "action",
      "index": "index",
      "offset": "offset",
      "id": "id",
      "gain": "gain"
    }
  },
  inputParamsSchema
}

export default tool
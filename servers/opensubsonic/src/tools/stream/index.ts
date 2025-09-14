import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stream",
  "toolDescription": "Streams a given media file.",
  "baseUrl": "{url}",
  "path": "/rest/stream",
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
      "id": "id",
      "maxBitRate": "maxBitRate",
      "format": "format",
      "timeOffset": "timeOffset",
      "size": "size",
      "estimateContentLength": "estimateContentLength",
      "converted": "converted"
    }
  },
  inputParamsSchema
}

export default tool
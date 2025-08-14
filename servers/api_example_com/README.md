# @open-mcp/api_example_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_example_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_example_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### read_root_v1_v1_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### models_v1_models_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### models_api_provider_models_get

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)

### model_info_v1_models_model_name_post

**Environment variables**

No environment variables required

**Input schema**

- `model_name` (string)

### model_info_v1_models_model_name_get

**Environment variables**

No environment variables required

**Input schema**

- `model_name` (string)

### chat_completions_v1_chat_completions_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `conversation_id` (string)
- `model` (string)
- `b_provider` (other)
- `media` (other)
- `modalities` (other)
- `temperature` (other)
- `presence_penalty` (other)
- `frequency_penalty` (other)
- `top_p` (other)
- `max_tokens` (other)
- `stop` (other)
- `api_key` (other)
- `api_base` (string)
- `web_search` (other)
- `proxy` (other)
- `conversation` (other)
- `timeout` (other)
- `tool_calls` (array)
- `reasoning_effort` (other)
- `logit_bias` (other)
- `audio` (other)
- `response_format` (other)
- `download_media` (boolean)
- `extra_body` (other)
- `messages` (array)
- `stream` (boolean)
- `image` (other)
- `image_name` (other)
- `images` (other)
- `tools` (array)
- `parallel_tool_calls` (boolean)
- `tool_choice` (other)
- `b_conversation_id` (other)
- `x-user` (other)

### provider_chat_completions_api_provider_chat_completions_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `model` (string)
- `b_provider` (other)
- `media` (other)
- `modalities` (other)
- `temperature` (other)
- `presence_penalty` (other)
- `frequency_penalty` (other)
- `top_p` (other)
- `max_tokens` (other)
- `stop` (other)
- `api_key` (other)
- `api_base` (string)
- `web_search` (other)
- `proxy` (other)
- `conversation` (other)
- `timeout` (other)
- `tool_calls` (array)
- `reasoning_effort` (other)
- `logit_bias` (other)
- `audio` (other)
- `response_format` (other)
- `download_media` (boolean)
- `extra_body` (other)
- `messages` (array)
- `stream` (boolean)
- `image` (other)
- `image_name` (other)
- `images` (other)
- `tools` (array)
- `parallel_tool_calls` (boolean)
- `tool_choice` (other)
- `conversation_id` (other)

### v1_responses_v1_responses_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `model` (string)
- `b_provider` (other)
- `media` (other)
- `modalities` (other)
- `temperature` (other)
- `presence_penalty` (other)
- `frequency_penalty` (other)
- `top_p` (other)
- `max_tokens` (other)
- `stop` (other)
- `api_key` (other)
- `api_base` (string)
- `web_search` (other)
- `proxy` (other)
- `conversation` (other)
- `timeout` (other)
- `tool_calls` (array)
- `reasoning_effort` (other)
- `logit_bias` (other)
- `audio` (other)
- `response_format` (other)
- `download_media` (boolean)
- `extra_body` (other)
- `input` (other)

### provider_responses_api_provider_responses_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `model` (string)
- `b_provider` (other)
- `media` (other)
- `modalities` (other)
- `temperature` (other)
- `presence_penalty` (other)
- `frequency_penalty` (other)
- `top_p` (other)
- `max_tokens` (other)
- `stop` (other)
- `api_key` (other)
- `api_base` (string)
- `web_search` (other)
- `proxy` (other)
- `conversation` (other)
- `timeout` (other)
- `tool_calls` (array)
- `reasoning_effort` (other)
- `logit_bias` (other)
- `audio` (other)
- `response_format` (other)
- `download_media` (boolean)
- `extra_body` (other)
- `messages` (array)
- `stream` (boolean)
- `image` (other)
- `image_name` (other)
- `images` (other)
- `tools` (array)
- `parallel_tool_calls` (boolean)
- `tool_choice` (other)
- `conversation_id` (other)

### provider_chat_completions_api_provider_conversation_id_chat_comp

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `conversation_id` (string)
- `model` (string)
- `b_provider` (other)
- `media` (other)
- `modalities` (other)
- `temperature` (other)
- `presence_penalty` (other)
- `frequency_penalty` (other)
- `top_p` (other)
- `max_tokens` (other)
- `stop` (other)
- `api_key` (other)
- `api_base` (string)
- `web_search` (other)
- `proxy` (other)
- `conversation` (other)
- `timeout` (other)
- `tool_calls` (array)
- `reasoning_effort` (other)
- `logit_bias` (other)
- `audio` (other)
- `response_format` (other)
- `download_media` (boolean)
- `extra_body` (other)
- `messages` (array)
- `stream` (boolean)
- `image` (other)
- `image_name` (other)
- `images` (other)
- `tools` (array)
- `parallel_tool_calls` (boolean)
- `tool_choice` (other)
- `b_conversation_id` (other)

### generate_image_api_provider_images_generations_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `prompt` (string)
- `model` (other)
- `b_provider` (other)
- `response_format` (other)
- `api_key` (other)
- `proxy` (other)
- `width` (other)
- `height` (other)
- `num_inference_steps` (other)
- `seed` (other)
- `guidance_scale` (other)
- `aspect_ratio` (other)
- `n` (other)
- `negative_prompt` (other)
- `resolution` (other)
- `audio` (other)
- `download_media` (boolean)

### generate_image_v1_images_generations_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `prompt` (string)
- `model` (other)
- `b_provider` (other)
- `response_format` (other)
- `api_key` (other)
- `proxy` (other)
- `width` (other)
- `height` (other)
- `num_inference_steps` (other)
- `seed` (other)
- `guidance_scale` (other)
- `aspect_ratio` (other)
- `n` (other)
- `negative_prompt` (other)
- `resolution` (other)
- `audio` (other)
- `download_media` (boolean)

### generate_image_v1_images_generate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `prompt` (string)
- `model` (other)
- `b_provider` (other)
- `response_format` (other)
- `api_key` (other)
- `proxy` (other)
- `width` (other)
- `height` (other)
- `num_inference_steps` (other)
- `seed` (other)
- `guidance_scale` (other)
- `aspect_ratio` (other)
- `n` (other)
- `negative_prompt` (other)
- `resolution` (other)
- `audio` (other)
- `download_media` (boolean)

### generate_image_v1_media_generate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `prompt` (string)
- `model` (other)
- `b_provider` (other)
- `response_format` (other)
- `api_key` (other)
- `proxy` (other)
- `width` (other)
- `height` (other)
- `num_inference_steps` (other)
- `seed` (other)
- `guidance_scale` (other)
- `aspect_ratio` (other)
- `n` (other)
- `negative_prompt` (other)
- `resolution` (other)
- `audio` (other)
- `download_media` (boolean)

### providers_v1_providers_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### providers_info_v1_providers_provider_get

**Environment variables**

No environment variables required

**Input schema**

- `provider` (string)

### convert_api_path_provider_audio_transcriptions_post

**Environment variables**

No environment variables required

**Input schema**

- `path_provider` (string)

### convert_v1_audio_transcriptions_post

**Environment variables**

No environment variables required

**Input schema**

- `path_provider` (string)

### markitdown_api_markitdown_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### generate_speech_api_provider_audio_speech_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `input` (string)
- `model` (other)
- `b_provider` (other)
- `voice` (other)
- `instrcutions` (string)
- `response_format` (other)
- `language` (other)
- `download_media` (boolean)

### generate_speech_v1_audio_speech_post

**Environment variables**

- `API_KEY`

**Input schema**

- `provider` (string)
- `input` (string)
- `model` (other)
- `b_provider` (other)
- `voice` (other)
- `instrcutions` (string)
- `response_format` (other)
- `language` (other)
- `download_media` (boolean)

### upload_cookies_v1_upload_cookies_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_json_json_filename_post

**Environment variables**

No environment variables required

**Input schema**

- `filename` (other)

### get_media_media_filename_get

**Environment variables**

No environment variables required

**Input schema**

- `filename` (other)
- `thumbnail` (boolean)

### get_media_images_filename_get

**Environment variables**

No environment variables required

**Input schema**

- `filename` (other)
- `thumbnail` (boolean)

### get_media_thumbnail_thumbnail_filename_get

**Environment variables**

No environment variables required

**Input schema**

- `filename` (string)

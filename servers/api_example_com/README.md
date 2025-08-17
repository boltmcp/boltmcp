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

### login_api_auth_login_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `password` (string)

### dev_login_api_auth_dev_login_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `password` (string)

### logout_api_auth_logout_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_current_user_info_api_auth_me_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### refresh_token_api_auth_refresh_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### refresh_token_pydantic_api_auth_refresh_pydantic_post

**Environment variables**

No environment variables required

**Input schema**

- `refresh_token` (string)

### change_password_api_auth_change_password_post

**Environment variables**

- `API_KEY`

**Input schema**

- `current_password` (string)
- `new_password` (string)

### validate_token_api_auth_validate_token_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### debug_refresh_request_api_auth_debug_refresh_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### debug_token_info_api_auth_debug_token_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### list_companies_api_companies_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_company_api_companies_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `cnpj` (string)
- `address` (string)
- `active` (boolean)
- `hidden` (boolean)
- `timezone` (other)
- `logo_url` (other)
- `primary_color` (other)
- `secondary_color` (other)
- `accent_color` (other)
- `background_color` (other)
- `text_color` (other)
- `sidebar_color` (other)

### get_company_api_companies_company_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### update_company_api_companies_company_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `name` (other)
- `cnpj` (other)
- `address` (other)
- `active` (other)
- `hidden` (other)
- `timezone` (other)
- `logo_url` (other)
- `primary_color` (other)
- `secondary_color` (other)
- `accent_color` (other)
- `background_color` (other)
- `text_color` (other)
- `sidebar_color` (other)

### delete_company_api_companies_company_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `permanent` (boolean)

### upload_company_logo_api_companies_company_id_logo_post

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### delete_company_logo_api_companies_company_id_logo_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### get_company_logo_info_api_companies_company_id_logo_info_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### debug_static_files_api_companies_debug_static_files_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### update_company_branding_api_companies_company_id_branding_put

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `logo_url` (other)
- `primary_color` (other)
- `secondary_color` (other)
- `accent_color` (other)
- `background_color` (other)
- `text_color` (other)
- `sidebar_color` (other)

### get_company_branding_api_companies_company_id_branding_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### list_sites_api_sites_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `company_id` (other)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_site_api_sites_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `address` (string)
- `company_id` (string)
- `active` (boolean)
- `hidden` (boolean)

### get_site_api_sites_site_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `site_id` (string)

### update_site_api_sites_site_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `site_id` (string)
- `name` (other)
- `address` (other)
- `company_id` (other)
- `active` (other)
- `hidden` (other)

### delete_site_api_sites_site_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `site_id` (string)
- `permanent` (boolean)

### list_areas_api_areas_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `site_id` (other)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_area_api_areas_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `site_id` (string)
- `active` (boolean)
- `hidden` (boolean)

### get_area_api_areas_area_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `area_id` (string)

### update_area_api_areas_area_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `area_id` (string)
- `name` (other)
- `site_id` (other)
- `active` (other)
- `hidden` (other)

### delete_area_api_areas_area_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `area_id` (string)
- `permanent` (boolean)

### list_subareas_api_subareas_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `area_id` (other)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_subarea_api_subareas_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `area_id` (other)
- `active` (boolean)
- `hidden` (boolean)

### get_subarea_api_subareas_subarea_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `subarea_id` (string)

### update_subarea_api_subareas_subarea_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `subarea_id` (string)
- `name` (other)
- `area_id` (other)
- `active` (other)
- `hidden` (other)

### delete_subarea_api_subareas_subarea_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `subarea_id` (string)
- `permanent` (boolean)

### list_machines_api_machines_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `area_id` (other)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_machine_api_machines_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `area_id` (other)
- `subarea_id` (other)
- `active` (boolean)
- `hidden` (boolean)

### get_machine_api_machines_machine_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `machine_id` (string)

### update_machine_api_machines_machine_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `machine_id` (string)
- `name` (other)
- `area_id` (other)
- `subarea_id` (other)
- `active` (other)
- `hidden` (other)

### delete_machine_api_machines_machine_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `machine_id` (string)
- `permanent` (boolean)

### list_tags_api_tags_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `machine_id` (other)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_tag_api_tags_post

**Environment variables**

- `API_KEY`

**Input schema**

- `symbolic_name` (string)
- `technical_name` (string)
- `description` (string)
- `data_source` (string)
- `machine_id` (other)
- `manufacturer` (other)
- `model` (other)
- `unit_engineering` (other)
- `data_source_id` (other)
- `digital_mapping` (other)
- `is_digital` (boolean)
- `alert_upper_limit` (other)
- `alert_lower_limit` (other)
- `alert_enabled` (boolean)
- `alarm_upper_limit` (other)
- `alarm_lower_limit` (other)
- `alarm_enabled` (boolean)
- `emergency_upper_limit` (other)
- `emergency_lower_limit` (other)
- `emergency_enabled` (boolean)
- `alarm_deadband` (number)
- `alarm_delay_seconds` (integer)
- `mqtt_topic` (other)
- `active` (boolean)
- `hidden` (boolean)

### get_tag_api_tags_tag_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)

### update_tag_api_tags_tag_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `symbolic_name` (other)
- `technical_name` (other)
- `description` (other)
- `data_source` (other)
- `machine_id` (other)
- `manufacturer` (other)
- `model` (other)
- `unit_engineering` (other)
- `data_source_id` (other)
- `digital_mapping` (other)
- `is_digital` (other)
- `alert_upper_limit` (other)
- `alert_lower_limit` (other)
- `alert_enabled` (other)
- `alarm_upper_limit` (other)
- `alarm_lower_limit` (other)
- `alarm_enabled` (other)
- `emergency_upper_limit` (other)
- `emergency_lower_limit` (other)
- `emergency_enabled` (other)
- `alarm_deadband` (other)
- `alarm_delay_seconds` (other)
- `active` (other)
- `hidden` (other)

### delete_tag_api_tags_tag_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `permanent` (boolean)

### debug_totalization_modules_api_tags_debug_totalization_modules_g

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### list_users_api_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `search` (other)
- `active_only` (boolean)
- `show_hidden` (boolean)

### create_user_api_users_post

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)
- `full_name` (string)
- `is_active` (boolean)
- `is_superuser` (boolean)
- `theme_preference` (string)
- `password` (string)

### get_user_api_users_user_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### update_user_api_users_user_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `email` (other)
- `full_name` (other)
- `password` (other)
- `is_active` (other)
- `is_superuser` (other)
- `theme_preference` (other)

### delete_user_api_users_user_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `permanent` (boolean)

### activate_user_api_users_user_id_activate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### deactivate_user_api_users_user_id_deactivate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### update_user_theme_preference_api_users_user_id_theme_put

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `theme_preference` (string)

### list_permissions_api_permissions_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `user_id` (other)
- `permission_type` (other)
- `entity_id` (other)
- `active_only` (boolean)

### create_permission_api_permissions_post

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `permission_type` (string)
- `entity_id` (string)
- `permission_level` (string)
- `active` (boolean)
- `hidden` (boolean)

### get_permission_api_permissions_permission_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `permission_id` (string)

### update_permission_api_permissions_permission_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `permission_id` (string)
- `user_id` (other)
- `permission_type` (other)
- `entity_id` (other)
- `permission_level` (other)
- `active` (other)
- `hidden` (other)

### delete_permission_api_permissions_permission_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `permission_id` (string)

### get_user_permissions_api_permissions_user_user_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### assign_company_admin_api_permissions_assign_company_admin_post

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `company_id` (string)

### remove_company_admin_api_permissions_remove_company_admin_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `company_id` (string)

### list_available_users_api_permissions_available_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)

### test_websocket_auth_api_realtime_ws_test_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_realtime_status_api_realtime_status_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_connections_info_api_realtime_connections_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_snooze_cache_info_api_realtime_snooze_cache_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### clear_snooze_cache_api_realtime_snooze_cache_clear_post

**Environment variables**

- `API_KEY`

**Input schema**

- `clear_expired_only` (boolean)

### get_latest_data_api_realtime_latest_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### list_alarms_api_alarms_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `tag_id` (other)
- `alarm_type` (other)
- `status` (other)
- `active_only` (other)

### create_alarm_api_alarms_post

**Environment variables**

- `API_KEY`

**Input schema**

- `active` (boolean)
- `hidden` (boolean)
- `tag_id` (string)
- `alarm_type` (string)
- `condition_type` (string)
- `current_value` (number)
- `limit_value` (number)
- `status` (string)
- `alarm_time` (string)
- `acknowledged_time` (other)
- `cleared_time` (other)
- `acknowledged_by` (other)
- `message` (string)
- `priority` (integer)

### get_alarm_api_alarms_alarm_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `alarm_id` (string)

### update_alarm_api_alarms_alarm_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `alarm_id` (string)
- `active` (other)
- `hidden` (other)
- `marked_for_deletion` (other)
- `status` (other)
- `acknowledged_time` (other)
- `cleared_time` (other)
- `acknowledged_by` (other)
- `message` (other)
- `priority` (other)

### delete_alarm_api_alarms_alarm_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `alarm_id` (string)

### acknowledge_alarm_api_alarms_alarm_id_acknowledge_post

**Environment variables**

- `API_KEY`

**Input schema**

- `alarm_id` (string)
- `id` (other)
- `status` (other)
- `acknowledged_by` (other)
- `acknowledged_by_name` (other)
- `acknowledged_by_email` (other)
- `acknowledged_at` (other)
- `acknowledgment_comment` (other)
- `comment` (other)

### acknowledge_alarms_bulk_api_alarms_bulk_acknowledge_post

**Environment variables**

- `API_KEY`

**Input schema**

- `alarm_ids` (array)
- `status` (other)
- `acknowledged_at` (other)
- `acknowledged_by` (other)
- `acknowledged_by_name` (other)
- `acknowledged_by_email` (other)
- `comment` (other)
- `acknowledgment_comment` (other)

### list_acknowledged_alarms_api_alarms_acknowledged_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)

### clear_alarm_cache_api_alarms_cache_clear_post

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (other)

### reload_alarm_config_api_alarms_cache_reload_tag_id_post

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)

### invalidate_alarm_cache_api_alarms_cache_invalidate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `alarm_type` (other)
- `condition` (other)

### list_data_sources_api_data_sources_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `type` (other)
- `search` (other)
- `active_only` (boolean)
- `company_id` (other)

### create_data_source_api_data_sources_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `type` (string)
- `description` (other)
- `company_id` (string)
- `config` (object)
- `collection_interval` (other)

### get_digital_mapping_examples_api_data_sources_digital_mapping_ex

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### validate_digital_mapping_api_data_sources_validate_digital_mappi

**Environment variables**

- `API_KEY`

**Input schema**

- `mappings` (object)

### get_data_source_api_data_sources_source_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)

### update_data_source_api_data_sources_source_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)
- `name` (other)
- `description` (other)
- `company_id` (other)
- `config` (other)
- `collection_interval` (other)

### delete_data_source_api_data_sources_source_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `source_id` (string)

### list_sensor_data_api_sensor_data_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_ids` (other)
- `start_time` (other)
- `end_time` (other)
- `quality` (other)
- `source` (other)
- `limit` (other)
- `offset` (integer)

### create_sensor_data_api_sensor_data_post

**Environment variables**

- `API_KEY`

**Input schema**

- `use_mqtt` (boolean)
- `tag_id` (string)
- `value` (number)
- `timestamp` (string)
- `quality` (string)
- `source` (other)

### create_sensor_data_batch_api_sensor_data_batch_post

**Environment variables**

- `API_KEY`

**Input schema**

- `use_mqtt` (boolean)
- `data` (array)

### get_historical_sensor_data_api_sensor_data_tag_tag_id_historical

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `start_time` (other)
- `end_time` (other)
- `aggregation` (other)
- `limit` (integer)
- `chart_mode` (boolean)
- `require_totalization` (boolean)

### get_raw_sensor_data_api_sensor_data_tag_tag_id_raw_data_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `start_time` (string)
- `end_time` (string)
- `limit` (integer)

### get_multi_aggregation_sensor_data_api_sensor_data_tag_tag_id_mul

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `start_time` (string)
- `end_time` (string)
- `aggregations` (string)
- `limit` (other)

### get_sensor_data_by_tag_api_sensor_data_tag_tag_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `start_time` (other)
- `end_time` (other)
- `limit` (other)
- `offset` (integer)
- `chart_mode` (boolean)

### get_sensor_data_statistics_api_sensor_data_statistics_tag_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `start_time` (other)
- `end_time` (other)

### get_latest_sensor_data_api_sensor_data_latest_tag_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)
- `chart_mode` (boolean)

### clear_aggregation_cache_api_sensor_data_cache_aggregations_delet

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_cache_statistics_api_sensor_data_cache_stats_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### clear_sensor_data_cache_api_sensor_data_cache_sensor_data_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_sensor_data_cache_stats_api_sensor_data_cache_sensor_data_st

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_sensor_data_api_sensor_data_data_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `data_id` (string)

### get_cache_statistics_api_sensor_data_cache_stats_tag_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)

### invalidate_tag_cache_api_sensor_data_cache_invalidate_tag_id_del

**Environment variables**

- `API_KEY`

**Input schema**

- `tag_id` (string)

### list_dashboard_layouts_api_dashboard_layouts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `visibility` (other)
- `search` (other)
- `active_only` (boolean)
- `limit` (integer)
- `offset` (integer)
- `per_page` (other)

### create_dashboard_layout_api_dashboard_layouts_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `description` (other)
- `layout_data` (object)
- `visibility` (string)

### get_dashboard_layout_api_dashboard_layouts_layout_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `layout_id` (string)

### update_dashboard_layout_api_dashboard_layouts_layout_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `layout_id` (string)
- `name` (other)
- `description` (other)
- `layout_data` (other)
- `visibility` (other)

### delete_dashboard_layout_api_dashboard_layouts_layout_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `layout_id` (string)

### duplicate_dashboard_layout_api_dashboard_layouts_layout_id_dupli

**Environment variables**

- `API_KEY`

**Input schema**

- `layout_id` (string)

### test_mqtt_api_diagnostics_mqtt_test_post

**Environment variables**

- `API_KEY`

**Input schema**

- `broker_host` (other)
- `broker_port` (other)
- `username` (other)
- `password` (other)
- `test_topic` (other)
- `timeout_seconds` (other)

### get_mqtt_status_api_diagnostics_mqtt_status_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_mqtt_data_sources_api_diagnostics_mqtt_data_sources_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### health_check_api_diagnostics_system_health_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_mqtt_subscriptions_status_api_diagnostics_mqtt_subscriptions

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### force_resume_mqtt_subscriptions_api_diagnostics_force_resume_mqt

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### list_system_logs_api_system_logs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `service` (other)
- `level` (other)
- `start_date` (other)
- `end_date` (other)
- `resolved` (other)
- `search` (other)

### get_logs_summary_api_system_logs_summary_get

**Environment variables**

- `API_KEY`

**Input schema**

- `days` (integer)

### get_services_status_api_system_logs_services_status_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### resolve_log_api_system_logs_log_id_resolve_put

**Environment variables**

- `API_KEY`

**Input schema**

- `log_id` (string)
- `resolved` (other)
- `resolved_by` (other)

### cleanup_old_logs_api_system_logs_cleanup_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `days` (integer)
- `dry_run` (boolean)

### export_logs_api_system_logs_export_get

**Environment variables**

- `API_KEY`

**Input schema**

- `service` (other)
- `level` (other)
- `start_date` (other)
- `end_date` (other)

### create_totalization_config_api_sensor_totalization_configs_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `description` (other)
- `source_tag_id` (string)
- `trigger_type` (string)
- `operation` (string)
- `time_interval` (other)
- `time_interval_value` (other)
- `window_type` (string)
- `fixed_hour_start` (other)
- `fixed_hour_end` (other)
- `daily_start_time` (other)
- `daily_end_time` (other)
- `weekly_start_day` (other)
- `weekly_end_day` (other)
- `monthly_start_day` (other)
- `monthly_end_day` (other)
- `custom_shifts` (other)
- `window_timezone` (string)
- `allow_overlap` (boolean)
- `gap_tolerance_minutes` (integer)
- `running_condition` (other)
- `running_threshold` (other)
- `state_values` (other)
- `idle_timeout_minutes` (integer)
- `equipment_power_kw` (other)
- `energy_price_kwh` (other)
- `energy_tariff_config` (other)
- `trigger_tag_id` (other)
- `trigger_condition` (other)
- `trigger_value` (other)
- `reset_on_trigger` (boolean)
- `min_samples` (integer)
- `quality_filter` (string)
- `store_intermediate_values` (boolean)
- `precision_digits` (integer)
- `active` (boolean)

### list_totalization_configs_api_sensor_totalization_configs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `active_only` (boolean)
- `trigger_type` (other)
- `operation` (other)
- `source_tag_id` (other)
- `limit` (integer)
- `offset` (integer)

### list_complete_totalization_configs_api_sensor_totalization_confi

**Environment variables**

- `API_KEY`

**Input schema**

- `active_only` (boolean)
- `trigger_type` (other)
- `operation` (other)
- `source_tag_id` (other)
- `limit` (integer)
- `offset` (integer)

### get_totalization_config_api_sensor_totalization_configs_config_i

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)

### update_totalization_config_api_sensor_totalization_configs_confi

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `name` (other)
- `description` (other)
- `trigger_type` (other)
- `operation` (other)
- `time_interval` (other)
- `time_interval_value` (other)
- `window_type` (other)
- `fixed_hour_start` (other)
- `fixed_hour_end` (other)
- `daily_start_time` (other)
- `daily_end_time` (other)
- `weekly_start_day` (other)
- `weekly_end_day` (other)
- `monthly_start_day` (other)
- `monthly_end_day` (other)
- `custom_shifts` (other)
- `window_timezone` (other)
- `allow_overlap` (other)
- `gap_tolerance_minutes` (other)
- `running_condition` (other)
- `running_threshold` (other)
- `state_values` (other)
- `idle_timeout_minutes` (other)
- `equipment_power_kw` (other)
- `energy_price_kwh` (other)
- `energy_tariff_config` (other)
- `trigger_tag_id` (other)
- `trigger_condition` (other)
- `trigger_value` (other)
- `reset_on_trigger` (other)
- `min_samples` (other)
- `quality_filter` (other)
- `store_intermediate_values` (other)
- `precision_digits` (other)
- `active` (other)

### delete_totalization_config_api_sensor_totalization_configs_confi

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `hard_delete` (boolean)

### list_totalization_results_api_sensor_totalization_results_get

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (other)
- `config_ids` (other)
- `start_date` (other)
- `end_date` (other)
- `start_time` (other)
- `end_time` (other)
- `trigger_source` (other)
- `min_value` (other)
- `max_value` (other)
- `per_page` (integer)
- `limit` (other)
- `offset` (integer)
- `page` (other)
- `chart_mode` (boolean)

### get_totalization_result_api_sensor_totalization_results_result_i

**Environment variables**

- `API_KEY`

**Input schema**

- `result_id` (string)

### execute_totalization_api_sensor_totalization_execute_post

**Environment variables**

- `API_KEY`

**Input schema**

- `config_ids` (other)
- `force_execution` (boolean)
- `custom_period_start` (other)
- `custom_period_end` (other)

### process_historical_totalization_data_disabled_api_sensor_totaliz

**Environment variables**

- `API_KEY`

**Input schema**

- `config_ids` (other)
- `days_back` (integer)
- `force_reprocess` (boolean)

### get_totalization_statistics_api_sensor_totalization_statistics_c

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)

### preview_totalization_windows_api_sensor_totalization_windows_pre

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `preview_days` (integer)

### validate_window_configuration_api_sensor_totalization_windows_va

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_window_examples_api_sensor_totalization_windows_examples_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### diagnose_totalization_configurations_api_sensor_totalization_dia

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_totalization_sensors_info_api_sensor_totalization_sensors_in

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (other)
- `include_stats` (boolean)
- `active_only` (boolean)
- `limit` (integer)
- `offset` (integer)

### test_create_totalization_api_sensor_totalization_test_create_pos

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### fix_totalization_configuration_api_sensor_totalization_diagnosti

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `apply_operation_recommendation` (boolean)
- `apply_parameter_adjustments` (boolean)

### list_instances_api_processor_instances_instances_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_instance_details_api_processor_instances_instances_instance_

**Environment variables**

No environment variables required

**Input schema**

- `instance_id` (string)

### force_remove_instance_api_processor_instances_instances_instance

**Environment variables**

No environment variables required

**Input schema**

- `instance_id` (string)

### get_aggregated_metrics_api_processor_instances_metrics_aggregate

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### system_health_check_api_processor_instances_system_health_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_window_preview_api_totalization_windows_api_sensor_totalizat

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `preview_days` (integer)

### validate_window_config_api_totalization_windows_api_sensor_total

**Environment variables**

- `API_KEY`

**Input schema**

- `window_type` (string)
- `fixed_hour_start` (other)
- `fixed_hour_end` (other)
- `daily_start_time` (other)
- `daily_end_time` (other)
- `weekly_start_day` (other)
- `weekly_end_day` (other)
- `monthly_start_day` (other)
- `monthly_end_day` (other)
- `custom_shifts` (other)
- `window_timezone` (string)

### get_window_examples_api_totalization_windows_api_sensor_totaliza

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### list_system_modules_api_system_modules_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `search` (other)
- `category` (other)
- `available_only` (boolean)

### create_system_module_api_system_modules_post

**Environment variables**

- `API_KEY`

**Input schema**

- `active` (boolean)
- `hidden` (boolean)
- `module_key` (string)
- `name` (string)
- `description` (other)
- `category` (other)
- `version` (string)
- `is_available` (boolean)
- `requires_license` (boolean)
- `depends_on_modules` (array)
- `icon` (other)
- `color` (other)
- `sort_order` (integer)

### get_system_module_api_system_modules_module_key_get

**Environment variables**

- `API_KEY`

**Input schema**

- `module_key` (string)

### update_system_module_api_system_modules_module_key_put

**Environment variables**

- `API_KEY`

**Input schema**

- `module_key` (string)
- `active` (other)
- `hidden` (other)
- `marked_for_deletion` (other)
- `name` (other)
- `description` (other)
- `category` (other)
- `version` (other)
- `is_available` (other)
- `requires_license` (other)
- `depends_on_modules` (other)
- `icon` (other)
- `color` (other)
- `sort_order` (other)

### delete_system_module_api_system_modules_module_key_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `module_key` (string)

### list_company_modules_api_system_modules_companies_company_id_mod

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `page` (integer)
- `per_page` (integer)
- `enabled_only` (boolean)

### activate_company_module_api_system_modules_companies_company_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `active` (boolean)
- `hidden` (boolean)
- `module_key` (string)
- `enabled` (boolean)
- `settings` (object)
- `license_expires_at` (other)
- `max_users` (other)
- `max_records` (other)

### get_company_module_api_system_modules_companies_company_id_modul

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `module_key` (string)

### update_company_module_api_system_modules_companies_company_id_mo

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `module_key` (string)
- `active` (other)
- `hidden` (other)
- `marked_for_deletion` (other)
- `enabled` (other)
- `settings` (other)
- `license_expires_at` (other)
- `max_users` (other)
- `max_records` (other)

### deactivate_company_module_api_system_modules_companies_company_i

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `module_key` (string)

### get_system_modules_summary_api_system_modules_summary_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### activate_company_core_modules_api_system_modules_companies_compa

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### get_company_modules_usage_limits_api_system_modules_companies_co

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### list_work_orders_api_work_orders_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `company_id` (other)
- `status` (other)
- `priority` (other)
- `assigned_to` (other)
- `search` (other)

### create_work_order_api_work_orders_post

**Environment variables**

- `API_KEY`

**Input schema**

- `active` (boolean)
- `hidden` (boolean)
- `title` (string)
- `description` (other)
- `type` (string)
- `priority` (string)
- `company_id` (string)
- `site_id` (other)
- `area_id` (other)
- `machine_id` (other)
- `assigned_to` (other)
- `assigned_team` (array)
- `estimated_hours` (other)
- `estimated_cost` (other)
- `scheduled_start` (other)
- `scheduled_end` (other)
- `requires_approval` (boolean)
- `kanban_position` (integer)
- `kanban_column` (other)
- `tags` (array)
- `custom_fields` (object)
- `created_by` (string)

### get_work_order_api_work_orders_work_order_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)

### update_work_order_api_work_orders_work_order_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)
- `active` (other)
- `hidden` (other)
- `marked_for_deletion` (other)
- `title` (other)
- `description` (other)
- `type` (other)
- `priority` (other)
- `site_id` (other)
- `area_id` (other)
- `machine_id` (other)
- `assigned_to` (other)
- `assigned_team` (other)
- `estimated_hours` (other)
- `estimated_cost` (other)
- `scheduled_start` (other)
- `scheduled_end` (other)
- `actual_start` (other)
- `actual_end` (other)
- `actual_hours` (other)
- `actual_cost` (other)
- `requires_approval` (other)
- `completion_notes` (other)
- `kanban_position` (other)
- `kanban_column` (other)
- `tags` (other)
- `custom_fields` (other)

### delete_work_order_api_work_orders_work_order_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)

### change_work_order_status_api_work_orders_work_order_id_change_st

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)
- `new_status` (string)
- `reason` (other)
- `kanban_position` (other)

### assign_work_order_api_work_orders_work_order_id_assign_post

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)
- `assigned_to` (other)
- `assigned_team` (other)
- `notes` (other)

### get_kanban_board_api_work_orders_kanban_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)
- `site_id` (other)
- `assigned_to` (other)

### list_work_order_comments_api_work_orders_work_order_id_comments_

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)
- `page` (integer)
- `per_page` (integer)

### create_work_order_comment_api_work_orders_work_order_id_comments

**Environment variables**

- `API_KEY`

**Input schema**

- `work_order_id` (string)
- `active` (boolean)
- `hidden` (boolean)
- `comment` (string)
- `is_internal` (boolean)
- `attachments` (array)
- `b_work_order_id` (string)
- `user_id` (string)

### get_work_orders_statistics_api_work_orders_statistics_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)
- `start_date` (other)
- `end_date` (other)

### list_windowing_configs_api_data_windowing_configs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `company_id` (other)
- `enabled_only` (boolean)
- `search` (other)

### create_windowing_config_api_data_windowing_configs_post

**Environment variables**

- `API_KEY`

**Input schema**

- `active` (boolean)
- `hidden` (boolean)
- `name` (string)
- `description` (other)
- `company_id` (string)
- `trigger_type` (string)
- `trigger_sensor_id` (other)
- `trigger_condition` (other)
- `trigger_value` (other)
- `trigger_value_secondary` (other)
- `time_interval_minutes` (other)
- `time_schedule` (other)
- `window_duration_minutes` (integer)
- `pre_trigger_minutes` (integer)
- `post_trigger_minutes` (integer)
- `monitored_sensors` (array)
- `min_data_quality` (other)
- `max_gap_minutes` (integer)
- `store_baseline` (boolean)
- `baseline_conditions` (object)
- `enabled` (boolean)

### get_windowing_config_api_data_windowing_configs_config_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)

### update_windowing_config_api_data_windowing_configs_config_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `active` (other)
- `hidden` (other)
- `marked_for_deletion` (other)
- `name` (other)
- `description` (other)
- `trigger_type` (other)
- `trigger_sensor_id` (other)
- `trigger_condition` (other)
- `trigger_value` (other)
- `trigger_value_secondary` (other)
- `time_interval_minutes` (other)
- `time_schedule` (other)
- `window_duration_minutes` (other)
- `pre_trigger_minutes` (other)
- `post_trigger_minutes` (other)
- `monitored_sensors` (other)
- `min_data_quality` (other)
- `max_gap_minutes` (other)
- `store_baseline` (other)
- `baseline_conditions` (other)
- `enabled` (other)

### delete_windowing_config_api_data_windowing_configs_config_id_del

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)

### execute_windowing_manual_api_data_windowing_configs_config_id_ex

**Environment variables**

- `API_KEY`

**Input schema**

- `config_id` (string)
- `trigger_timestamp` (other)
- `trigger_value` (other)
- `notes` (other)

### list_data_windows_api_data_windowing_windows_get

**Environment variables**

- `API_KEY`

**Input schema**

- `page` (integer)
- `per_page` (integer)
- `config_id` (other)
- `company_id` (other)
- `state` (other)
- `is_baseline` (other)
- `start_date` (other)
- `end_date` (other)

### get_data_window_api_data_windowing_windows_window_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `window_id` (string)

### get_window_data_api_data_windowing_windows_window_id_data_get

**Environment variables**

- `API_KEY`

**Input schema**

- `window_id` (string)

### mark_as_baseline_api_data_windowing_windows_window_id_mark_basel

**Environment variables**

- `API_KEY`

**Input schema**

- `window_id` (string)
- `baseline_score` (other)
- `tags` (other)
- `notes` (other)

### unmark_baseline_api_data_windowing_windows_window_id_mark_baseli

**Environment variables**

- `API_KEY`

**Input schema**

- `window_id` (string)

### get_configs_summary_api_data_windowing_configs_summary_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)

### get_realtime_usage_api_data_usage_realtime_usage_company_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `period` (other)

### check_realtime_limits_api_data_usage_realtime_limits_company_id_

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### list_data_usage_api_data_usage_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)
- `user_id` (other)
- `usage_type` (other)
- `endpoint` (other)
- `start_date` (other)
- `end_date` (other)
- `billing_period` (other)
- `page` (integer)
- `per_page` (integer)

### get_usage_statistics_api_data_usage_statistics_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)
- `start_date` (other)
- `end_date` (other)
- `billing_period` (other)
- `detailed` (boolean)

### get_usage_summary_api_data_usage_summary_billing_period_get

**Environment variables**

- `API_KEY`

**Input schema**

- `billing_period` (string)
- `company_id` (other)

### list_billing_records_api_data_usage_billing_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)
- `billing_period` (other)
- `is_processed` (other)

### get_billing_for_period_api_data_usage_billing_billing_period_get

**Environment variables**

- `API_KEY`

**Input schema**

- `billing_period` (string)
- `company_id` (other)

### process_billing_for_period_api_data_usage_billing_billing_period

**Environment variables**

- `API_KEY`

**Input schema**

- `billing_period` (string)
- `company_id` (other)

### get_company_overview_api_data_usage_reports_overview_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (other)

### get_company_pricing_api_data_usage_pricing_company_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### update_company_pricing_api_data_usage_pricing_company_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `price_per_gb_input` (other)
- `price_per_gb_output` (other)
- `price_per_gb_storage` (other)
- `price_per_1k_requests` (other)
- `monthly_limit_gb` (other)
- `alert_threshold_percentage` (other)
- `storage_calculation_type` (other)
- `storage_billing_day` (other)

### delete_company_pricing_api_data_usage_pricing_company_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)

### create_company_pricing_api_data_usage_pricing_post

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `price_per_gb_input` (number)
- `price_per_gb_output` (number)
- `price_per_gb_storage` (number)
- `price_per_1k_requests` (number)
- `currency` (string)
- `monthly_limit_gb` (other)
- `alert_threshold_percentage` (number)
- `storage_calculation_type` (string)
- `storage_billing_day` (integer)

### debug_usage_status_api_data_usage_debug_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### debug_force_flush_api_data_usage_debug_flush_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### apply_default_pricing_to_company_api_data_usage_pricing_company_

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `override_existing` (boolean)

### get_company_credits_status_api_data_usage_credits_company_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `billing_period` (other)

### update_company_credits_api_data_usage_credits_company_id_put

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `billing_period` (string)
- `contracted_credits` (other)
- `auto_renew` (other)
- `notification_thresholds` (other)
- `active` (other)

### get_company_credits_details_api_data_usage_credits_company_id_de

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `billing_period` (other)

### create_or_update_company_credits_api_data_usage_credits_post

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `billing_period` (string)
- `contracted_credits` (number)
- `auto_renew` (boolean)
- `notification_thresholds` (string)
- `currency` (string)

### get_company_credits_history_api_data_usage_credits_company_id_hi

**Environment variables**

- `API_KEY`

**Input schema**

- `company_id` (string)
- `months` (integer)

### list_pricing_templates_api_default_pricing_templates_get

**Environment variables**

- `API_KEY`

**Input schema**

- `active_only` (boolean)

### create_pricing_template_api_default_pricing_templates_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `description` (other)
- `price_per_gb_input` (number)
- `price_per_gb_output` (number)
- `price_per_gb_storage` (number)
- `price_per_1k_requests` (number)
- `currency` (string)
- `monthly_limit_gb` (other)
- `alert_threshold_percentage` (number)
- `storage_calculation_type` (string)
- `storage_billing_day` (integer)
- `is_default` (boolean)

### get_pricing_template_api_default_pricing_templates_template_id_g

**Environment variables**

- `API_KEY`

**Input schema**

- `template_id` (string)

### update_pricing_template_api_default_pricing_templates_template_i

**Environment variables**

- `API_KEY`

**Input schema**

- `template_id` (string)
- `name` (other)
- `description` (other)
- `price_per_gb_input` (other)
- `price_per_gb_output` (other)
- `price_per_gb_storage` (other)
- `price_per_1k_requests` (other)
- `monthly_limit_gb` (other)
- `alert_threshold_percentage` (other)
- `storage_billing_day` (other)
- `is_default` (other)

### delete_pricing_template_api_default_pricing_templates_template_i

**Environment variables**

- `API_KEY`

**Input schema**

- `template_id` (string)

### apply_template_to_companies_api_default_pricing_templates_templa

**Environment variables**

- `API_KEY`

**Input schema**

- `template_id` (string)
- `b_template_id` (string)
- `company_ids` (array)
- `override_existing` (boolean)
- `preserve_monthly_limits` (boolean)

### get_default_template_api_default_pricing_templates_default_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### preview_pricing_adjustment_api_default_pricing_adjustments_previ

**Environment variables**

- `API_KEY`

**Input schema**

- `adjustment_name` (string)
- `description` (other)
- `adjustment_type` (string)
- `percentage_data` (other)
- `fixed_value_data` (other)
- `template_data` (other)
- `target_companies` (object)
- `preview_only` (boolean)

### execute_pricing_adjustment_api_default_pricing_adjustments_post

**Environment variables**

- `API_KEY`

**Input schema**

- `adjustment_name` (string)
- `description` (other)
- `adjustment_type` (string)
- `percentage_data` (other)
- `fixed_value_data` (other)
- `template_data` (other)
- `target_companies` (object)
- `preview_only` (boolean)

### list_adjustment_history_api_default_pricing_adjustments_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)
- `status` (other)

### get_adjustment_details_api_default_pricing_adjustments_adjustmen

**Environment variables**

- `API_KEY`

**Input schema**

- `adjustment_id` (string)

### root_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### health_check_health_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

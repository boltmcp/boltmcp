# @open-mcp/_api_intreeapi

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "_api_intreeapi": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/_api_intreeapi@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/_api_intreeapi@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
X_SIMPLE_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add _api_intreeapi \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --X_SIMPLE_TOKEN=$X_SIMPLE_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add _api_intreeapi \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --X_SIMPLE_TOKEN=$X_SIMPLE_TOKEN
```

### Other

```bash
npx @open-mcp/config add _api_intreeapi \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --X_SIMPLE_TOKEN=$X_SIMPLE_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "_api_intreeapi": {
      "command": "npx",
      "args": ["-y", "@open-mcp/_api_intreeapi"],
      "env": {"API_KEY":"...","X_SIMPLE_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider
- `X_SIMPLE_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### metrics_metrics_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### alive_check_alive_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### health_check_health_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### check_redis_check_redis_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### version_check_version_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_migration_status_migrations_status_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### send_push_internal_notifications_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### send_push_to_all_users_internal_notifications_send_to_all_post

**Environment variables**

No environment variables required

**Input schema**

- `batch_size` (integer)
- `title` (string)
- `body` (string)

### delete_activity_by_object_internal_notifications_by_object_delet

**Environment variables**

No environment variables required

**Input schema**

- `object_id` (string)
- `activity_type` (string)

### send_new_treet_access_notification_internal_notifications_treet_

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `hub_name` (string)
- `recipient_ids` (array)
- `id` (string)
- `title` (string)

### send_new_multiple_treet_access_notification_internal_notificatio

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `hub_name` (string)
- `pack_id` (string)
- `recipient_ids` (array)

### send_treet_share_notification_internal_notifications_treet_share

**Environment variables**

No environment variables required

**Input schema**

- `id` (other)
- `ambassador_id` (string)
- `recipient_ids` (array)
- `title` (other)
- `ambassador_name` (string)

### send_reservation_almost_expire_notification_internal_notificatio

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `hub_name` (string)
- `recipient_ids` (array)
- `id` (string)
- `title` (string)

### send_reservation_expired_notification_internal_notifications_res

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `hub_name` (string)
- `recipient_ids` (array)
- `id` (string)
- `title` (string)

### send_reserve_soon_out_of_redeems_notification_internal_notificat

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `hub_name` (string)
- `recipient_ids` (array)
- `id` (string)
- `title` (string)

### send_reserve_cooldown_over_notification_internal_notifications_r

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `hub_name` (string)
- `recipient_ids` (array)
- `id` (string)
- `title` (string)

### reject_business_internal_businesses_business_id_reject_post

**Environment variables**

No environment variables required

**Input schema**

- `business_id` (string)

### validate_business_access_internal_businesses_business_id_access_

**Environment variables**

No environment variables required

**Input schema**

- `business_id` (string)
- `expected_type` (string)
- `role` (string)
- `user_id` (string)
- `account_type` (string)

### send_moderation_emails_task_internal_email_tasks_moderation_post

**Environment variables**

No environment variables required

**Input schema**

- `media_id` (string)
- `moderation_label_names` (array)

### send_redeem_limit_hit_email_task_internal_email_tasks_redeem_lim

**Environment variables**

No environment variables required

**Input schema**

- `treet_name` (string)
- `hub_id` (string)
- `cover_image_url` (other)

### send_first_redeem_email_task_internal_email_tasks_first_redeem_p

**Environment variables**

No environment variables required

**Input schema**

- `treet_name` (string)
- `hub_id` (string)
- `cover_image_url` (other)

### schedule_treet_expires_soon_email_internal_email_tasks_schedule_

**Environment variables**

No environment variables required

**Input schema**

- `valid_from` (string)
- `expires_at` (string)
- `treet_id` (string)
- `hub_id` (string)
- `treet_name` (string)
- `cover_image_url` (other)

### reschedule_treet_expires_soon_email_internal_email_tasks_schedul

**Environment variables**

No environment variables required

**Input schema**

- `valid_from` (string)
- `expires_at` (string)
- `treet_id` (string)

### send_new_partner_treet_email_internal_email_tasks_new_partner_tr

**Environment variables**

No environment variables required

**Input schema**

- `partner_id` (string)
- `hub_id` (string)
- `treet` (other)
- `cover_image_url` (other)

### send_custom_org_tier_link_email_internal_email_tasks_custom_org_

**Environment variables**

No environment variables required

**Input schema**

- `org_id` (string)
- `price` (integer)
- `max_hubs` (integer)
- `max_admins_per_hub` (integer)
- `max_ambassadors` (integer)
- `allow_extra_ambassadors` (boolean)
- `extra_ambassador_price` (integer)
- `allow_hidden_member_list` (boolean)
- `allow_free_packs` (boolean)
- `max_share_access_level` (string)

### validate_packs_internal_packs_validate_post

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `pack_ids` (array)

### validate_invite_link_internal_invite_links_invite_link_id_get

**Environment variables**

No environment variables required

**Input schema**

- `invite_link_id` (string)

### get_users_internal_users_get

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (array)

### get_friends_internal_users_friend_ids_get

**Environment variables**

No environment variables required

**Input schema**

- `current_user_id` (string)
- `user_id` (array)

### get_hubs_internal_hubs_get

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (array)
- `embed_org` (boolean)

### get_hub_partners_internal_hubs_current_hub_id_partners_get

**Environment variables**

No environment variables required

**Input schema**

- `current_hub_id` (string)
- `hub_id` (array)

### get_ambassador_users_from_hub_internal_hubs_hub_id_ambassadors_u

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)

### get_period_claim_count_from_hubs_internal_hubs_ambassadors_claim

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (array)
- `start` (string)
- `end` (string)

### get_category_names_internal_category_names_get

**Environment variables**

No environment variables required

**Input schema**

- `category_id` (array)
- `name` (other)
- `offset` (integer)
- `limit` (integer)

### base_stats_stats_base_get

**Environment variables**

No environment variables required

**Input schema**

- `date_start` (other)
- `date_stop` (other)
- `password` (string)

### factory_all_factory_post

**Environment variables**

No environment variables required

**Input schema**

- `total_users` (integer)
- `aspects_per_user` (integer)
- `relations_per_user` (integer)
- `create_avatar_images` (boolean)
- `create_cover_images` (boolean)

### get_request_info_request_info_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_redis_value_redis_get

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)

### set_redis_value_redis_put

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)
- `value` (other)

### test_data_content_test_data_generate_content_post

**Environment variables**

No environment variables required

**Input schema**

- `phone_numbers` (array)
- `num_relations` (other)

### test_data_users_test_data_test_users_post

**Environment variables**

No environment variables required

**Input schema**

- `amount_of_users` (integer)
- `is_in_relation` (boolean)

### get_test_users_test_data_test_users_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### delete_test_users_test_data_test_users_delete

**Environment variables**

No environment variables required

**Input schema**

- `phone_numbers` (array)

### generate_notifications_for_user_test_data_generate_notifications

**Environment variables**

No environment variables required

**Input schema**

- `phone_number` (string)

### test_data_users_for_load_least_test_data_test_users_load_test_po

**Environment variables**

No environment variables required

**Input schema**

- `amount_of_users` (integer)
- `is_in_relation` (boolean)

### rate_limit_demos_rate_limit_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### schedule_delayed_email_task_demos_schedule_delayed_email_task_po

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `delay_in_minutes` (integer)

### schedule_task_demos_schedule_postgres_task_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_scheduled_tasks_demos_get_scheduled_task_get

**Environment variables**

No environment variables required

**Input schema**

- `id` (other)

### delete_scheduled_task_demos_delete_scheduled_task_delete

**Environment variables**

No environment variables required

**Input schema**

- `schedule_id` (other)
- `business_id` (other)

### update_scheduled_task_demos_update_scheduled_task_put

**Environment variables**

No environment variables required

**Input schema**

- `schedule_id` (string)

### kick_scheduled_task_demos_kick_scheduled_task_post

**Environment variables**

No environment variables required

**Input schema**

- `schedule_id` (string)

### demo_ws_events_demos_demo_ws_events_get

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (string)
- `event_type` (string)

### get_cache_lifetime_demos_cache_lifetime_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### demo_redis_demos_redis_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### demo_redis_input_demos_redis_input_get

**Environment variables**

No environment variables required

**Input schema**

- `some_input` (string)

### demo_redis_naive_demos_redis_naive_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### demo_redis_request_demos_redis_request_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### demo_redis_response_demos_redis_response_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### demo_noredis_demos_noredis_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### send_email_demos_send_email_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)

### send_push_demos_send_push_post

**Environment variables**

- `API_KEY`

**Input schema**

- `title` (other)

### http_call_demos_http_call_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### demo_send_notification_demos_send_push_mock_post

**Environment variables**

No environment variables required

**Input schema**

- `push_type` (string)

### receive_push_mock_demos_receive_push_mock_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### send_notification_demos_send_push_real_post

**Environment variables**

- `API_KEY`

**Input schema**

- `push_type` (string)

### kick_hello_task_demos_kick_hello_task_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### kick_redis_task_demos_kick_redis_task_post

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)
- `val` (string)

### get_redis_task_demos_get_redis_task_get

**Environment variables**

No environment variables required

**Input schema**

- `key` (string)

### gtm_checkout_gtm_checkout_get

**Environment variables**

No environment variables required

**Input schema**

- `hub_id` (string)
- `coupon` (string)
- `value` (number)
- `currency` (string)

### generate_otp_auth_generate_otp_post

**Environment variables**

No environment variables required

**Input schema**

- `error_if_user_not_exists` (boolean)
- `error_if_user_exists` (boolean)
- `vendor_name` (string)
- `phone` (string)
- `X-Firebase-AppCheck` (other)
- `X-Recaptcha-Token` (string)

### verify_phone_auth_verify_phone_post

**Environment variables**

No environment variables required

**Input schema**

- `full_name` (string)
- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `phone` (string)
- `otp_code` (string)
- `device` (other)
- `username` (other)
- `date_of_birth` (string)

### login_by_otp_auth_login_otp_post

**Environment variables**

No environment variables required

**Input schema**

- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `phone` (string)
- `otp_code` (string)
- `device` (other)

### verify_otp_auth_verify_otp_post

**Environment variables**

No environment variables required

**Input schema**

- `phone` (string)
- `otp_code` (string)

### generate_otp_dev_auth_generate_otp_dev_post

**Environment variables**

No environment variables required

**Input schema**

- `phone` (string)
- `key` (string)

### refresh_otp_auth_refresh_otp_post

**Environment variables**

No environment variables required

**Input schema**

- `require_handshake` (boolean)
- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `refresh_token` (string)

### invalidate_refresh_token_auth_refresh_otp_invalidate_post

**Environment variables**

No environment variables required

**Input schema**

- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `refresh_token` (string)

### verify_email_auth_verify_email_get

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)

### login_google_app_auth_login_google_post

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `device` (object)

### get_simple_user_token_auth_simple_tokens_post

**Environment variables**

No environment variables required

**Input schema**

- `phone` (other)

### generate_verify_link_auth_generate_verify_link_post

**Environment variables**

No environment variables required

**Input schema**

- `full_name` (string)
- `phone` (string)
- `date_of_birth` (string)
- `salt` (other)
- `X-Recaptcha-Token` (string)

### verify_by_link_auth_verify_by_link_post

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)
- `device` (other)

### generate_username_suggestions_users_generate_username_suggestion

**Environment variables**

No environment variables required

**Input schema**

- `full_name` (string)

### check_if_username_exists_users_check_username_get

**Environment variables**

No environment variables required

**Input schema**

- `username` (string)

### get_public_link_public_links_get

**Environment variables**

No environment variables required

**Input schema**

- `salt` (string)

### verify_apply_link_verify_apply_business_link_get

**Environment variables**

No environment variables required

**Input schema**

- `domain_id` (string)
- `token` (string)
- `tag` (other)

### get_latest_contract_by_type_contracts_latest_get

**Environment variables**

No environment variables required

**Input schema**

- `contract_type` (string)

### oauth_callback_oauth_callback_get

**Environment variables**

No environment variables required

**Input schema**

- `integration` (string)
- `code` (string)
- `state` (string)

### run_scheduled_planday_task_oauth_planday_scheduled_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### generate_otp_for_mail_auth_generate_otp_email_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### read_users_me_auth_me_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### logout_device_auth_logout_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_users_me_users_me_get

**Environment variables**

- `API_KEY`

**Input schema**

- `embed_total_relations` (boolean)
- `embed_total_aspects` (boolean)
- `embed_total_communities` (boolean)
- `embed_agrees_to_app_tos` (boolean)

### patch_users_me_users_me_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `full_name` (other)
- `username` (other)
- `is_public` (other)
- `avatar_image_id` (other)
- `cover_image_id` (other)

### delete_your_account_users_me_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `otp` (other)

### get_by_username_users_by_username_get

**Environment variables**

- `API_KEY`

**Input schema**

- `username` (string)

### get_users_id_users_user_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### change_phone_number_users_me_phone_post

**Environment variables**

- `API_KEY`

**Input schema**

- `phone` (string)
- `otp` (string)

### set_email_users_me_email_post

**Environment variables**

- `API_KEY`

**Input schema**

- `email` (string)

### delete_email_users_me_email_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_linked_biz_user_users_me_linked_biz_user_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### delete_biz_user_link_users_me_linked_biz_user_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_user_settings_users_me_settings_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### update_user_settings_users_me_settings_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `get_push_on_new_invite` (other)
- `get_push_on_new_introduction` (other)
- `get_push_on_new_relation` (other)
- `get_push_on_thread_activity` (other)
- `get_push_on_new_biz_invite` (other)
- `get_push_on_new_treet` (other)
- `get_push_on_new_post` (other)
- `get_push_on_owned_biz_updates` (other)
- `get_push_on_reservation` (other)

### update_activity_is_read_activities_activity_id_is_read_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `activity_id` (string)
- `is_read` (boolean)

### delete_activity_recipient_activities_activity_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `activity_id` (string)

### check_if_user_has_new_activity_activities_has_new_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_relation_relations_relation_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `relation_id` (string)

### create_relation_relations_post

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_id` (other)
- `invite_link_id` (other)

### get_user_relation_users_user_id_relations_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### update_is_read_users_user_id_relations_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `is_read` (boolean)

### delete_user_relation_users_user_id_relations_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### get_your_contacts_me_contacts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `embed_avatar_image` (boolean)
- `embed_cover_image` (boolean)
- `id` (other)
- `relation_id` (other)
- `search` (other)

### block_user_blocked_users_post

**Environment variables**

- `API_KEY`

**Input schema**

- `blocked_user_id` (string)

### get_blocked_users_blocked_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)

### unblock_user_blocked_users_blocked_user_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `blocked_user_id` (string)

### get_aspect_aspects_aspect_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)

### patch_aspect_aspects_aspect_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `website_url` (other)
- `phone` (other)
- `video_url` (other)
- `email` (other)
- `description` (other)
- `icon_image_id` (other)
- `cover_image_id` (other)
- `tags` (other)
- `title` (other)
- `use_profile_image` (other)

### delete_aspect_aspects_aspect_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)

### create_aspect_aspects_post

**Environment variables**

- `API_KEY`

**Input schema**

- `website_url` (other)
- `phone` (other)
- `video_url` (other)
- `email` (other)
- `description` (other)
- `icon_image_id` (other)
- `cover_image_id` (other)
- `tags` (other)
- `title` (string)
- `use_profile_image` (boolean)
- `gallery_ids` (other)
- `member_ids` (other)

### change_position_of_aspect_aspects_change_position_post

**Environment variables**

- `API_KEY`

**Input schema**

- `item_to_move_id` (string)
- `previous_item_id` (other)

### get_your_own_aspects_me_aspects_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `embed_icon_image` (boolean)
- `embed_cover_image` (boolean)
- `embed_recent_posts` (boolean)
- `embed_preview_members` (boolean)
- `embed_gallery` (boolean)
- `id` (other)

### get_aspects_from_your_feed_feed_aspects_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_icon_image` (boolean)
- `embed_cover_image` (boolean)
- `embed_recent_posts` (boolean)
- `embed_owner` (boolean)
- `embed_gallery` (boolean)
- `id` (other)
- `owner_id` (other)
- `feed_preference` (other)

### get_aspects_user_can_see_me_users_user_id_aspects_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_icon_image` (boolean)
- `embed_cover_image` (boolean)
- `embed_recent_posts` (boolean)
- `embed_preview_members` (boolean)
- `embed_gallery` (boolean)

### update_aspects_for_business_businesses_business_id_aspects_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_aspects_ids_for_business_businesses_business_id_aspects_ids_

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### create_aspect_member_aspect_members_post

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `member_id` (string)

### batch_update_aspect_members_aspect_members_batch_patch

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### remove_member_from_aspect_aspects_aspect_id_members_member_id_de

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `member_id` (string)

### get_members_of_aspect_me_aspects_aspect_id_members_get

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `embed_member` (boolean)
- `limit` (integer)
- `token` (other)
- `sort_by` (other)

### get_preference_of_aspect_aspects_aspect_id_preference_get

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)

### update_preference_of_aspect_aspects_aspect_id_preference_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `feed_preference` (other)
- `notification_preference` (other)
- `note` (other)

### add_gallery_to_aspect_aspect_gallery_post

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `gallery_ids` (array)

### remove_gallery_item_from_aspect_aspect_gallery_media_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `media_id` (string)

### get_post_posts_post_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)

### patch_post_posts_post_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `content` (other)

### delete_post_posts_post_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)

### create_post_posts_post

**Environment variables**

- `API_KEY`

**Input schema**

- `content` (other)
- `gallery_ids` (other)
- `aspect_ids` (other)
- `business_id` (other)

### get_posts_from_your_feed_old_feed_posts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_author` (boolean)
- `embed_gallery` (boolean)
- `embed_aspects` (boolean)
- `embed_business` (boolean)
- `embed_recent_comment` (boolean)
- `embed_state` (boolean)
- `id` (other)
- `author_id` (other)
- `aspect_id` (other)
- `business_id` (other)
- `aspect_member_feed_preference` (other)
- `state` (other)
- `post_type` (other)

### get_posts_from_your_feed_feed_posts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_author` (boolean)
- `embed_gallery` (boolean)
- `embed_aspects` (boolean)
- `embed_business` (boolean)
- `embed_recent_comment` (boolean)
- `embed_state` (boolean)
- `id` (other)
- `author_id` (other)
- `aspect_id` (other)
- `business_id` (other)
- `aspect_member_feed_preference` (other)
- `state` (other)
- `post_type` (other)

### get_your_own_combined_posts_me_posts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_gallery` (boolean)
- `post_type` (other)

### hide_or_unhide_post_posts_post_id_hide_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `hide` (boolean)

### create_aspect_post_aspect_posts_post

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `aspect_id` (string)

### create_post_as_business_businesses_business_id_posts_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `content` (other)
- `gallery_ids` (other)
- `created_at` (other)

### get_posts_made_to_business_businesses_business_id_posts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `author_id` (other)
- `get_scheduled` (boolean)
- `embed_post_author` (boolean)
- `embed_post_gallery` (boolean)
- `embed_comment_info` (boolean)
- `embed_biz_relation` (boolean)

### delete_post_in_business_businesses_business_id_posts_post_id_del

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `business_id` (string)

### remove_gallery_item_from_post_post_gallery_media_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `media_id` (string)

### create_invite_link_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `expires_at` (other)
- `aspect_ids` (other)
- `limit` (other)

### get_invite_link_by_shorturl_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `shorturl` (string)
- `embed_aspects` (boolean)

### get_invite_link_by_id_invite_links_invite_link_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_id` (string)

### update_invite_link_expiry_invite_links_invite_link_id_expiry_pat

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_id` (string)
- `expires_at` (other)

### create_invite_link_aspect_invite_link_aspects_post

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `invite_link_id` (string)

### delete_invite_link_aspect_invite_link_aspects_invite_link_aspect

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_aspect_id` (string)

### create_invite_link_aspect_batch_invite_link_aspects_post

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_ids` (array)
- `invite_link_id` (string)

### get_treet_invite_link_by_shorturl_treet_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `shorturl` (string)

### create_treet_invite_link_treet_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `expires_at` (other)
- `treet_id` (string)

### get_link_data_from_salt_link_data_get

**Environment variables**

- `API_KEY`

**Input schema**

- `salt` (string)

### create_invite_invites_post

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_id` (other)
- `user_id` (other)
- `phone` (other)
- `aspect_ids` (other)

### get_invite_by_id_invites_invite_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_id` (string)

### delete_invite_by_id_invites_invite_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_id` (string)

### get_invite_owner_invites_invite_id_owner_get

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_id` (string)

### get_received_invites_feed_invites_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_owner` (boolean)
- `id` (other)

### get_pending_invites_me_invites_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_invitee` (boolean)

### create_invite_aspect_invite_aspects_post

**Environment variables**

- `API_KEY`

**Input schema**

- `aspect_id` (string)
- `invite_id` (string)

### delete_invite_aspect_invite_aspects_invite_aspect_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_aspect_id` (string)

### create_comment_comments_post

**Environment variables**

- `API_KEY`

**Input schema**

- `content` (string)
- `thread_id` (string)

### update_comment_comments_comment_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `comment_id` (string)
- `content` (string)

### delete_comment_comments_comment_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `comment_id` (string)

### get_comment_comments_comment_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `comment_id` (string)

### get_comments_by_thread_id_threads_thread_id_comments_get

**Environment variables**

- `API_KEY`

**Input schema**

- `thread_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_author` (boolean)

### create_thread_threads_post

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `comment` (other)

### update_thread_threads_thread_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `thread_id` (string)

### delete_thread_threads_thread_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `thread_id` (string)

### get_thread_threads_thread_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `thread_id` (string)
- `check_post_access` (boolean)

### get_threads_made_on_post_posts_post_id_threads_get

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_recent_comment` (boolean)
- `embed_initial_comment` (boolean)
- `embed_number_of_comments` (boolean)
- `embed_author` (boolean)
- `id` (other)

### create_business_businesses_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (other)
- `web_domain` (string)
- `can_app_members_invite` (boolean)
- `can_app_members_accept_applications` (boolean)
- `access_type` (string)
- `hub_type` (string)
- `location_type` (string)
- `location_data` (other)
- `join_type` (string)
- `require_member_verification` (boolean)
- `business_profile` (other)
- `categories` (other)
- `locations` (other)
- `apply_domains` (other)
- `enable_feed` (boolean)
- `enable_app_user_post` (boolean)
- `enable_members` (boolean)
- `enable_aspects` (boolean)
- `default_currency` (string)

### check_if_web_domain_is_taken_businesses_check_web_domain_get

**Environment variables**

- `API_KEY`

**Input schema**

- `web_domain` (string)
- `suggestions_num` (integer)

### patch_business_businesses_business_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `name` (other)
- `invited_by_ref_code` (other)
- `onboarding_data` (other)
- `location_type` (other)
- `location_data` (other)
- `access_type` (other)
- `can_app_members_invite` (other)
- `can_app_members_accept_applications` (other)
- `hub_type` (other)
- `categories` (other)
- `location_update_data` (other)
- `join_type` (other)
- `require_member_verification` (other)
- `enable_feed` (other)
- `enable_app_user_post` (other)
- `enable_members` (other)
- `enable_aspects` (other)
- `enable_app_leaderboard` (other)
- `default_currency` (other)

### delete_business_businesses_business_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### transfer_owner_businesses_business_id_transfer_owner_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_relation_id` (other)
- `biz_user_email` (other)
- `message` (other)

### generate_upgrade_business_token_businesses_business_id_generate_

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_feed_businesses_old_feed_businesses_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `web_domain` (other)
- `only_show_owned` (boolean)
- `only_show_joined` (boolean)
- `search` (other)
- `enable_feed` (other)
- `enable_app_user_post` (other)
- `category_id` (array)
- `embed_preview_members` (boolean)
- `embed_app_owner` (boolean)
- `embed_is_ambassador` (boolean)
- `embed_total_passes` (boolean)
- `embed_total_posts` (boolean)

### get_feed_businesses_feed_businesses_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `web_domain` (other)
- `only_show_owned` (boolean)
- `only_show_joined` (boolean)
- `search` (other)
- `enable_feed` (other)
- `enable_app_user_post` (other)
- `category_id` (array)
- `embed_preview_members` (boolean)
- `embed_app_owner` (boolean)
- `embed_is_ambassador` (boolean)
- `embed_total_passes` (boolean)
- `embed_total_posts` (boolean)

### ban_user_from_business_biz_banned_users_post

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `reason` (other)

### unban_user_from_business_biz_banned_users_biz_banned_user_id_del

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_banned_user_id` (string)

### get_biz_banned_users_businesses_business_id_biz_banned_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)

### patch_profile_by_business_businesses_business_id_profile_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `website_url` (other)
- `phone` (other)
- `video_url` (other)
- `email` (other)
- `title` (other)
- `logo_image_id` (other)
- `cover_image_id` (other)
- `description` (other)
- `address` (other)

### get_profile_by_business_businesses_business_id_profile_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_own_biz_relation_businesses_business_id_biz_relations_me_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### remove_yourself_from_business_businesses_business_id_biz_relatio

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `delete_posts` (boolean)

### get_members_by_business_businesses_business_id_biz_relations_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_aspects` (boolean)
- `user_id` (other)
- `role` (other)
- `search` (other)

### get_member_user_ids_businesses_business_id_biz_relations_user_id

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### remove_user_from_business_businesses_business_id_users_user_id_d

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)

### update_biz_relation_of_user_businesses_business_id_users_user_id

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `role` (string)

### get_aspects_of_biz_relation_businesses_business_id_users_user_id

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)

### join_or_apply_to_business_businesses_business_id_join_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_invite_id` (other)
- `biz_invite_link_id` (other)
- `biz_application` (other)
- `aspect_ids` (other)
- `apply_with_email` (other)

### accept_biz_application_biz_applications_biz_application_id_accep

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_application_id` (string)

### delete_biz_application_biz_applications_biz_application_id_delet

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_application_id` (string)

### get_pending_biz_applications_old_biz_applications_pending_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_business` (boolean)

### get_pending_biz_applications_biz_applications_pending_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_business` (boolean)

### get_biz_applications_businesses_business_id_biz_applications_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_user` (boolean)
- `embed_aspects` (boolean)
- `search` (other)

### create_timeout_for_user_businesses_business_id_users_user_id_tim

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `timeout_duration_minutes` (other)
- `reason` (other)

### delete_timeout_businesses_business_id_users_user_id_timeout_dele

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)

### get_timeouts_businesses_business_id_timeouts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_biz_relation` (boolean)

### get_integrations_by_hub_businesses_business_id_integrations_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `integration_type` (other)
- `integration_id` (other)
- `id` (other)

### add_gallery_to_biz_profile_biz_profile_gallery_post

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_profile_id` (string)
- `gallery_ids` (array)

### remove_gallery_item_from_biz_profile_biz_profile_gallery_media_i

**Environment variables**

- `API_KEY`

**Input schema**

- `media_id` (string)

### leave_biz_group_biz_groups_biz_group_id_members_me_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)

### join_biz_group_biz_groups_biz_group_id_join_post

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)
- `biz_invite_id` (other)
- `biz_invite_link_id` (other)

### apply_to_biz_group_biz_groups_biz_group_id_apply_post

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)
- `biz_invite_id` (other)
- `biz_invite_link_id` (other)

### get_subscription_history_biz_groups_subscription_history_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `is_active` (other)
- `price_type` (array)

### get_groups_by_business_app_old_businesses_business_id_groups_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `search` (other)
- `is_member` (other)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_featured_treets` (boolean)

### get_groups_by_business_app_businesses_business_id_groups_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `search` (other)
- `is_member` (other)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_featured_treets` (boolean)

### get_available_biz_groups_old_feed_biz_groups_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `search` (other)
- `is_member` (other)
- `is_member_first` (other)
- `category_id` (array)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_origin_business` (boolean)
- `embed_total_members` (boolean)
- `embed_subscription_data` (boolean)
- `embed_featured_treets` (boolean)

### get_available_biz_groups_feed_biz_groups_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `search` (other)
- `is_member` (other)
- `is_member_first` (other)
- `category_id` (array)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_origin_business` (boolean)
- `embed_total_members` (boolean)
- `embed_subscription_data` (boolean)
- `embed_featured_treets` (boolean)

### create_biz_invite_link_biz_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `use_limit` (other)
- `expires_at` (other)
- `tag` (other)

### create_biz_invite_link_biz_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `use_limit` (other)
- `expires_at` (other)
- `tag` (other)

### get_biz_invite_link_old_biz_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `link` (string)
- `embed_groups` (boolean)
- `embed_total_members` (boolean)
- `embed_total_passes` (boolean)
- `embed_total_posts` (boolean)

### create_biz_invite_link_biz_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `use_limit` (other)
- `expires_at` (other)
- `tag` (other)

### get_biz_invite_link_biz_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `link` (string)
- `embed_groups` (boolean)
- `embed_total_members` (boolean)
- `embed_total_passes` (boolean)
- `embed_total_posts` (boolean)

### refresh_invite_link_biz_invite_links_business_id_primary_invite_

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_biz_invite_links_businesses_business_id_biz_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `is_primary_link` (other)

### create_biz_invite_biz_invites_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `phone` (other)
- `user_id` (other)

### get_received_biz_invites_old_biz_invites_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_business` (boolean)

### create_biz_invite_biz_invites_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `phone` (other)
- `user_id` (other)

### get_received_biz_invites_biz_invites_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_business` (boolean)

### delete_biz_invite_biz_invites_biz_invite_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)

### delete_biz_invite_biz_invites_biz_invite_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)

### get_invite_with_embedded_profile_by_id_old_biz_invites_biz_invit

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)
- `embed_groups` (boolean)
- `embed_total_members` (boolean)
- `embed_total_passes` (boolean)
- `embed_total_posts` (boolean)

### delete_biz_invite_biz_invites_biz_invite_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)

### get_invite_with_embedded_profile_by_id_biz_invites_biz_invite_id

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)
- `embed_groups` (boolean)
- `embed_total_members` (boolean)
- `embed_total_passes` (boolean)
- `embed_total_posts` (boolean)

### get_domains_of_business_businesses_business_id_domains_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_your_most_recent_used_email_for_business_businesses_business

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### re_verify_domain_businesses_business_id_re_verify_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `email` (string)

### create_report_reports_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (other)
- `object_id` (string)
- `object_type` (string)
- `message` (other)
- `reasons` (array)

### create_contract_agreement_contract_agreements_post

**Environment variables**

- `API_KEY`

**Input schema**

- `obj_id` (string)
- `obj_type` (string)
- `contract_type` (string)

### get_available_biz_categories_biz_categories_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `name` (other)

### get_pack_payment_history_pack_payments_history_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `embed_pack_subscription` (boolean)

### get_oauth_url_oauth_get_url_get

**Environment variables**

- `API_KEY`

**Input schema**

- `integration` (string)
- `redirect_url` (other)
- `community_id` (other)

### disconnect_oauth_connection_oauth_user_external_ids_user_externa

**Environment variables**

- `API_KEY`

**Input schema**

- `user_external_id_id` (string)

### get_connected_oauth_connections_oauth_user_external_ids_me_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### get_openapi_cmccooxr_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_w8tioqpk_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_mwqev730_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_1s_zhr8_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_khukg2r_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_rf23qbri_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_dtt5mdcw_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_tv2kpt7_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_status_by_phones_v1_1_users_me_status_by_phones_get

**Environment variables**

- `API_KEY`

**Input schema**

- `phone` (array)

### update_device_devices_me_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `push_token` (other)
- `voip_token` (other)

### get_activities_v1_1_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_activities_v1_2_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_activities_v1_3_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_activities_v1_4_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_activities_v1_5_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_activities_v1_6_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_activities_me_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### get_bulk_task_results_businesses_business_id_bulk_task_results_g

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `offset` (integer)
- `limit` (integer)
- `external_client_id` (other)
- `task_type` (other)
- `start_date` (other)
- `end_date` (other)

### login_biz_user_auth_login_biz_user_post

**Environment variables**

No environment variables required

**Input schema**

- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `email` (string)
- `password` (string)
- `X-Firebase-AppCheck` (other)
- `X-Recaptcha-Token` (string)

### login_google_biz_auth_login_google_post

**Environment variables**

No environment variables required

**Input schema**

- `code` (string)

### register_biz_user_auth_register_biz_user_post

**Environment variables**

No environment variables required

**Input schema**

- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `email` (string)
- `phone` (other)
- `settings` (other)
- `password` (string)
- `name` (other)
- `X-Firebase-AppCheck` (other)
- `X-Recaptcha-Token` (string)

### verify_email_auth_verify_email_post

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)

### send_verify_email_auth_send_verify_email_post

**Environment variables**

- `API_KEY`

**Input schema**

- `query` (other)

### get_biz_me_auth_me_get

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### refresh_biz_tokens_auth_refresh_biz_post

**Environment variables**

No environment variables required

**Input schema**

- `dev_access_expiry_minutes` (other)
- `dev_refresh_expiry_minutes` (other)
- `refresh_token` (string)

### forgot_password_auth_forgot_password_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `X-Firebase-AppCheck` (other)
- `X-Recaptcha-Token` (string)

### reset_password_auth_reset_password_post

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)
- `new_password` (string)

### verify_email_dev_auth_verify_email_dev_post

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### update_current_business_user_biz_users_me_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (other)
- `phone` (other)
- `settings` (other)
- `avatar_image_id` (other)

### get_biz_users_me_biz_users_me_get

**Environment variables**

- `API_KEY`

**Input schema**

- `embed_agrees_to_hub_tos` (boolean)

### delete_current_business_user_biz_users_me_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### stripe_webhook_stripe_webhook_connect_post

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `object` (string)
- `account` (other)
- `created` (integer)
- `data` (object)
- `livemode` (boolean)
- `type` (string)
- `Stripe-Signature` (string)

### stripe_webhook_stripe_webhook_post

**Environment variables**

No environment variables required

**Input schema**

- `id` (string)
- `object` (string)
- `account` (other)
- `created` (integer)
- `data` (object)
- `livemode` (boolean)
- `type` (string)
- `Stripe-Signature` (string)

### create_checkout_session_custom_tier_stripe_checkout_custom_post

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)

### validate_price_custom_tier_stripe_prices_validate_custom_post

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)

### create_subscription_custom_tier_stripe_subscriptions_custom_post

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)
- `email` (string)
- `name` (string)
- `phone` (other)
- `address` (object)

### get_biz_email_settings_businesses_business_id_email_settings_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### patch_biz_email_settings_businesses_business_id_email_settings_p

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `email_settings` (array)

### get_email_settings_by_unsubscribe_token_businesses_business_id_e

**Environment variables**

No environment variables required

**Input schema**

- `business_id` (string)
- `token` (string)

### update_email_settings_by_unsubscribe_token_businesses_business_i

**Environment variables**

No environment variables required

**Input schema**

- `business_id` (string)
- `token` (string)
- `email_settings` (array)

### send_contact_email_contact_post

**Environment variables**

No environment variables required

**Input schema**

- `hub_type` (other)

### search_categories_biz_categories_get

**Environment variables**

No environment variables required

**Input schema**

- `limit` (integer)
- `token` (other)
- `name` (other)

### create_comment_as_business_businesses_business_id_comments_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `content` (string)
- `thread_id` (string)

### get_comments_by_thread_id_biz_businesses_business_id_threads_thr

**Environment variables**

- `API_KEY`

**Input schema**

- `thread_id` (string)
- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_author` (boolean)

### create_thread_as_business_businesses_business_id_threads_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `post_id` (string)
- `comment` (other)

### get_threads_made_on_biz_post_businesses_business_id_posts_post_i

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_recent_comment` (boolean)
- `embed_initial_comment` (boolean)
- `embed_number_of_comments` (boolean)
- `embed_author` (boolean)
- `id` (other)

### add_planday_to_org_oauth_planday_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `secret` (string)

### disconnect_planday_oauth_oauth_planday_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### get_org_integrations_orgs_org_id_integrations_get

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `limit` (integer)
- `token` (other)

### remove_app_user_link_biz_users_me_app_user_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### set_app_user_id_biz_users_me_app_user_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `username` (string)
- `phone` (string)

### create_business_member_business_members_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `emails` (array)
- `role` (string)

### patch_business_member_businesses_business_id_invite_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `invite_status` (string)

### get_business_member_me_businesses_business_id_members_me_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### patch_business_member_businesses_business_id_members_user_id_pat

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `role` (other)

### delete_business_member_businesses_business_id_members_user_id_de

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `user_id` (string)

### get_members_of_business_businesses_business_id_members_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_biz_user` (boolean)
- `role` (other)
- `search` (other)

### get_owned_organizations_orgs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `embed_businesses` (boolean)
- `embed_ambassador_data` (boolean)
- `embed_hub_data` (boolean)

### create_org_orgs_post

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### update_org_dev_orgs_org_id_dev_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `stripe_customer_id` (other)
- `num_ambassadors` (other)
- `org_tier` (other)

### validate_price_orgs_org_id_stripe_prices_validate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `tier` (string)
- `promo_code` (other)

### create_subscription_orgs_org_id_stripe_subscriptions_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `tier` (string)
- `promo_code` (other)
- `customer` (object)

### update_subscription_orgs_org_id_stripe_subscriptions_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `update_to_latest_payment_method` (boolean)
- `new_tier` (other)

### cancel_subscription_orgs_org_id_stripe_subscriptions_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### get_preview_of_cancel_subscription_orgs_org_id_stripe_subscripti

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### preview_invoice_orgs_org_id_stripe_subscriptions_preview_invoice

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `new_tier` (string)

### create_setup_intent_orgs_org_id_stripe_setup_intents_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### create_checkout_session_orgs_org_id_stripe_checkout_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `tier` (string)
- `promo_code` (other)

### create_portal_session_orgs_org_id_stripe_customer_portals_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### create_stripe_connected_account_link_orgs_org_id_stripe_connecte

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### get_stripe_connected_account_dashboard_link_orgs_org_id_stripe_c

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### get_invoices_from_org_orgs_org_id_stripe_invoices_get

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `status` (other)
- `limit` (integer)
- `token` (other)

### get_upcoming_invoice_data_orgs_org_id_stripe_invoices_upcoming_g

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)

### get_payment_methods_from_org_orgs_org_id_stripe_payment_methods_

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `limit` (integer)
- `token` (other)

### create_business_businesses_post

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (other)
- `web_domain` (string)
- `can_app_members_invite` (boolean)
- `can_app_members_accept_applications` (boolean)
- `access_type` (string)
- `hub_type` (string)
- `location_type` (string)
- `location_data` (other)
- `join_type` (string)
- `require_member_verification` (boolean)
- `business_profile` (other)
- `categories` (other)
- `locations` (other)
- `apply_domains` (other)
- `enable_feed` (boolean)
- `enable_app_user_post` (boolean)
- `enable_members` (boolean)
- `enable_aspects` (boolean)
- `default_currency` (string)

### check_if_web_domain_is_taken_businesses_check_web_domain_get

**Environment variables**

- `API_KEY`

**Input schema**

- `web_domain` (string)
- `suggestions_num` (integer)

### get_business_by_invite_code_businesses_by_ref_code_ref_code_get

**Environment variables**

- `API_KEY`

**Input schema**

- `ref_code` (string)

### patch_business_businesses_business_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `name` (other)
- `invited_by_ref_code` (other)
- `onboarding_data` (other)
- `location_type` (other)
- `location_data` (other)
- `access_type` (other)
- `can_app_members_invite` (other)
- `can_app_members_accept_applications` (other)
- `hub_type` (other)
- `categories` (other)
- `location_update_data` (other)
- `join_type` (other)
- `require_member_verification` (other)
- `enable_feed` (other)
- `enable_app_user_post` (other)
- `enable_members` (other)
- `enable_aspects` (other)
- `enable_app_leaderboard` (other)
- `default_currency` (other)

### delete_business_businesses_business_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### update_invite_code_businesses_business_id_ref_code_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### send_invite_code_businesses_business_id_send_invite_code_email_p

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `email` (string)
- `message` (string)

### transfer_owner_businesses_business_id_transfer_owner_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_relation_id` (other)
- `biz_user_email` (other)
- `message` (other)

### handle_transfer_owner_businesses_business_id_handle_transfer_pos

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_ownership_transfer_id` (string)
- `accept` (boolean)
- `org_id` (other)

### upgrade_business_businesses_business_id_upgrade_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `upgrade_token` (string)
- `new_web_domain` (other)

### disable_business_businesses_business_id_disable_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### enable_business_businesses_business_id_enable_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_businesses_you_are_member_of_me_businesses_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `embed_business_profile` (boolean)
- `embed_business_member` (boolean)
- `embed_total_app_members` (boolean)
- `embed_preview_members` (boolean)
- `embed_has_unread` (boolean)
- `embed_categories` (boolean)
- `embed_locations` (boolean)
- `embed_apply_domains` (boolean)
- `embed_org` (boolean)
- `embed_ambassador_data` (boolean)
- `embed_has_ambassador_pack` (boolean)
- `role` (other)
- `id` (other)
- `invite_status` (other)
- `hub_type` (other)
- `is_active` (other)
- `search` (other)
- `category_id` (array)

### get_business_ids_where_you_are_member_me_business_ids_get

**Environment variables**

- `API_KEY`

**Input schema**

- `role` (other)
- `partner_id` (other)

### ban_user_from_business_biz_banned_users_post

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `reason` (other)

### unban_user_from_business_biz_banned_users_biz_banned_user_id_del

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_banned_user_id` (string)

### get_biz_banned_users_businesses_business_id_biz_banned_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)

### get_business_stats_businesses_business_id_analytics_stats_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `embed_member_count` (boolean)
- `embed_team_count` (boolean)
- `embed_partner_count` (boolean)

### get_member_activity_businesses_business_id_analytics_member_acti

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `start` (other)
- `stop` (other)
- `bins` (string)
- `tz` (string)
- `include_biz_made` (boolean)
- `embed_post_activity` (boolean)
- `embed_comment_activity` (boolean)

### patch_profile_by_business_businesses_business_id_profile_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `website_url` (other)
- `phone` (other)
- `video_url` (other)
- `email` (other)
- `title` (other)
- `logo_image_id` (other)
- `cover_image_id` (other)
- `description` (other)
- `address` (other)

### get_profile_by_business_businesses_business_id_profile_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### remove_user_from_business_businesses_business_id_users_user_id_d

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)

### update_biz_relation_of_user_businesses_business_id_users_user_id

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `role` (string)

### get_app_members_by_business_businesses_business_id_users_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `embed_group_members` (boolean)
- `embed_redeems` (boolean)
- `embed_shares` (boolean)
- `limit` (integer)
- `offset` (integer)
- `group_id` (other)
- `search` (other)

### get_aspects_of_biz_relation_businesses_business_id_users_user_id

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)

### update_note_of_user_businesses_business_id_users_user_id_note_pu

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `note` (other)

### accept_biz_application_biz_applications_biz_application_id_accep

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_application_id` (string)

### delete_biz_application_biz_applications_biz_application_id_delet

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_application_id` (string)

### get_biz_applications_businesses_business_id_biz_applications_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_user` (boolean)
- `embed_aspects` (boolean)
- `search` (other)

### create_timeout_for_user_businesses_business_id_users_user_id_tim

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `timeout_duration_minutes` (other)
- `reason` (other)

### delete_timeout_businesses_business_id_users_user_id_timeout_dele

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `business_id` (string)

### get_timeouts_businesses_business_id_timeouts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_biz_relation` (boolean)

### create_verification_application_verification_applications_post

**Environment variables**

- `API_KEY`

**Input schema**

- `message` (string)
- `business_id` (other)

### get_biz_ownership_transfer_biz_ownership_transfers_biz_ownership

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_ownership_transfer_id` (string)

### get_packs_insights_businesses_business_id_insights_packs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `start_date` (string)
- `end_date` (string)
- `id` (other)

### get_integrations_by_hub_businesses_business_id_integrations_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `integration_type` (other)
- `integration_id` (other)
- `id` (other)

### add_gallery_to_biz_profile_biz_profile_gallery_post

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_profile_id` (string)
- `gallery_ids` (array)

### remove_gallery_item_from_biz_profile_biz_profile_gallery_media_i

**Environment variables**

- `API_KEY`

**Input schema**

- `media_id` (string)

### get_biz_activities_businesses_business_id_biz_activities_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `activity_type` (other)
- `id` (other)

### update_activity_is_read_businesses_business_id_biz_activities_ac

**Environment variables**

- `API_KEY`

**Input schema**

- `activity_id` (string)
- `business_id` (string)
- `is_read` (boolean)

### delete_activity_recipient_businesses_business_id_biz_activities_

**Environment variables**

- `API_KEY`

**Input schema**

- `activity_id` (string)
- `business_id` (string)

### get_biz_activities_has_new_businesses_business_id_biz_activities

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_biz_group_biz_groups_biz_group_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)

### delete_biz_group_biz_groups_biz_group_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)

### update_biz_group_biz_groups_biz_group_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)
- `base` (other)
- `draft_only` (other)

### create_biz_group_biz_groups_post

**Environment variables**

- `API_KEY`

**Input schema**

- `cover_image_id` (other)
- `vertical_cover_image_id` (other)
- `banner_image_id` (other)
- `gradient_color_start` (other)
- `gradient_color_end` (other)
- `pattern_id` (other)
- `price_type` (string)
- `paid_by` (string)
- `price` (integer)
- `interval` (other)
- `interval_count` (other)
- `one_time_duration_minutes` (other)
- `business_id` (string)
- `avatar_image_id` (other)
- `title` (string)
- `show_title` (boolean)
- `description` (other)
- `visibility` (string)
- `access_state` (string)
- `member_limit` (other)
- `treet_ids` (other)
- `is_draft` (boolean)
- `treet_share_access` (string)

### activate_draft_biz_group_biz_groups_biz_group_id_activate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)
- `visibility` (string)

### get_groups_by_business_businesses_business_id_groups_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `price_period_start` (other)
- `price_period_end` (other)
- `category_id` (array)
- `search` (other)
- `include_draft` (boolean)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_member_count` (boolean)
- `embed_active_payment_count` (boolean)
- `embed_revenue` (boolean)
- `embed_featured_treets` (boolean)

### get_groups_for_insider_insider_feed_biz_groups_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `treet_id` (other)
- `treet_access_role` (other)
- `inverse_treet_filter` (boolean)
- `include_draft` (boolean)
- `treet_amount` (other)
- `treet_amount_comparator` (string)
- `hub_id` (other)
- `category_id` (other)
- `title` (other)
- `total_treets_get_expired` (other)
- `total_treets_get_archived` (other)
- `medium_threshold_expires_at` (other)
- `critical_threshold_expires_at` (other)
- `medium_threshold_redeems_left` (other)
- `critical_threshold_redeems_left` (other)
- `treet_share_access` (other)
- `embed_total_treets` (boolean)
- `embed_total_members` (boolean)
- `embed_featured_treets` (boolean)
- `embed_hub` (boolean)

### get_packs_by_org_orgs_org_id_packs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `org_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `pack_type` (other)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_member_count` (boolean)
- `embed_claim_count` (boolean)
- `embed_origin_business` (boolean)

### remove_user_from_group_biz_groups_biz_group_id_members_user_id_d

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)
- `biz_group_id` (string)

### get_biz_group_applications_businesses_business_id_biz_group_appl

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `embed_biz_relation` (boolean)

### reject_biz_group_application_biz_group_applications_biz_group_ap

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_application_id` (string)

### accept_biz_group_application_biz_group_applications_biz_group_ap

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_application_id` (string)

### create_biz_invite_link_biz_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `use_limit` (other)
- `expires_at` (other)
- `tag` (other)

### refresh_invite_link_biz_invite_links_business_id_primary_invite_

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_biz_invite_links_businesses_business_id_biz_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `is_primary_link` (other)

### create_biz_invite_biz_invites_post

**Environment variables**

- `API_KEY`

**Input schema**

- `group_ids` (array)
- `business_id` (string)
- `phone` (other)
- `user_id` (other)

### delete_biz_invite_biz_invites_biz_invite_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)

### add_groups_to_biz_invite_biz_invites_biz_invite_id_groups_post

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_invite_id` (string)
- `group_ids` (array)

### bulk_invite_bulk_invites_post

**Environment variables**

- `API_KEY`

**Input schema**

- `external_client_id` (other)
- `business_id` (string)
- `pack_id` (other)
- `emails` (array)

### create_partnership_biz_partnerships_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_partnership_invite_link_id` (string)
- `group_ids` (other)
- `weekly_distributes` (other)

### batch_create_partnership_biz_partnerships_batch_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `partner_ids` (array)
- `group_ids` (other)
- `weekly_distributes` (other)

### update_partnership_businesses_business_id_biz_partnerships_biz_p

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_partnership_id` (string)
- `weekly_distributes` (other)
- `contact_id` (other)
- `show_as_partner` (other)

### delete_partnership_businesses_business_id_biz_partnerships_biz_p

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `biz_partnership_id` (string)

### get_biz_group_ids_by_biz_partnership_businesses_business_id_biz_

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_partnership_id` (string)
- `business_id` (string)

### get_biz_groups_by_biz_partnership_businesses_business_id_biz_par

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_partnership_id` (string)
- `business_id` (string)
- `limit` (integer)
- `token` (other)

### update_express_access_businesses_business_id_biz_partnerships_bi

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_partnership_id` (string)
- `business_id` (string)
- `biz_groups` (array)

### get_partners_businesses_business_id_partners_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)
- `partnership_id` (other)
- `partner_id` (other)
- `search` (other)
- `embed_logo_image` (boolean)
- `embed_cover_image` (boolean)
- `embed_contacts` (boolean)
- `embed_member_count` (boolean)
- `embed_shared_treets_count` (boolean)
- `embed_active_users` (boolean)
- `embed_lifetime_redeems` (boolean)
- `embed_weekly_distributes_made` (boolean)

### get_partner_ids_businesses_business_id_partners_ids_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)

### get_biz_partnership_ids_by_biz_group_biz_groups_biz_group_id_biz

**Environment variables**

- `API_KEY`

**Input schema**

- `biz_group_id` (string)

### create_partnership_invite_link_businesses_business_id_partnershi

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `group_ids` (other)
- `weekly_distributes` (other)
- `expires_at` (other)
- `email` (other)
- `message` (other)

### get_partnership_invite_link_biz_partnership_invite_links_get

**Environment variables**

- `API_KEY`

**Input schema**

- `shorturl` (string)
- `embed_groups` (boolean)

### create_post_as_business_businesses_business_id_posts_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `content` (other)
- `gallery_ids` (other)
- `created_at` (other)

### get_posts_made_to_business_businesses_business_id_posts_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (other)
- `id` (other)
- `author_id` (other)
- `get_scheduled` (boolean)
- `embed_post_author` (boolean)
- `embed_post_gallery` (boolean)
- `embed_comment_info` (boolean)
- `embed_biz_relation` (boolean)

### delete_post_in_business_businesses_business_id_posts_post_id_del

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `business_id` (string)

### update_post_in_business_businesses_business_id_posts_post_id_pat

**Environment variables**

- `API_KEY`

**Input schema**

- `post_id` (string)
- `business_id` (string)
- `content` (other)

### get_report_reports_report_id_get

**Environment variables**

- `API_KEY`

**Input schema**

- `report_id` (string)
- `embed_object` (boolean)

### delete_report_reports_report_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `report_id` (string)

### get_reports_businesses_business_id_reports_get

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `limit` (integer)
- `token` (other)

### create_contract_agreement_contract_agreements_post

**Environment variables**

- `API_KEY`

**Input schema**

- `obj_id` (string)
- `obj_type` (string)
- `contract_type` (string)

### update_domains_of_business_businesses_business_id_domains_post

**Environment variables**

- `API_KEY`

**Input schema**

- `business_id` (string)
- `ids_to_remove` (other)
- `new_domains` (other)

### get_openapi_bppuycgq_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_treet_feed_old_app_treets_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_cover_image` (boolean)
- `embed_gallery` (boolean)
- `embed_schedule_data` (boolean)
- `embed_cooldown_data` (boolean)
- `embed_time_frame_data` (boolean)
- `embed_locations` (boolean)
- `embed_shared_by_ids` (boolean)
- `embed_reservation_data` (boolean)
- `id` (other)
- `hub_id` (other)
- `pack_id` (other)
- `is_shared` (other)
- `is_shared_by_current_user` (other)
- `share_limit_hit` (other)
- `can_user_share` (other)
- `is_hidden` (boolean)
- `is_saved` (other)
- `search` (other)
- `redeem_limit_hit` (other)
- `is_upcoming` (other)
- `category_id` (other)

### get_treet_feed_app_treets_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_cover_image` (boolean)
- `embed_gallery` (boolean)
- `embed_schedule_data` (boolean)
- `embed_cooldown_data` (boolean)
- `embed_time_frame_data` (boolean)
- `embed_locations` (boolean)
- `embed_shared_by_ids` (boolean)
- `embed_reservation_data` (boolean)
- `id` (other)
- `hub_id` (other)
- `pack_id` (other)
- `is_shared` (other)
- `is_shared_by_current_user` (other)
- `share_limit_hit` (other)
- `can_user_share` (other)
- `is_hidden` (boolean)
- `is_saved` (other)
- `search` (other)
- `redeem_limit_hit` (other)
- `is_upcoming` (other)
- `category_id` (other)

### get_treet_shared_by_treets_treet_id_shared_by_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `limit` (integer)
- `token` (string)

### get_treet_shared_with_treets_treet_id_shared_with_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `limit` (integer)
- `token` (string)

### get_shared_treet_ids_users_user_id_shared_treet_ids_get

**Environment variables**

- `API_KEY`

**Input schema**

- `user_id` (string)

### get_treet_shared_with_ids_treets_treet_id_shared_with_ids_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### get_treets_by_pack_old_packs_pack_id_treets_get

**Environment variables**

- `API_KEY`

**Input schema**

- `pack_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_cover_image` (boolean)
- `embed_gallery` (boolean)
- `embed_schedule_data` (boolean)
- `embed_cooldown_data` (boolean)
- `embed_time_frame_data` (boolean)
- `embed_locations` (boolean)
- `embed_shared_by_ids` (boolean)
- `embed_reservation_data` (boolean)
- `id` (other)
- `redeem_limit_hit` (other)
- `is_upcoming` (other)
- `category_id` (other)

### get_treets_by_pack_packs_pack_id_treets_get

**Environment variables**

- `API_KEY`

**Input schema**

- `pack_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_cover_image` (boolean)
- `embed_gallery` (boolean)
- `embed_schedule_data` (boolean)
- `embed_cooldown_data` (boolean)
- `embed_time_frame_data` (boolean)
- `embed_locations` (boolean)
- `embed_shared_by_ids` (boolean)
- `embed_reservation_data` (boolean)
- `id` (other)
- `redeem_limit_hit` (other)
- `is_upcoming` (other)
- `category_id` (other)

### get_partnered_by_old_treets_treet_id_partnered_by_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `limit` (integer)
- `token` (string)

### get_partnered_by_treets_treet_id_partnered_by_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `limit` (integer)
- `token` (string)

### reserve_treet_treets_treet_id_reserve_post

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `expiry_time_minutes` (integer)
- `send_notifications` (boolean)
- `error_on_existing_reservation` (boolean)
- `save_treet` (boolean)

### cancel_treet_reservation_treets_treet_id_reserve_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### reserve_treet_web_web_treets_treet_id_reserve_post

**Environment variables**

- `X_SIMPLE_TOKEN`

**Input schema**

- `treet_id` (string)
- `invite_link_id` (string)

### change_treet_preference_treets_treet_id_preference_put

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `state` (string)

### remove_treet_preference_treets_treet_id_preference_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### get_current_user_redeems_old_app_redeems_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_treet_code` (boolean)
- `embed_cover_image` (boolean)
- `embed_schedule_data` (boolean)
- `embed_cooldown_data` (boolean)
- `embed_time_frame_data` (boolean)
- `embed_locations` (boolean)
- `embed_booking_data` (boolean)
- `id` (other)
- `treet_id` (other)
- `hub_id` (other)
- `category_id` (other)
- `search` (other)
- `pack_id` (other)

### get_current_user_redeems_app_redeems_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_treet_code` (boolean)
- `embed_cover_image` (boolean)
- `embed_schedule_data` (boolean)
- `embed_cooldown_data` (boolean)
- `embed_time_frame_data` (boolean)
- `embed_locations` (boolean)
- `embed_booking_data` (boolean)
- `id` (other)
- `treet_id` (other)
- `hub_id` (other)
- `category_id` (other)
- `search` (other)
- `pack_id` (other)

### create_redeem_redeems_post

**Environment variables**

- `API_KEY`

**Input schema**

- `booking_event_id` (other)
- `booking_name` (other)
- `treet_id` (string)

### verify_redeem_redeems_redeem_id_verify_post

**Environment variables**

- `API_KEY`

**Input schema**

- `redeem_id` (string)

### create_web_redeem_web_redeems_post

**Environment variables**

- `X_SIMPLE_TOKEN`

**Input schema**

- `booking_event_id` (other)
- `booking_name` (other)
- `invite_link_id` (string)
- `reservation_id` (other)

### share_treet_batch_shares_post

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_ids` (array)
- `user_ids` (array)

### get_treet_from_invite_link_old_invite_links_invite_link_id_treet

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_id` (string)
- `embed_cover_image` (boolean)
- `embed_hub` (boolean)
- `error_if_expired` (boolean)

### get_treet_from_invite_link_invite_links_invite_link_id_treet_get

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_id` (string)
- `embed_cover_image` (boolean)
- `embed_hub` (boolean)
- `error_if_expired` (boolean)

### get_invite_from_link_invite_links_salt_get

**Environment variables**

- `API_KEY`

**Input schema**

- `salt` (string)
- `error_if_expired` (boolean)

### get_treet_from_invite_link_web_web_invite_links_invite_link_id_t

**Environment variables**

- `X_SIMPLE_TOKEN`

**Input schema**

- `invite_link_id` (string)
- `embed_cover_image` (boolean)
- `embed_hub` (boolean)
- `error_if_expired` (boolean)

### get_invite_from_link_web_web_invite_links_salt_get

**Environment variables**

- `X_SIMPLE_TOKEN`

**Input schema**

- `salt` (string)
- `error_if_expired` (boolean)

### create_invite_link_invite_links_post

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `expires_at` (other)
- `limit` (other)

### accept_treet_from_invite_link_invite_links_invite_link_id_treet_

**Environment variables**

- `API_KEY`

**Input schema**

- `invite_link_id` (string)

### accept_treet_from_invite_link_web_web_invite_links_invite_link_i

**Environment variables**

- `X_SIMPLE_TOKEN`

**Input schema**

- `invite_link_id` (string)

### get_available_treet_categories_treet_categories_get

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `token` (string)
- `name` (other)

### get_packs_for_feed_old_feed_packs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `id` (other)
- `title` (other)
- `is_member` (other)
- `is_member_first` (other)
- `category_id` (array)
- `embed_total_members` (boolean)
- `embed_subscription_data` (boolean)
- `embed_featured_treets` (boolean)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)

### get_packs_for_feed_feed_packs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `id` (other)
- `title` (other)
- `is_member` (other)
- `is_member_first` (other)
- `category_id` (array)
- `embed_total_members` (boolean)
- `embed_subscription_data` (boolean)
- `embed_featured_treets` (boolean)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)

### get_ambassador_app_leaderboard_app_hubs_hub_id_leaderboard_get

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `start_date` (string)
- `end_date` (string)
- `user_id` (other)

### create_treet_treets_post

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `valid_from` (string)
- `expires_at` (other)
- `hidden_until` (other)
- `treet_version` (object)
- `total_redeem_limit` (other)
- `user_redeem_limit` (other)
- `share_redeem_limit` (other)
- `show_redeems_left` (boolean)
- `is_sharable` (boolean)
- `total_share_limit` (other)
- `user_share_limit` (other)
- `branch_limit` (integer)
- `redeem_validation_type` (string)
- `schedule_id` (other)
- `cooldown` (other)
- `allow_reservations` (boolean)
- `gallery_ids` (other)
- `category_ids` (other)
- `codes` (other)
- `locations` (other)

### update_treet_treets_treet_id_patch

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `treet` (other)
- `treet_version` (other)
- `gallery_ids` (other)
- `locations` (other)
- `category_ids` (other)

### delete_treet_treets_treet_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### duplicate_treet_treets_treet_id_duplicate_post

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `transfer_codes` (boolean)

### get_treet_hub_hub_treets_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `embed_hub` (boolean)
- `embed_cover_image` (boolean)
- `embed_gallery` (boolean)
- `embed_packs` (boolean)
- `embed_schedule_data` (boolean)
- `embed_locations` (boolean)
- `embed_categories` (boolean)
- `embed_time_frame_data` (boolean)
- `id` (other)
- `hub_id` (other)
- `owner_id` (other)
- `partner_id` (other)
- `pack_id` (other)
- `inverse_pack_filter` (boolean)
- `category_id` (other)
- `is_expired` (other)
- `state` (other)
- `access_state` (other)
- `search` (other)
- `medium_threshold_expires_at` (other)
- `critical_threshold_expires_at` (other)
- `medium_threshold_redeems_left` (other)
- `critical_threshold_redeems_left` (other)
- `hub_member_treet_role` (other)
- `redeem_limit_hit` (other)
- `highlight_featured_treets` (boolean)

### create_schedule_schedules_post

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `name` (other)
- `enforce_interval` (boolean)
- `tz` (string)
- `intervals` (array)

### delete_schedule_schedules_schedule_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `schedule_id` (string)

### create_time_frame_treets_treet_id_time_frames_post

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)
- `interval_type` (string)
- `limit` (integer)
- `tz` (string)

### delete_time_frame_time_frames_time_frame_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `time_frame_id` (string)

### upload_treet_codes_treets_treet_id_codes_post

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### delete_treet_codes_treets_treet_id_codes_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### get_treet_code_data_treets_treet_id_code_data_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### add_treets_to_packs_batch_hub_hub_id_pack_treets_post

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `treet_ids` (array)
- `pack_ids` (array)

### remove_treet_from_pack_packs_pack_id_treets_treet_id_delete

**Environment variables**

- `API_KEY`

**Input schema**

- `pack_id` (string)
- `treet_id` (string)

### get_ids_of_packs_where_treet_is_distributed_treets_treet_id_expr

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### set_treets_as_featured_packs_pack_id_treets_featured_put

**Environment variables**

- `API_KEY`

**Input schema**

- `pack_id` (string)
- `treet_ids` (array)

### get_packs_by_hub_hubs_hub_id_packs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `id` (other)
- `price_period_start` (other)
- `price_period_end` (other)
- `category_id` (array)
- `search` (other)
- `include_draft` (boolean)
- `embed_treet_count` (boolean)
- `embed_treet_owner_avatars` (boolean)
- `embed_member_count` (boolean)
- `embed_active_payment_count` (boolean)
- `embed_revenue` (boolean)
- `embed_featured_treets` (boolean)

### get_insider_packs_insider_packs_get

**Environment variables**

- `API_KEY`

**Input schema**

- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `id` (other)
- `treet_id` (other)
- `treet_access_role` (other)
- `inverse_treet_filter` (boolean)
- `include_draft` (boolean)
- `treet_amount` (other)
- `treet_amount_comparator` (string)
- `hub_id` (other)
- `category_id` (other)
- `title` (other)
- `total_treets_get_expired` (other)
- `total_treets_get_archived` (other)
- `medium_threshold_expires_at` (other)
- `critical_threshold_expires_at` (other)
- `medium_threshold_redeems_left` (other)
- `critical_threshold_redeems_left` (other)
- `treet_share_access` (other)
- `embed_total_treets` (boolean)
- `embed_total_members` (boolean)
- `embed_featured_treets` (boolean)
- `embed_hub` (boolean)

### share_treets_with_partner_partners_treets_post

**Environment variables**

- `API_KEY`

**Input schema**

- `partner_id` (string)
- `hub_id` (string)
- `treet_ids` (array)

### remove_treet_from_partner_partners_partner_id_treets_treet_id_de

**Environment variables**

- `API_KEY`

**Input schema**

- `partner_id` (string)
- `treet_id` (string)

### get_partner_ids_with_treet_treets_treet_id_partner_ids_get

**Environment variables**

- `API_KEY`

**Input schema**

- `treet_id` (string)

### get_treet_ids_with_partner_hubs_hub_id_partners_partner_id_treet

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `partner_id` (string)

### get_redeem_analytics_analytics_redeems_get

**Environment variables**

- `API_KEY`

**Input schema**

- `bins` (string)
- `tz` (string)
- `start` (string)
- `stop` (string)
- `treet_id` (other)
- `hub_id` (string)

### get_share_analytics_analytics_shares_get

**Environment variables**

- `API_KEY`

**Input schema**

- `bins` (string)
- `tz` (string)
- `start` (string)
- `stop` (string)
- `treet_id` (other)
- `hub_id` (string)

### get_reach_analytics_analytics_reach_get

**Environment variables**

- `API_KEY`

**Input schema**

- `bins` (string)
- `tz` (string)
- `start` (string)
- `stop` (string)
- `treet_id` (other)
- `hub_id` (string)

### hub_statistics_analytics_hubs_stats_get

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (array)
- `embed_total_treets` (boolean)
- `redeem_limit_hit` (other)
- `start_date` (string)
- `end_date` (string)
- `embed_claim_count` (boolean)

### get_checkout_revenue_analytics_analytics_checkout_revenue_get

**Environment variables**

- `API_KEY`

**Input schema**

- `bins` (string)
- `tz` (string)
- `start` (string)
- `stop` (string)
- `treet_id` (other)
- `hub_id` (string)
- `pack_id` (other)
- `ambassador_id` (other)

### get_treet_insights_hubs_hub_id_insights_treets_get

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `start_date` (string)
- `end_date` (string)
- `hub_access_state` (other)
- `id` (other)

### get_ambassador_insights_hubs_hub_id_insights_ambassadors_get

**Environment variables**

- `API_KEY`

**Input schema**

- `hub_id` (string)
- `sort_by` (string)
- `limit` (integer)
- `token` (string)
- `start_date` (string)
- `end_date` (string)
- `user_id` (other)
- `embed_booking_data` (boolean)
- `embed_rank` (boolean)

### get_openapi_djgzm3xo_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_openapi_g_bnwhl4_openapi_json_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

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
# No environment variables required for this server
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_example_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_example_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_example_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_example_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_example_com"],
      "env": {}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request


## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_all_templates_api_chila_templates_bot_chila_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### activate_chila_bot_api_chila_activate_post

**Environment variables**

No environment variables required

**Input schema**

- `bot_id` (string)
- `plan` (string)
- `authorization` (string)

### renew_chila_bot_api_chila_renew_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### set_chila_bot_config_api_chila_set_config_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `config` (other)
- `admin_notification` (other)
- `active_notification` (other)
- `authorization` (string)

### get_user_bots_api_chila_my_bots_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_my_bots_health_status_api_chila_my_bots_health_status_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### connect_whatsapp_api_chila_whatsapp_connect_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### get_whatsapp_status_api_chila_whatsapp_status_get

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### disconnect_whatsapp_api_chila_whatsapp_disconnect_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### deactivate_expired_bots_api_chila_deactivate_expired_bots_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### update_chila_renewal_status_api_chila_update_renewal_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `auto_renewal_status` (boolean)
- `authorization` (string)

### get_bot_details_api_chila_urutan_get

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### get_overview_stats_api_chila_overview_stats_chila_id_get

**Environment variables**

No environment variables required

**Input schema**

- `chila_id` (string)
- `authorization` (string)

### get_performance_chart_api_chila_performance_chart_chila_id_get

**Environment variables**

No environment variables required

**Input schema**

- `chila_id` (string)
- `days` (integer)
- `authorization` (string)

### get_chat_history_api_chila_chat_history_chila_id_get

**Environment variables**

No environment variables required

**Input schema**

- `chila_id` (string)
- `page` (integer)
- `limit` (integer)
- `customer_number` (other)
- `authorization` (string)

### export_chat_history_api_chila_chat_history_export_chila_id_get

**Environment variables**

No environment variables required

**Input schema**

- `chila_id` (string)
- `authorization` (string)

### get_leads_api_chila_leads_chila_id_get

**Environment variables**

No environment variables required

**Input schema**

- `chila_id` (string)
- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### export_leads_api_chila_leads_export_chila_id_get

**Environment variables**

No environment variables required

**Input schema**

- `chila_id` (string)
- `authorization` (string)

### create_broadcast_api_prita_broadcast_prita_id_post

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `token` (other)
- `message_content` (string)
- `recipient_type` (string)
- `recipients` (other)
- `attachment_url` (other)
- `recipients_count` (integer)

### create_scheduled_message_api_prita_scheduled_prita_id_post

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `token` (other)
- `message_content` (string)
- `recipient_type` (string)
- `recipients` (other)
- `scheduled_at` (string)
- `attachment_url` (other)
- `recipients_count` (integer)
- `scheduled_name` (string)

### get_broadcast_history_api_prita_broadcast_history_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### get_scheduled_messages_api_prita_scheduled_messages_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### check_rag_status_in_pinecone_api_prita_check_rag_status_prita_id

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### delete_prita_rag_document_api_prita_delete_rag_document_prita_id

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### upload_prita_rag_document_gdrive_api_prita_upload_rag_document_p

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### download_rag_document_api_prita_download_rag_document_prita_id_g

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### activate_prita_bot_api_prita_activate_post

**Environment variables**

No environment variables required

**Input schema**

- `bot_id` (string)
- `plan` (string)
- `authorization` (string)

### renew_prita_bot_api_prita_renew_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### set_prita_bot_config_api_prita_set_config_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `config` (other)
- `admin_notification` (other)
- `active_notification` (other)
- `authorization` (string)

### get_user_bots_api_prita_my_bots_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_my_bots_health_status_api_prita_my_bots_health_status_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### connect_whatsapp_api_prita_whatsapp_connect_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### get_whatsapp_status_api_prita_whatsapp_status_get

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### disconnect_whatsapp_api_prita_whatsapp_disconnect_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### deactivate_expired_bots_api_prita_deactivate_expired_bots_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### update_prita_renewal_status_api_prita_update_renewal_post

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `auto_renewal_status` (boolean)
- `authorization` (string)

### get_bot_details_api_prita_urutan_get

**Environment variables**

No environment variables required

**Input schema**

- `urutan` (string)
- `authorization` (string)

### get_overview_stats_api_prita_overview_stats_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### get_performance_chart_api_prita_performance_chart_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `days` (integer)
- `authorization` (string)

### get_chat_history_api_prita_chat_history_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `page` (integer)
- `limit` (integer)
- `customer_number` (other)
- `authorization` (string)

### export_chat_history_api_prita_chat_history_export_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### get_leads_api_prita_leads_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### export_leads_api_prita_leads_export_prita_id_get

**Environment variables**

No environment variables required

**Input schema**

- `prita_id` (string)
- `authorization` (string)

### get_main_dashboard_bots_api_dashboard_bots_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### get_user_profile_api_account_profile_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### update_user_profile_api_account_profile_put

**Environment variables**

No environment variables required

**Input schema**

- `full_name` (other)
- `email` (other)
- `company` (other)
- `website` (other)
- `phone_number` (other)
- `current_credits` (other)
- `role` (other)
- `authorization` (string)

### update_login_time_api_account_update_login_time_put

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### signup_user_api_auth_signup_post

**Environment variables**

No environment variables required

**Input schema**

- `ref` (other)
- `full_name` (string)
- `email` (string)
- `password` (string)

### login_user_api_auth_login_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `password` (string)

### forgot_password_api_auth_forgot_password_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `redirect_to` (string)

### update_password_api_auth_update_password_post

**Environment variables**

No environment variables required

**Input schema**

- `password` (string)
- `token` (string)
- `refreshToken` (string)

### get_all_bot_templates_api_bots_get_all_templates_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_my_bots_api_my_bots_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_bots_health_status_api_my_bots_health_status_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### check_payment_status_api_billing_check_payment_status_post

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### handle_midtrans_webhook_api_billing_webhook_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_transactions_api_billing_transactions_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_payments_api_billing_payments_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_current_credits_api_billing_credits_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### redeem_coupon_api_billing_redeem_coupon_post

**Environment variables**

No environment variables required

**Input schema**

- `coupon_code` (string)
- `authorization` (string)

### create_topup_transaction_api_billing_create_topup_transaction_po

**Environment variables**

No environment variables required

**Input schema**

- `amount` (number)
- `authorization` (string)

### get_affiliate_summary_api_affiliate_summary_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_referrals_api_affiliate_referrals_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### request_withdrawal_api_affiliate_request_withdrawal_post

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### add_to_balance_api_affiliate_add_to_balance_post

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_withdrawal_history_api_affiliate_withdrawal_history_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_user_notifications_api_notifications_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_unread_notification_count_api_notifications_unread_count_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### mark_notifications_as_read_api_notifications_mark_as_read_post

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### upload_image_api_manajemen_bot_upload_image_post

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### add_template_bot_api_manajemen_bot_add_template_bot_post

**Environment variables**

No environment variables required

**Input schema**

- `bot_name` (string)
- `bot_role` (string)
- `bot_description` (string)
- `image_src` (string)
- `activation_fee` (number)
- `monthly_fee` (number)
- `tersedia` (boolean)
- `bot_type` (string)
- `plan` (string)
- `alur_kerja_1` (other)
- `deskripsi_alur_kerja_1` (other)
- `alur_kerja_2` (other)
- `deskripsi_alur_kerja_2` (other)
- `alur_kerja_3` (other)
- `deskripsi_alur_kerja_3` (other)
- `alur_kerja_4` (other)
- `deskripsi_alur_kerja_4` (other)
- `alur_kerja_5` (other)
- `deskripsi_alur_kerja_5` (other)
- `authorization` (string)

### get_template_bots_api_manajemen_bot_template_bots_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### get_user_bots_api_manajemen_bot_user_bots_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### edit_template_bot_api_manajemen_bot_edit_template_bot_bot_id_put

**Environment variables**

No environment variables required

**Input schema**

- `bot_id` (string)
- `bot_name` (other)
- `bot_role` (other)
- `bot_description` (other)
- `image_src` (other)
- `activation_fee` (other)
- `monthly_fee` (other)
- `tersedia` (other)
- `bot_type` (other)
- `plan` (other)
- `alur_kerja_1` (other)
- `deskripsi_alur_kerja_1` (other)
- `alur_kerja_2` (other)
- `deskripsi_alur_kerja_2` (other)
- `alur_kerja_3` (other)
- `deskripsi_alur_kerja_3` (other)
- `alur_kerja_4` (other)
- `deskripsi_alur_kerja_4` (other)
- `alur_kerja_5` (other)
- `deskripsi_alur_kerja_5` (other)
- `authorization` (string)

### delete_template_bot_api_manajemen_bot_delete_template_bot_bot_id

**Environment variables**

No environment variables required

**Input schema**

- `bot_id` (string)
- `authorization` (string)

### get_all_users_api_manajemen_pengguna_users_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### get_user_detail_api_manajemen_pengguna_users_user_id_get

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (string)
- `authorization` (string)

### update_user_api_manajemen_pengguna_users_user_id_put

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (string)
- `id` (string)
- `full_name` (other)
- `phone_number` (other)
- `preferred_language` (other)
- `last_login_at` (other)
- `role` (other)
- `plan_id` (other)
- `company` (other)
- `website` (other)
- `current_credits` (other)
- `email` (other)
- `referred_by` (other)
- `affiliate_active_until` (other)
- `authorization` (string)

### delete_user_api_manajemen_pengguna_users_user_id_delete

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (string)
- `authorization` (string)

### get_all_payments_api_manajemen_pembayaran_payments_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### get_all_coupons_api_manajemen_kupon_coupons_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### create_coupon_api_manajemen_kupon_coupons_post

**Environment variables**

No environment variables required

**Input schema**

- `credits_amount` (number)
- `is_multi_use` (boolean)
- `campaign_code` (other)
- `quantity` (integer)
- `authorization` (string)

### delete_coupon_api_manajemen_kupon_coupons_coupon_id_delete

**Environment variables**

No environment variables required

**Input schema**

- `coupon_id` (string)
- `authorization` (string)

### get_withdrawal_requests_api_manajemen_penarikan_requests_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### update_withdrawal_status_api_manajemen_penarikan_requests_reques

**Environment variables**

No environment variables required

**Input schema**

- `request_id` (string)
- `status` (string)
- `authorization` (string)

### get_all_transactions_api_manajemen_transaksi_transactions_get

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `limit` (integer)
- `authorization` (string)

### get_dashboard_data_api_admin_dashboard_data_get

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_daily_users_chart_data_api_admin_dashboard_chart_daily_users

**Environment variables**

No environment variables required

**Input schema**

- `days` (integer)
- `authorization` (string)

### get_monthly_revenue_chart_data_api_admin_dashboard_chart_monthly

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### get_top_up_transactions_chart_data_api_admin_dashboard_chart_top

**Environment variables**

No environment variables required

**Input schema**

- `days` (integer)
- `authorization` (string)

### get_coupon_usage_chart_data_api_admin_dashboard_chart_coupon_usa

**Environment variables**

No environment variables required

**Input schema**

- `authorization` (string)

### read_root_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### health_check_health_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

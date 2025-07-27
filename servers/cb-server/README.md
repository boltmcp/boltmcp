# @open-mcp/cb-server

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "cb-server": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/cb-server@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/cb-server@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add cb-server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add cb-server \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add cb-server \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "cb-server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/cb-server"],
      "env": {"USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### remove_an_advance_invoice_schedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_subscription_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_coupons

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### resume_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### cancel_subscription_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### regenerate_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_subscriptions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `customer_id` (object)
- `item_id` (object)
- `item_price_id` (object)
- `status` (object)
- `cancel_reason` (object)
- `cancel_reason_code` (object)
- `remaining_billing_cycles` (object)
- `created_at` (object)
- `activated_at` (object)
- `next_billing_at` (object)
- `cancelled_at` (object)
- `has_scheduled_changes` (object)
- `updated_at` (object)
- `offline_payment_method` (object)
- `auto_close_invoices` (object)
- `override_relationship` (object)
- `sort_by` (object)
- `business_entity_id` (object)
- `channel` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### move_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_subscription_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_advance_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### remove_scheduled_cancellation

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_with_scheduled_changes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### reactivate_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### charge_future_renewals

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_charge_at_term_end

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_scheduled_changes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### change_term_end

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_subscription_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_unbilled_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_scheduled_resumption

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### import_contract_term

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### override_billing_profile

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_scheduled_pause

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### edit_advance_invoice_schedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_discounts_for_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_contract_terms_for_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `limit` (integer)
- `offset` (string)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### pause_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### scheduled_changes_a_subscription_scheduled_change

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_scheduled_changes_a_subscription_scheduled_change

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### link_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delink_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_contacts_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### assign_payment_role

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### move_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### get_hierarchy

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `hierarchy_operation_type` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_payment_method_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_hierarchy_details

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `limit` (integer)
- `offset` (string)
- `hierarchy_operation_type` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### change_billing_date

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_customers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `first_name` (object)
- `last_name` (object)
- `email` (object)
- `company` (object)
- `phone` (object)
- `auto_collection` (object)
- `taxability` (object)
- `created_at` (object)
- `updated_at` (object)
- `offline_payment_method` (object)
- `auto_close_invoices` (object)
- `channel` (object)
- `business_entity_id` (object)
- `sort_by` (object)
- `relationship` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_contacts_to_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_of_contacts_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### clear_personal_data_of_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### merge_customers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### collect_payment_for_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### record_an_excess_payment_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_contacts_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_hierarchy_access_settings_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_billing_info_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_using_vault_temp_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_card_payment_method_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cb-token-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_using_permanent_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_card_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### verify_bank_account_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_payment_sources

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `subscription_id` (string)
- `include_deleted` (boolean)
- `customer_id` (object)
- `type` (object)
- `status` (object)
- `updated_at` (object)
- `created_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### export_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_using_payment_intent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_voucher_payment_method

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_using_gateway_temporary_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_a_card_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### switch_gateway_account

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_using_chargebee_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### local_delete_a_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_bank_account_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_a_bank_account_payment_source

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cust-payment-source-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### local_delete_a_virtual_bank_account

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `virtual-bank-account-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_virtual_bank_account

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `virtual-bank-account-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_virtual_bank_accounts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `customer_id` (object)
- `updated_at` (object)
- `created_at` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_virtual_bank_account

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_virtual_bank_account

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `virtual-bank-account-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_virtual_bank_account_using_permanent_token

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### copy_card

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_card_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### switch_gateway

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_card_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_card_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_promotional_credit

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account-credit-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_promotional_credits

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `created_at` (object)
- `type` (object)
- `customer_id` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### deduct_promotional_credits

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### set_promotional_credits

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_promotional_credits

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_line_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_credit_note_from_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_payment_from_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### stop_dunning_for_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### apply_payments_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### apply_payment_schedule_scheme_to_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### void_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_one_time_charge_to_a_pending_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### send_an_einvoice_for_invoices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_payment_schedules_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### write_off_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_a_charge_item_to_a_pending_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### pause_dunning_for_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_invoices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `subscription_id` (object)
- `customer_id` (object)
- `recurring` (object)
- `status` (object)
- `price_type` (object)
- `date` (object)
- `paid_at` (object)
- `total` (object)
- `amount_paid` (object)
- `amount_adjusted` (object)
- `credits_applied` (object)
- `amount_due` (object)
- `dunning_status` (object)
- `payment_owner` (object)
- `updated_at` (object)
- `channel` (object)
- `voided_at` (object)
- `void_reason_code` (object)
- `sort_by` (object)
- `einvoice` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### close_a_pending_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### apply_credits_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_invoice_for_items_and_one_time_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_invoice_details

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### record_an_invoice_payment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### resume_dunning_for_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### record_tax_withheld_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### resend_failed_einvoice_in_invoices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_tax_withheld_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_payment_reference_numbers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `payment_reference_number` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### collect_payment_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### sync_usages

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### refund_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### record_refund_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_invoice_as_pdf

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### download_e_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### void_a_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### refund_a_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_credit_notes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `customer_id` (object)
- `subscription_id` (object)
- `reference_invoice_id` (object)
- `type` (object)
- `reason_code` (object)
- `create_reason_code` (object)
- `status` (object)
- `date` (object)
- `total` (object)
- `price_type` (object)
- `amount_allocated` (object)
- `amount_refunded` (object)
- `amount_available` (object)
- `voided_at` (object)
- `updated_at` (object)
- `sort_by` (object)
- `channel` (object)
- `einvoice` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### record_refund_for_a_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### download_e_invoice_for_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_credit_note_as_pdf

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### resend_failed_einvoice_in_credit_notes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_tax_withheld_refunds_from_a_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### send_an_einvoice_for_credit_notes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit-note-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_an_unbilled_charge

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `unbilled-charge-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_an_estimate_for_unbilled_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_an_invoice_for_unbilled_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_unbilled_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `is_voided` (boolean)
- `subscription_id` (object)
- `customer_id` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_unbilled_charges_for_item_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_orders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `exclude_deleted_credit_notes` (boolean)
- `id` (object)
- `invoice_id` (object)
- `subscription_id` (object)
- `status` (object)
- `shipping_date` (object)
- `shipped_at` (object)
- `order_type` (object)
- `order_date` (object)
- `paid_on` (object)
- `updated_at` (object)
- `created_at` (object)
- `resent_status` (object)
- `is_resent` (object)
- `original_order_id` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_an_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_an_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### assign_order_number

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### resend_an_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### reopen_a_cancelled_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### cancel_an_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_an_imported_order

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_refundable_credit_note

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_gift_subscription_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### cancel_a_gift

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `gift-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_a_gift

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `gift-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_gifts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `status` (object)
- `gift_receiver` (object)
- `gifter` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_gift

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `gift-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### claim_a_gift

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `gift-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_transactions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `customer_id` (object)
- `subscription_id` (object)
- `payment_source_id` (object)
- `payment_method` (object)
- `gateway` (object)
- `gateway_account_id` (object)
- `id_at_gateway` (object)
- `reference_number` (object)
- `type` (object)
- `date` (object)
- `amount` (object)
- `amount_capturable` (object)
- `status` (object)
- `updated_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### reconcile_transaction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_transaction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### refund_a_payment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### record_an_offline_refund

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### void_an_authorization_transaction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_an_authorization_payment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_payments_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### delete_an_offline_transaction

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### checkout_charge_items_and_one_time_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_payment_method

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### extend_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### notify_an_event

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### checkout_gift_subscription_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_hosted_pages

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `type` (object)
- `state` (object)
- `updated_at` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_hosted_page_to_view_boleto_vouchers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### collect_now

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### accept_a_quote

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_checkout_for_a_new_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### claim_a_gift_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_checkout_to_update_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_pre_cancel_hosted_page

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### acknowledge_a_hosted_page

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `hosted-page-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_direct_debit_agreement_pdf

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_hosted_page

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `hosted-page-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### manage_payment_sources

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### subscription_renewal_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `include_delayed_charges` (boolean)
- `use_existing_balances` (boolean)
- `ignore_scheduled_cancellation` (boolean)
- `ignore_scheduled_changes` (boolean)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### estimate_for_creating_a_customer_and_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### estimates_for_payment_schedules

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### cancel_subscription_for_items_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### resume_subscription_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_invoice_for_items_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### gift_subscription_estimate_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### estimate_for_updating_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### upcoming_invoices_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### regenerate_invoice_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### estimate_for_creating_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### subscription_change_term_end_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### pause_subscription_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### advance_invoice_estimate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_quote_for_a_new_subscription_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_quote

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### edit_create_subscription_quote_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_quote_status

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_quote_for_update_subscription_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_quote_line_groups

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### extend_expiry_date

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### edit_quote_for_charge_items_and_charges

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### edit_update_subscription_quote_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_quotes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `customer_id` (object)
- `subscription_id` (object)
- `status` (object)
- `date` (object)
- `updated_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_quote_as_pdf

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### convert_a_quote

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_quote_for_charge_and_charge_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_quote

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_coupons

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `name` (object)
- `discount_type` (object)
- `duration_type` (object)
- `status` (object)
- `apply_on` (object)
- `created_at` (object)
- `updated_at` (object)
- `sort_by` (object)
- `currency_code` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_coupon_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### unarchive_a_coupon

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_coupon

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### copy_a_coupon

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_coupon

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_coupon_for_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_coupon_sets

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `name` (object)
- `coupon_id` (object)
- `total_count` (object)
- `redeemed_count` (object)
- `archived_count` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_coupon_set

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### update_a_coupon_set

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-set-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_coupon_set

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-set-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### add_coupon_codes_to_coupon_set

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-set-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_unused_coupon_codes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-set-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_coupon_set

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-set-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_coupon_codes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `code` (object)
- `coupon_id` (object)
- `coupon_set_name` (object)
- `status` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_coupon_code

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-code-code` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### archive_a_coupon_code

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon-code-code` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_address

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription_id` (string)
- `label` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_address

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_usages_for_an_invoice_as_pdf

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_usage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_usage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_usage

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_usages

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `subscription_id` (object)
- `usage_date` (object)
- `updated_at` (object)
- `item_price_id` (object)
- `invoice_id` (object)
- `source` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_events

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `webhook_status` (object)
- `event_type` (object)
- `source` (object)
- `occurred_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_event

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `event-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### delete_a_comment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `comment-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_comment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `comment-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_comments

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `entity_type` (string)
- `entity_id` (string)
- `created_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_comment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_portal_session

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### activate_a_portal_session

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `portal-session-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### logout_a_portal_session

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `portal-session-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_portal_session

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `portal-session-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_site_migration_details

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `entity_id_at_other_site` (object)
- `other_site_name` (object)
- `entity_id` (object)
- `entity_type` (object)
- `status` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_latest_migration_details

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `from_site` (string)
- `entity_type` (string)
- `entity_id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_time_machine

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `time-machine-name` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### travel_forward

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `time-machine-name` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### start_afresh

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `time-machine-name` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_customers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_attached_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_transactions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_differential_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_item_families

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_invoices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_export

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `export-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### export_price_variants

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_deferred_revenue_reports

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_revenue_recognition_reports

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_credit_notes

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_coupons

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_orders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_item_prices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### export_subscriptions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_full_export_status

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `table` (string)
- `date` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_payment_intent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment-intent-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_payment_intent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment-intent-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_payment_intent

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_the_meta_data

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `entity_type` (string)
- `api_name` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_custom_field_configs

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `entity_type` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### delete_an_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-family-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_item_families

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `name` (object)
- `updated_at` (object)
- `business_entity_id` (object)
- `include_site_level_resources` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_an_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-family-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-family-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_product

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_product

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_product

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_remove_or_update_options_for_the_product

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_products

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `name` (object)
- `status` (object)
- `shippable` (object)
- `has_variant` (object)
- `created_at` (object)
- `updated_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_product

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_product_variants

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-id` (string)
- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `id` (object)
- `name` (object)
- `sku` (object)
- `status` (object)
- `updated_at` (object)
- `created_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_product_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_product_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-variant-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_product_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-variant-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_product_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product-variant-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `item_family_id` (object)
- `type` (object)
- `name` (object)
- `item_applicability` (object)
- `status` (object)
- `is_giftable` (object)
- `updated_at` (object)
- `enabled_for_checkout` (object)
- `enabled_in_portal` (object)
- `metered` (object)
- `usage_calculation` (object)
- `channel` (object)
- `business_entity_id` (object)
- `include_site_level_resources` (object)
- `sort_by` (object)
- `bundle_configuration` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_an_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_an_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_price_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `price-variant-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_price_variants

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `name` (object)
- `status` (object)
- `updated_at` (object)
- `created_at` (object)
- `business_entity_id` (object)
- `include_site_level_resources` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_price_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_price_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `price-variant-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_price_variant

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `price-variant-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_applicable_items_for_a_plan_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-price-id` (string)
- `limit` (integer)
- `offset` (string)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_an_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_applicable_item_prices_for_a_plan_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-price-id` (string)
- `limit` (integer)
- `offset` (string)
- `item_id` (string)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_item_prices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `id` (object)
- `name` (object)
- `pricing_model` (object)
- `item_id` (object)
- `item_family_id` (object)
- `item_type` (object)
- `currency_code` (object)
- `price_variant_id` (object)
- `trial_period` (object)
- `trial_period_unit` (object)
- `status` (object)
- `updated_at` (object)
- `business_entity_id` (object)
- `include_site_level_resources` (object)
- `period_unit` (object)
- `period` (object)
- `channel` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_an_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_attached_item_

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attached-item-id` (string)
- `parent_item_id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_attached_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attached-item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_attached_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `limit` (integer)
- `offset` (string)
- `id` (object)
- `item_id` (object)
- `type` (object)
- `item_type` (object)
- `charge_on_event` (object)
- `updated_at` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_an_attached_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_an_attached_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attached-item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_differential_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `differential-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_differential_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_differential_prices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `item_price_id` (object)
- `item_id` (object)
- `id` (object)
- `parent_item_id` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_differential_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `differential-price-id` (string)
- `item_price_id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_differential_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `differential-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_rs_data_export_resources

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `resource` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_site_configurations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_features

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `name` (object)
- `id` (object)
- `status` (object)
- `type` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### archive_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### activate_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### reactivate_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### enable_disable_subscription_entitlements

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_subscription_entitlements

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_customer_entitlements

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_item_entitlements_for_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### upsert_or_remove_item_entitlements_for_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `feature-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_item_entitlements_for_an_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### upsert_or_remove_item_entitlements_for_an_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_all_entitlements

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `feature_id` (object)
- `entity_type` (object)
- `entity_id` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### upsert_or_remove_entitlements_for_a_feature

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_store_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `in-app-subscription-app-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_receipt

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `in-app-subscription-app-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### import_subscription_without_receipt

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `in-app-subscription-app-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### process_purchase_command

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `in-app-subscription-app-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### one_time_purchase

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `non-subscription-app-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_entitlement_overrides_for_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### upsert_remove_entitlement_overrides_for_a_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_the_business_entity_transfers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `resource_type` (object)
- `resource_id` (object)
- `active_resource_id` (object)
- `created_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### transfer_resources_to_another_business_entity

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_a_purchase

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### estimates_for_purchase

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_vouchers_for_a_customer

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer-id` (string)
- `limit` (integer)
- `offset` (string)
- `status` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_vouchers_for_an_invoice

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice-id` (string)
- `limit` (integer)
- `offset` (string)
- `status` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_voucher_data

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment-voucher-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_voucher_for_the_customer_to_initiate_payment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### taxes_csv_import

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_schedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `site-currency-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### add_a_new_currency

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_currency

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `site-currency-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_currency

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `site-currency-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### remove_schedule

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `site-currency-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_currencies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_ramp

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ramp-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_ramp

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_ramps

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `include_deleted` (boolean)
- `status` (object)
- `subscription_id` (object)
- `effective_from` (object)
- `updated_at` (object)
- `sort_by` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_subscription_ramp

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ramp-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_ramp

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ramp-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_payment_schedule_scheme

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment-schedule-scheme-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_payment_schedule_scheme

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_payment_schedule_scheme

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment-schedule-scheme-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### contact_support_a_pc2_migration

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_pc2_migration

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_pc2_migration

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### initiate_a_pc2_migration

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_draft_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-family-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_pc2_migration_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-family-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_pc2_migration_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-family-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_pc2_migration_item_families

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `pc2_migration_id` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_pc2_migration_item_family

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_pc2_migration_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_pc2_migration_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_draft_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_pc2_migration_items

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `pc2_migration_item_family` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_pc2_migration_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### applicable_items_a_pc2_migration_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `is_recurring` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_pc2_migration_item_prices

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `pc2_migration_id` (object)
- `pc2_migration_item_id` (object)
- `is_invalid_pc1_id` (object)
- `pc1_item_type` (object)
- `is_recurring` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### delete_draft_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_pc2_migration_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_pc2_migration_item_price

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `pc2-migration-item-price-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_pricing_page_for_existing_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_pricing_page_for_new_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_site_pc_meta_records

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_omnichannel_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `omnichannel-subscription-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_omnichannel_transactions_of_an_omnichannel_subscription

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `omnichannel-subscription-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_omnichannel_subscriptions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `source` (object)
- `customer_id` (object)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### list_scheduled_changes_for_omnichannel_subscription_item

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `omnichannel-subscription-item-id` (string)
- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_recorded_purchase

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `recorded-purchase-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### record_a_purchase

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_rule_data

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `rule-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_usage_event

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### ingest_usages_in_batch

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### get_upload_status

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `usage-file-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### upload_usages_file

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_personalized_offers

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_an_offer_fulfillment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_an_offer_fulfillment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `offer-fulfillment-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_an_offer_fulfillment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `offer-fulfillment-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### create_an_offer_event

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### delete_a_webhook_endpoint

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhook-endpoint-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### retrieve_a_webhook_endpoint

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhook-endpoint-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### update_a_webhook_endpoint

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhook-endpoint-id` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

### list_webhook_endpoints

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `limit` (integer)
- `offset` (string)
- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-business-entity-id` (string)

### create_a_webhook_endpoint

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `chargebee-request-origin-device` (string)
- `chargebee-request-origin-user` (string)
- `chargebee-request-origin-user-encoded` (string)
- `chargebee-request-origin-ip` (string)
- `chargebee-event-actions` (string)
- `chargebee-event-email` (string)
- `chargebee-event-webhook` (string)
- `chargebee-business-entity-id` (string)

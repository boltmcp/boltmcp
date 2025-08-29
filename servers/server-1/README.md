# @open-mcp/server-1

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "server-1": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/server-1@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/server-1@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add server-1 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add server-1 \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add server-1 \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "server-1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/server-1"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_app_info_api_app_about_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_startup_info_api_app_about_startup_info_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_app_theme_api_app_about_theme_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### get_token_api_auth_token_post

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### oauth_login_api_auth_oauth_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### oauth_callback_api_auth_oauth_callback_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### refresh_token_api_auth_refresh_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### logout_api_auth_logout_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### register_new_user_api_users_register_post

**Environment variables**

No environment variables required

**Input schema**

- `group` (other)
- `household` (other)
- `groupToken` (other)
- `email` (string)
- `username` (string)
- `fullName` (string)
- `password` (string)
- `passwordConfirm` (string)
- `advanced` (boolean)
- `private` (boolean)
- `seedData` (boolean)
- `locale` (string)
- `accept-language` (other)

### get_logged_in_user_api_users_self_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_logged_in_user_ratings_api_users_self_ratings_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_logged_in_user_rating_for_recipe_api_users_self_ratings_reci

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipe_id` (string)
- `accept-language` (other)

### get_logged_in_user_favorites_api_users_self_favorites_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### update_password_api_users_password_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `currentPassword` (string)
- `newPassword` (string)
- `accept-language` (other)

### update_user_api_users_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `id` (other)
- `username` (other)
- `fullName` (other)
- `email` (string)
- `authMethod` (string)
- `admin` (boolean)
- `group` (other)
- `household` (other)
- `advanced` (boolean)
- `canInvite` (boolean)
- `canManage` (boolean)
- `canManageHousehold` (boolean)
- `canOrganize` (boolean)
- `accept-language` (other)

### forgot_password_api_users_forgot_password_post

**Environment variables**

No environment variables required

**Input schema**

- `email` (string)
- `accept-language` (other)

### reset_password_api_users_reset_password_post

**Environment variables**

No environment variables required

**Input schema**

- `token` (string)
- `email` (string)
- `password` (string)
- `passwordConfirm` (string)

### update_user_image_api_users_id_image_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `accept-language` (other)

### create_api_token_api_users_api_tokens_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `integrationId` (string)
- `accept-language` (other)

### delete_api_token_api_users_api_tokens_token_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `token_id` (integer)
- `accept-language` (other)

### get_ratings_api_users_id_ratings_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `accept-language` (other)

### get_favorites_api_users_id_favorites_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `accept-language` (other)

### set_rating_api_users_id_ratings_slug_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `slug` (string)
- `rating` (other)
- `isFavorite` (other)
- `accept-language` (other)

### add_favorite_api_users_id_favorites_slug_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `slug` (string)
- `accept-language` (other)

### remove_favorite_api_users_id_favorites_slug_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (string)
- `slug` (string)
- `accept-language` (other)

### get_all_api_households_cookbooks_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_cookbooks_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `description` (string)
- `slug` (other)
- `position` (integer)
- `public` (boolean)
- `queryFilterString` (string)
- `accept-language` (other)

### update_many_api_households_cookbooks_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_one_api_households_cookbooks_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (other)
- `accept-language` (other)

### update_one_api_households_cookbooks_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (string)
- `description` (string)
- `slug` (other)
- `position` (integer)
- `public` (boolean)
- `queryFilterString` (string)
- `accept-language` (other)

### delete_one_api_households_cookbooks_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_households_events_notifications_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_events_notifications_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `appriseUrl` (other)
- `accept-language` (other)

### get_one_api_households_events_notifications_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_households_events_notifications_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (string)
- `appriseUrl` (other)
- `enabled` (boolean)
- `groupId` (string)
- `householdId` (string)
- `options` (object)
- `id` (string)
- `accept-language` (other)

### delete_one_api_households_events_notifications_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### test_notification_api_households_events_notifications_item_id_te

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_households_recipe_actions_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_recipe_actions_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `actionType` (string)
- `title` (string)
- `url` (string)
- `accept-language` (other)

### get_one_api_households_recipe_actions_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_households_recipe_actions_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `actionType` (string)
- `title` (string)
- `url` (string)
- `groupId` (string)
- `householdId` (string)
- `accept-language` (other)

### delete_one_api_households_recipe_actions_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### trigger_action_api_households_recipe_actions_item_id_trigger_rec

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `recipe_slug` (string)
- `scaled_amount` (number)
- `accept-language` (other)

### get_logged_in_user_household_api_households_self_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_household_recipe_api_households_self_recipes_recipe_slug_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipe_slug` (string)
- `accept-language` (other)

### get_household_members_api_households_members_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_household_preferences_api_households_preferences_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### update_household_preferences_api_households_preferences_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `privateHousehold` (boolean)
- `lockRecipeEditsFromOtherHouseholds` (boolean)
- `firstDayOfWeek` (integer)
- `recipePublic` (boolean)
- `recipeShowNutrition` (boolean)
- `recipeShowAssets` (boolean)
- `recipeLandscapeView` (boolean)
- `recipeDisableComments` (boolean)
- `recipeDisableAmount` (boolean)
- `accept-language` (other)

### set_member_permissions_api_households_permissions_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (string)
- `canManageHousehold` (boolean)
- `canManage` (boolean)
- `canInvite` (boolean)
- `canOrganize` (boolean)
- `accept-language` (other)

### get_statistics_api_households_statistics_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_invite_tokens_api_households_invitations_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### create_invite_token_api_households_invitations_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `uses` (integer)
- `groupId` (other)
- `householdId` (other)
- `accept-language` (other)

### email_invitation_api_households_invitations_email_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `email` (string)
- `token` (string)
- `accept-language` (other)

### get_all_api_households_shopping_lists_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_shopping_lists_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (other)
- `extras` (other)
- `createdAt` (other)
- `update_at` (other)
- `accept-language` (other)

### get_one_api_households_shopping_lists_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_households_shopping_lists_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (other)
- `extras` (other)
- `createdAt` (other)
- `update_at` (other)
- `groupId` (string)
- `userId` (string)
- `id` (string)
- `listItems` (array)
- `accept-language` (other)

### delete_one_api_households_shopping_lists_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_label_settings_api_households_shopping_lists_item_id_labe

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### add_recipe_ingredients_to_list_api_households_shopping_lists_ite

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### add_single_recipe_ingredients_to_list_api_households_shopping_li

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `recipe_id` (string)
- `accept-language` (other)

### remove_recipe_ingredients_from_list_api_households_shopping_list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `recipe_id` (string)
- `accept-language` (other)

### get_all_api_households_shopping_items_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_shopping_items_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `quantity` (number)
- `unit` (other)
- `food` (other)
- `note` (other)
- `isFood` (boolean)
- `disableAmount` (other)
- `display` (string)
- `shoppingListId` (string)
- `checked` (boolean)
- `position` (integer)
- `foodId` (other)
- `labelId` (other)
- `unitId` (other)
- `extras` (other)
- `id` (other)
- `recipeReferences` (array)
- `accept-language` (other)

### update_many_api_households_shopping_items_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### delete_many_api_households_shopping_items_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `ids` (array)
- `accept-language` (other)

### create_many_api_households_shopping_items_create_bulk_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_one_api_households_shopping_items_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_households_shopping_items_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `quantity` (number)
- `unit` (other)
- `food` (other)
- `note` (other)
- `isFood` (boolean)
- `disableAmount` (other)
- `display` (string)
- `shoppingListId` (string)
- `checked` (boolean)
- `position` (integer)
- `foodId` (other)
- `labelId` (other)
- `unitId` (other)
- `extras` (other)
- `recipeReferences` (array)
- `accept-language` (other)

### delete_one_api_households_shopping_items_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_households_webhooks_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_webhooks_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `enabled` (boolean)
- `name` (string)
- `url` (string)
- `webhookType` (string)
- `scheduledTime` (string)
- `accept-language` (other)

### rerun_webhooks_api_households_webhooks_rerun_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_one_api_households_webhooks_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_households_webhooks_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `enabled` (boolean)
- `name` (string)
- `url` (string)
- `webhookType` (string)
- `scheduledTime` (string)
- `accept-language` (other)

### delete_one_api_households_webhooks_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### test_one_api_households_webhooks_item_id_test_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_households_mealplans_rules_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_mealplans_rules_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `day` (string)
- `entryType` (string)
- `queryFilterString` (string)
- `accept-language` (other)

### get_one_api_households_mealplans_rules_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_households_mealplans_rules_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `day` (string)
- `entryType` (string)
- `queryFilterString` (string)
- `accept-language` (other)

### delete_one_api_households_mealplans_rules_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_households_mealplans_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `start_date` (other)
- `end_date` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_households_mealplans_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `date` (string)
- `entryType` (string)
- `title` (string)
- `text` (string)
- `recipeId` (other)
- `accept-language` (other)

### get_todays_meals_api_households_mealplans_today_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### create_random_meal_api_households_mealplans_random_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `date` (string)
- `entryType` (string)
- `accept-language` (other)

### get_one_api_households_mealplans_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (integer)
- `accept-language` (other)

### update_one_api_households_mealplans_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (integer)
- `date` (string)
- `entryType` (string)
- `title` (string)
- `text` (string)
- `recipeId` (other)
- `id` (integer)
- `groupId` (string)
- `userId` (string)
- `accept-language` (other)

### delete_one_api_households_mealplans_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (integer)
- `accept-language` (other)

### get_all_households_api_groups_households_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_one_household_api_groups_households_household_slug_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `household_slug` (string)
- `accept-language` (other)

### get_logged_in_user_group_api_groups_self_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_group_members_api_groups_members_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_group_member_api_groups_members_username_or_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `username_or_id` (other)
- `accept-language` (other)

### get_group_preferences_api_groups_preferences_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### update_group_preferences_api_groups_preferences_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `privateGroup` (boolean)
- `accept-language` (other)

### get_storage_api_groups_storage_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### start_data_migration_api_groups_migrations_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_all_api_groups_reports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `report_type` (other)
- `accept-language` (other)

### get_one_api_groups_reports_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### delete_one_api_groups_reports_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_groups_labels_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_groups_labels_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `color` (string)
- `accept-language` (other)

### get_one_api_groups_labels_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_groups_labels_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (string)
- `color` (string)
- `groupId` (string)
- `id` (string)
- `accept-language` (other)

### delete_one_api_groups_labels_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### seed_foods_api_groups_seeders_foods_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `locale` (string)
- `accept-language` (other)

### seed_labels_api_groups_seeders_labels_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `locale` (string)
- `accept-language` (other)

### seed_units_api_groups_seeders_units_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `locale` (string)
- `accept-language` (other)

### get_recipe_formats_and_templates_api_recipes_exports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_recipe_zip_token_api_recipes_slug_exports_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `accept-language` (other)

### get_recipe_as_format_api_recipes_slug_exports_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `template_name` (string)
- `accept-language` (other)

### get_recipe_as_zip_api_recipes_slug_exports_zip_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `token` (string)
- `accept-language` (other)

### test_parse_recipe_url_api_recipes_test_scrape_url_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `url` (string)
- `useOpenAI` (boolean)
- `accept-language` (other)

### create_recipe_from_html_or_json_api_recipes_create_html_or_json_

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `includeTags` (boolean)
- `data` (string)
- `accept-language` (other)

### parse_recipe_url_api_recipes_create_url_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `includeTags` (boolean)
- `url` (string)
- `accept-language` (other)

### parse_recipe_url_bulk_api_recipes_create_url_bulk_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `imports` (array)
- `accept-language` (other)

### create_recipe_from_zip_api_recipes_create_zip_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### create_recipe_from_image_api_recipes_create_image_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `translateLanguage` (other)
- `accept-language` (other)

### get_all_api_recipes_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `categories` (other)
- `tags` (other)
- `tools` (other)
- `foods` (other)
- `households` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `cookbook` (other)
- `requireAllCategories` (boolean)
- `requireAllTags` (boolean)
- `requireAllTools` (boolean)
- `requireAllFoods` (boolean)
- `search` (other)
- `accept-language` (other)

### create_one_api_recipes_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `accept-language` (other)

### update_many_api_recipes_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### patch_many_api_recipes_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### suggest_recipes_api_recipes_suggestions_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `foods` (other)
- `tools` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `limit` (integer)
- `maxMissingFoods` (integer)
- `maxMissingTools` (integer)
- `includeFoodsOnHand` (boolean)
- `includeToolsOnHand` (boolean)
- `accept-language` (other)

### get_one_api_recipes_slug_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `accept-language` (other)

### update_one_api_recipes_slug_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `id` (other)
- `userId` (string)
- `householdId` (string)
- `groupId` (string)
- `name` (other)
- `b_slug` (string)
- `image` (other)
- `recipeServings` (number)
- `recipeYieldQuantity` (number)
- `recipeYield` (other)
- `totalTime` (other)
- `prepTime` (other)
- `cookTime` (other)
- `performTime` (other)
- `description` (other)
- `recipeCategory` (other)
- `tags` (other)
- `tools` (array)
- `rating` (other)
- `orgURL` (other)
- `dateAdded` (other)
- `dateUpdated` (other)
- `createdAt` (other)
- `update_at` (other)
- `lastMade` (other)
- `recipeIngredient` (array)
- `recipeInstructions` (other)
- `nutrition` (other)
- `settings` (other)
- `assets` (other)
- `notes` (other)
- `extras` (other)
- `comments` (other)
- `accept-language` (other)

### patch_one_api_recipes_slug_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `id` (other)
- `userId` (string)
- `householdId` (string)
- `groupId` (string)
- `name` (other)
- `b_slug` (string)
- `image` (other)
- `recipeServings` (number)
- `recipeYieldQuantity` (number)
- `recipeYield` (other)
- `totalTime` (other)
- `prepTime` (other)
- `cookTime` (other)
- `performTime` (other)
- `description` (other)
- `recipeCategory` (other)
- `tags` (other)
- `tools` (array)
- `rating` (other)
- `orgURL` (other)
- `dateAdded` (other)
- `dateUpdated` (other)
- `createdAt` (other)
- `update_at` (other)
- `lastMade` (other)
- `recipeIngredient` (array)
- `recipeInstructions` (other)
- `nutrition` (other)
- `settings` (other)
- `assets` (other)
- `notes` (other)
- `extras` (other)
- `comments` (other)
- `accept-language` (other)

### delete_one_api_recipes_slug_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `accept-language` (other)

### duplicate_one_api_recipes_slug_duplicate_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `name` (other)
- `accept-language` (other)

### update_last_made_api_recipes_slug_last_made_patch

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `timestamp` (string)
- `accept-language` (other)

### scrape_image_url_api_recipes_slug_image_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `includeTags` (boolean)
- `url` (string)
- `accept-language` (other)

### update_recipe_image_api_recipes_slug_image_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `accept-language` (other)

### upload_recipe_asset_api_recipes_slug_assets_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `accept-language` (other)

### get_recipe_comments_api_recipes_slug_comments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `slug` (string)
- `accept-language` (other)

### bulk_tag_recipes_api_recipes_bulk_actions_tag_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipes` (array)
- `tags` (array)
- `accept-language` (other)

### bulk_settings_recipes_api_recipes_bulk_actions_settings_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipes` (array)
- `settings` (object)
- `accept-language` (other)

### bulk_categorize_recipes_api_recipes_bulk_actions_categorize_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipes` (array)
- `categories` (array)
- `accept-language` (other)

### bulk_delete_recipes_api_recipes_bulk_actions_delete_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipes` (array)
- `accept-language` (other)

### bulk_export_recipes_api_recipes_bulk_actions_export_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipes` (array)
- `exportType` (string)
- `accept-language` (other)

### get_exported_data_api_recipes_bulk_actions_export_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_exported_data_token_api_recipes_bulk_actions_export_download

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `path` (string)
- `accept-language` (other)

### purge_export_data_api_recipes_bulk_actions_export_purge_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_shared_recipe_api_recipes_shared_token_id_get

**Environment variables**

No environment variables required

**Input schema**

- `token_id` (string)

### get_all_api_recipes_timeline_events_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_recipes_timeline_events_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipeId` (string)
- `userId` (other)
- `subject` (string)
- `eventType` (string)
- `eventMessage` (other)
- `image` (other)
- `timestamp` (string)
- `accept-language` (other)

### get_one_api_recipes_timeline_events_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_recipes_timeline_events_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `subject` (string)
- `eventMessage` (other)
- `image` (other)
- `accept-language` (other)

### delete_one_api_recipes_timeline_events_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_event_image_api_recipes_timeline_events_item_id_image_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_organizers_categories_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_organizers_categories_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `accept-language` (other)

### get_all_empty_api_organizers_categories_empty_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_one_api_organizers_categories_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_organizers_categories_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (string)
- `accept-language` (other)

### delete_one_api_organizers_categories_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_one_by_slug_api_organizers_categories_slug_category_slug_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `category_slug` (string)
- `accept-language` (other)

### get_all_api_organizers_tags_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_organizers_tags_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `accept-language` (other)

### get_empty_tags_api_organizers_tags_empty_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_one_api_organizers_tags_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_organizers_tags_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (string)
- `accept-language` (other)

### delete_recipe_tag_api_organizers_tags_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_one_by_slug_api_organizers_tags_slug_tag_slug_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `tag_slug` (string)
- `accept-language` (other)

### get_all_api_organizers_tools_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_organizers_tools_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `householdsWithTool` (array)
- `accept-language` (other)

### get_one_api_organizers_tools_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_organizers_tools_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `name` (string)
- `householdsWithTool` (array)
- `accept-language` (other)

### delete_one_api_organizers_tools_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_one_by_slug_api_organizers_tools_slug_tool_slug_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `tool_slug` (string)
- `accept-language` (other)

### get_all_api_shared_recipes_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipe_id` (other)
- `accept-language` (other)

### create_one_api_shared_recipes_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipeId` (string)
- `expiresAt` (string)
- `accept-language` (other)

### get_one_api_shared_recipes_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### delete_one_api_shared_recipes_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_comments_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_comments_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `recipeId` (string)
- `text` (string)
- `accept-language` (other)

### get_one_api_comments_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_comments_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `id` (string)
- `text` (string)
- `accept-language` (other)

### delete_one_api_comments_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### parse_ingredient_api_parser_ingredient_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `parser` (string)
- `ingredient` (string)
- `accept-language` (other)

### parse_ingredients_api_parser_ingredients_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `parser` (string)
- `ingredients` (array)
- `accept-language` (other)

### get_all_api_foods_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_foods_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (other)
- `name` (string)
- `pluralName` (other)
- `description` (string)
- `extras` (other)
- `labelId` (other)
- `aliases` (array)
- `householdsWithIngredientFood` (array)
- `accept-language` (other)

### merge_one_api_foods_merge_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fromFood` (string)
- `toFood` (string)
- `accept-language` (other)

### get_one_api_foods_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_foods_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `id` (other)
- `name` (string)
- `pluralName` (other)
- `description` (string)
- `extras` (other)
- `labelId` (other)
- `aliases` (array)
- `householdsWithIngredientFood` (array)
- `accept-language` (other)

### delete_one_api_foods_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_units_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_units_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (other)
- `name` (string)
- `pluralName` (other)
- `description` (string)
- `extras` (other)
- `fraction` (boolean)
- `abbreviation` (string)
- `pluralAbbreviation` (other)
- `useAbbreviation` (boolean)
- `aliases` (array)
- `accept-language` (other)

### merge_one_api_units_merge_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fromUnit` (string)
- `toUnit` (string)
- `accept-language` (other)

### get_one_api_units_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_units_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `id` (other)
- `name` (string)
- `pluralName` (other)
- `description` (string)
- `extras` (other)
- `fraction` (boolean)
- `abbreviation` (string)
- `pluralAbbreviation` (other)
- `useAbbreviation` (boolean)
- `aliases` (array)
- `accept-language` (other)

### delete_one_api_units_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_app_info_api_admin_about_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_app_statistics_api_admin_about_statistics_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### check_app_config_api_admin_about_check_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_all_api_admin_users_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_admin_users_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `id` (other)
- `username` (string)
- `fullName` (string)
- `email` (string)
- `authMethod` (string)
- `admin` (boolean)
- `group` (other)
- `household` (other)
- `advanced` (boolean)
- `canInvite` (boolean)
- `canManage` (boolean)
- `canManageHousehold` (boolean)
- `canOrganize` (boolean)
- `password` (string)
- `accept-language` (other)

### unlock_users_api_admin_users_unlock_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `force` (boolean)
- `accept-language` (other)

### get_one_api_admin_users_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_admin_users_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `id` (string)
- `username` (other)
- `fullName` (other)
- `email` (string)
- `authMethod` (string)
- `admin` (boolean)
- `group` (string)
- `household` (string)
- `advanced` (boolean)
- `canInvite` (boolean)
- `canManage` (boolean)
- `canManageHousehold` (boolean)
- `canOrganize` (boolean)
- `groupId` (string)
- `groupSlug` (string)
- `householdId` (string)
- `householdSlug` (string)
- `tokens` (other)
- `cacheKey` (string)
- `accept-language` (other)

### delete_one_api_admin_users_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### generate_token_api_admin_users_password_reset_token_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `email` (string)
- `accept-language` (other)

### get_all_api_admin_households_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_admin_households_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `groupId` (other)
- `name` (string)
- `accept-language` (other)

### get_one_api_admin_households_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_admin_households_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `groupId` (string)
- `name` (string)
- `id` (string)
- `preferences` (other)
- `accept-language` (other)

### delete_one_api_admin_households_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### get_all_api_admin_groups_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### create_one_api_admin_groups_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `name` (string)
- `accept-language` (other)

### get_one_api_admin_groups_item_id_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### update_one_api_admin_groups_item_id_put

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `id` (string)
- `name` (string)
- `preferences` (other)
- `accept-language` (other)

### delete_one_api_admin_groups_item_id_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `item_id` (string)
- `accept-language` (other)

### check_email_config_api_admin_email_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### send_test_email_api_admin_email_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `email` (string)
- `accept-language` (other)

### get_all_api_admin_backups_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### create_one_api_admin_backups_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_one_api_admin_backups_file_name_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `file_name` (string)
- `accept-language` (other)

### delete_one_api_admin_backups_file_name_delete

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `file_name` (string)
- `accept-language` (other)

### upload_one_api_admin_backups_upload_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### import_one_api_admin_backups_file_name_restore_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `file_name` (string)
- `accept-language` (other)

### get_maintenance_summary_api_admin_maintenance_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_storage_details_api_admin_maintenance_storage_get

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### clean_images_api_admin_maintenance_clean_images_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### clean_temp_api_admin_maintenance_clean_temp_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### clean_recipe_folders_api_admin_maintenance_clean_recipe_folders_

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### debug_openai_api_admin_debug_openai_post

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `accept-language` (other)

### get_all_api_explore_groups_group_slug_foods_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_one_api_explore_groups_group_slug_foods_item_id_get

**Environment variables**

No environment variables required

**Input schema**

- `item_id` (string)
- `group_slug` (string)
- `accept-language` (other)

### get_all_api_explore_groups_group_slug_households_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_household_api_explore_groups_group_slug_households_household

**Environment variables**

No environment variables required

**Input schema**

- `household_slug` (string)
- `group_slug` (string)
- `accept-language` (other)

### get_all_api_explore_groups_group_slug_organizers_categories_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_one_api_explore_groups_group_slug_organizers_categories_item

**Environment variables**

No environment variables required

**Input schema**

- `item_id` (string)
- `group_slug` (string)
- `accept-language` (other)

### get_all_api_explore_groups_group_slug_organizers_tags_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_one_api_explore_groups_group_slug_organizers_tags_item_id_ge

**Environment variables**

No environment variables required

**Input schema**

- `item_id` (string)
- `group_slug` (string)
- `accept-language` (other)

### get_all_api_explore_groups_group_slug_organizers_tools_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_one_api_explore_groups_group_slug_organizers_tools_item_id_g

**Environment variables**

No environment variables required

**Input schema**

- `item_id` (string)
- `group_slug` (string)
- `accept-language` (other)

### get_all_api_explore_groups_group_slug_cookbooks_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `search` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `accept-language` (other)

### get_one_api_explore_groups_group_slug_cookbooks_item_id_get

**Environment variables**

No environment variables required

**Input schema**

- `item_id` (other)
- `group_slug` (string)
- `accept-language` (other)

### get_all_api_explore_groups_group_slug_recipes_get

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `categories` (other)
- `tags` (other)
- `tools` (other)
- `foods` (other)
- `households` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `page` (integer)
- `perPage` (integer)
- `cookbook` (other)
- `requireAllCategories` (boolean)
- `requireAllTags` (boolean)
- `requireAllTools` (boolean)
- `requireAllFoods` (boolean)
- `search` (other)
- `accept-language` (other)

### suggest_recipes_api_explore_groups_group_slug_recipes_suggestion

**Environment variables**

No environment variables required

**Input schema**

- `group_slug` (string)
- `foods` (other)
- `tools` (other)
- `orderBy` (other)
- `orderByNullPosition` (other)
- `orderDirection` (string)
- `queryFilter` (other)
- `paginationSeed` (other)
- `limit` (integer)
- `maxMissingFoods` (integer)
- `maxMissingTools` (integer)
- `includeFoodsOnHand` (boolean)
- `includeToolsOnHand` (boolean)
- `accept-language` (other)

### get_recipe_api_explore_groups_group_slug_recipes_recipe_slug_get

**Environment variables**

No environment variables required

**Input schema**

- `recipe_slug` (string)
- `group_slug` (string)
- `accept-language` (other)

### get_recipe_img_api_media_recipes_recipe_id_images_file_name_get

**Environment variables**

No environment variables required

**Input schema**

- `recipe_id` (string)
- `file_name` (string)

### get_recipe_timeline_event_img_api_media_recipes_recipe_id_images

**Environment variables**

No environment variables required

**Input schema**

- `recipe_id` (string)
- `timeline_event_id` (string)
- `file_name` (string)

### get_recipe_asset_api_media_recipes_recipe_id_assets_file_name_ge

**Environment variables**

No environment variables required

**Input schema**

- `recipe_id` (string)
- `file_name` (string)

### get_user_image_api_media_users_user_id_file_name_get

**Environment variables**

No environment variables required

**Input schema**

- `user_id` (string)
- `file_name` (string)

### get_validation_text_api_media_docker_validate_txt_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### download_file_api_utils_download_get

**Environment variables**

No environment variables required

**Input schema**

- `token` (other)

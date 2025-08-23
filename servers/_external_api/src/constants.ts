export const OPENAPI_URL = "https://smart-api.getmobiz.com/external-api/client-specs"
export const SERVER_NAME = "_external_api"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/post_oauth_token/index.js",
  "./tools/post_v1_direct_message/index.js",
  "./tools/post_v1_trigger_message_campaignid_/index.js",
  "./tools/triggermessages/index.js",
  "./tools/bulktriggermessages/index.js",
  "./tools/post_v1_bulk_contacts_create/index.js",
  "./tools/post_v1_contact_create/index.js",
  "./tools/post_v1_contact_update/index.js"
]
# @open-mcp/fortigate_eastus_cloudapp_azure_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "fortigate_eastus_cloudapp_azure_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/fortigate_eastus_cloudapp_azure_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/fortigate_eastus_cloudapp_azure_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add fortigate_eastus_cloudapp_azure_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add fortigate_eastus_cloudapp_azure_com \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add fortigate_eastus_cloudapp_azure_com \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "fortigate_eastus_cloudapp_azure_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/fortigate_eastus_cloudapp_azure_com"],
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

### get_api_v2_cmdb_firewall_policy

**Environment variables**

- `API_KEY`

**Input schema**

- `vdom` (string)

### post_api_v2_cmdb_firewall_policy

**Environment variables**

- `API_KEY`

**Input schema**

- `vdom` (string)
- `policyid` (integer)
- `status` (string)
- `name` (string)
- `uuid` (string)
- `srcintf` (string)
- `dstintf` (string)
- `action` (string)
- `nat64` (string)
- `nat46` (string)
- `ztna-status` (string)
- `ztna-device-ownership` (string)
- `srcaddr` (string)
- `dstaddr` (string)
- `srcaddr6` (string)
- `dstaddr6` (string)
- `ztna-ems-tag` (string)
- `ztna-ems-tag-secondary` (string)
- `ztna-tags-match-logic` (string)
- `ztna-geo-tag` (string)
- `internet-service` (string)
- `internet-service-name` (string)
- `internet-service-group` (string)
- `internet-service-custom` (string)
- `network-service-dynamic` (string)
- `internet-service-custom-group` (string)
- `internet-service-src` (string)
- `internet-service-src-name` (string)
- `internet-service-src-group` (string)
- `internet-service-src-custom` (string)
- `network-service-src-dynamic` (string)
- `internet-service-src-custom-group` (string)
- `reputation-minimum` (integer)
- `reputation-direction` (string)
- `src-vendor-mac` (string)
- `internet-service6` (string)
- `internet-service6-name` (string)
- `internet-service6-group` (string)
- `internet-service6-custom` (string)
- `internet-service6-custom-group` (string)
- `internet-service6-src` (string)
- `internet-service6-src-name` (string)
- `internet-service6-src-group` (string)
- `internet-service6-src-custom` (string)
- `internet-service6-src-custom-group` (string)
- `reputation-minimum6` (integer)
- `reputation-direction6` (string)
- `rtp-nat` (string)
- `rtp-addr` (string)
- `send-deny-packet` (string)
- `firewall-session-dirty` (string)
- `schedule` (string)
- `schedule-timeout` (string)
- `policy-expiry` (string)
- `policy-expiry-date` (string)
- `policy-expiry-date-utc` (string)
- `service` (string)
- `tos-mask` (string)
- `tos` (string)
- `tos-negate` (string)
- `anti-replay` (string)
- `tcp-session-without-syn` (string)
- `geoip-anycast` (string)
- `geoip-match` (string)
- `dynamic-shaping` (string)
- `passive-wan-health-measurement` (string)
- `utm-status` (string)
- `inspection-mode` (string)
- `http-policy-redirect` (string)
- `ssh-policy-redirect` (string)
- `ztna-policy-redirect` (string)
- `webproxy-profile` (string)
- `profile-type` (string)
- `profile-group` (string)
- `profile-protocol-options` (string)
- `ssl-ssh-profile` (string)
- `av-profile` (string)
- `webfilter-profile` (string)
- `dnsfilter-profile` (string)
- `emailfilter-profile` (string)
- `dlp-profile` (string)
- `file-filter-profile` (string)
- `ips-sensor` (string)
- `application-list` (string)
- `voip-profile` (string)
- `ips-voip-filter` (string)
- `sctp-filter-profile` (string)
- `diameter-filter-profile` (string)
- `virtual-patch-profile` (string)
- `icap-profile` (string)
- `cifs-profile` (string)
- `videofilter-profile` (string)
- `waf-profile` (string)
- `ssh-filter-profile` (string)
- `casb-profile` (string)
- `logtraffic` (string)
- `logtraffic-start` (string)
- `log-http-transaction` (string)
- `capture-packet` (string)
- `auto-asic-offload` (string)
- `wanopt` (string)
- `wanopt-detection` (string)
- `wanopt-passive-opt` (string)
- `wanopt-profile` (string)
- `wanopt-peer` (string)
- `webcache` (string)
- `webcache-https` (string)
- `webproxy-forward-server` (string)
- `traffic-shaper` (string)
- `traffic-shaper-reverse` (string)
- `per-ip-shaper` (string)
- `nat` (string)
- `pcp-outbound` (string)
- `pcp-inbound` (string)
- `pcp-poolname` (string)
- `permit-any-host` (string)
- `permit-stun-host` (string)
- `fixedport` (string)
- `port-preserve` (string)
- `ippool` (string)
- `poolname` (string)
- `poolname6` (string)
- `session-ttl` (string)
- `vlan-cos-fwd` (integer)
- `vlan-cos-rev` (integer)
- `inbound` (string)
- `outbound` (string)
- `natinbound` (string)
- `natoutbound` (string)
- `fec` (string)
- `wccp` (string)
- `ntlm` (string)
- `ntlm-guest` (string)
- `ntlm-enabled-browsers` (string)
- `fsso-agent-for-ntlm` (string)
- `groups` (string)
- `users` (string)
- `fsso-groups` (string)
- `auth-path` (string)
- `disclaimer` (string)
- `email-collect` (string)
- `vpntunnel` (string)
- `natip` (string)
- `match-vip` (string)
- `match-vip-only` (string)
- `diffserv-copy` (string)
- `diffserv-forward` (string)
- `diffserv-reverse` (string)
- `diffservcode-forward` (string)
- `diffservcode-rev` (string)
- `tcp-mss-sender` (integer)
- `tcp-mss-receiver` (integer)
- `comments` (string)
- `auth-cert` (string)
- `auth-redirect-addr` (string)
- `redirect-url` (string)
- `identity-based-route` (string)
- `block-notification` (string)
- `custom-log-fields` (string)
- `replacemsg-override-group` (string)
- `srcaddr-negate` (string)
- `srcaddr6-negate` (string)
- `dstaddr-negate` (string)
- `dstaddr6-negate` (string)
- `service-negate` (string)
- `internet-service-negate` (string)
- `internet-service-src-negate` (string)
- `internet-service6-negate` (string)
- `internet-service6-src-negate` (string)
- `timeout-send-rst` (string)
- `captive-portal-exempt` (string)
- `decrypted-traffic-mirror` (string)
- `dsri` (string)
- `radius-mac-auth-bypass` (string)
- `radius-ip-auth-bypass` (string)
- `delay-tcp-npu-session` (string)
- `vlan-filter` (string)
- `sgt-check` (string)
- `sgt` (string)

### parameters_api_v2_cmdb_firewall_policy_policyid_

**Environment variables**

- `API_KEY`

**Input schema**

- `policyid` (integer)
- `vdom` (string)

### get_api_v2_cmdb_firewall_policy_policyid_

**Environment variables**

- `API_KEY`

**Input schema**

- `policyid` (integer)
- `vdom` (string)

### put_api_v2_cmdb_firewall_policy_policyid_

**Environment variables**

- `API_KEY`

**Input schema**

- `policyid` (integer)
- `vdom` (string)
- `b_policyid` (integer)
- `status` (string)
- `name` (string)
- `uuid` (string)
- `srcintf` (string)
- `dstintf` (string)
- `action` (string)
- `nat64` (string)
- `nat46` (string)
- `ztna-status` (string)
- `ztna-device-ownership` (string)
- `srcaddr` (string)
- `dstaddr` (string)
- `srcaddr6` (string)
- `dstaddr6` (string)
- `ztna-ems-tag` (string)
- `ztna-ems-tag-secondary` (string)
- `ztna-tags-match-logic` (string)
- `ztna-geo-tag` (string)
- `internet-service` (string)
- `internet-service-name` (string)
- `internet-service-group` (string)
- `internet-service-custom` (string)
- `network-service-dynamic` (string)
- `internet-service-custom-group` (string)
- `internet-service-src` (string)
- `internet-service-src-name` (string)
- `internet-service-src-group` (string)
- `internet-service-src-custom` (string)
- `network-service-src-dynamic` (string)
- `internet-service-src-custom-group` (string)
- `reputation-minimum` (integer)
- `reputation-direction` (string)
- `src-vendor-mac` (string)
- `internet-service6` (string)
- `internet-service6-name` (string)
- `internet-service6-group` (string)
- `internet-service6-custom` (string)
- `internet-service6-custom-group` (string)
- `internet-service6-src` (string)
- `internet-service6-src-name` (string)
- `internet-service6-src-group` (string)
- `internet-service6-src-custom` (string)
- `internet-service6-src-custom-group` (string)
- `reputation-minimum6` (integer)
- `reputation-direction6` (string)
- `rtp-nat` (string)
- `rtp-addr` (string)
- `send-deny-packet` (string)
- `firewall-session-dirty` (string)
- `schedule` (string)
- `schedule-timeout` (string)
- `policy-expiry` (string)
- `policy-expiry-date` (string)
- `policy-expiry-date-utc` (string)
- `service` (string)
- `tos-mask` (string)
- `tos` (string)
- `tos-negate` (string)
- `anti-replay` (string)
- `tcp-session-without-syn` (string)
- `geoip-anycast` (string)
- `geoip-match` (string)
- `dynamic-shaping` (string)
- `passive-wan-health-measurement` (string)
- `utm-status` (string)
- `inspection-mode` (string)
- `http-policy-redirect` (string)
- `ssh-policy-redirect` (string)
- `ztna-policy-redirect` (string)
- `webproxy-profile` (string)
- `profile-type` (string)
- `profile-group` (string)
- `profile-protocol-options` (string)
- `ssl-ssh-profile` (string)
- `av-profile` (string)
- `webfilter-profile` (string)
- `dnsfilter-profile` (string)
- `emailfilter-profile` (string)
- `dlp-profile` (string)
- `file-filter-profile` (string)
- `ips-sensor` (string)
- `application-list` (string)
- `voip-profile` (string)
- `ips-voip-filter` (string)
- `sctp-filter-profile` (string)
- `diameter-filter-profile` (string)
- `virtual-patch-profile` (string)
- `icap-profile` (string)
- `cifs-profile` (string)
- `videofilter-profile` (string)
- `waf-profile` (string)
- `ssh-filter-profile` (string)
- `casb-profile` (string)
- `logtraffic` (string)
- `logtraffic-start` (string)
- `log-http-transaction` (string)
- `capture-packet` (string)
- `auto-asic-offload` (string)
- `wanopt` (string)
- `wanopt-detection` (string)
- `wanopt-passive-opt` (string)
- `wanopt-profile` (string)
- `wanopt-peer` (string)
- `webcache` (string)
- `webcache-https` (string)
- `webproxy-forward-server` (string)
- `traffic-shaper` (string)
- `traffic-shaper-reverse` (string)
- `per-ip-shaper` (string)
- `nat` (string)
- `pcp-outbound` (string)
- `pcp-inbound` (string)
- `pcp-poolname` (string)
- `permit-any-host` (string)
- `permit-stun-host` (string)
- `fixedport` (string)
- `port-preserve` (string)
- `ippool` (string)
- `poolname` (string)
- `poolname6` (string)
- `session-ttl` (string)
- `vlan-cos-fwd` (integer)
- `vlan-cos-rev` (integer)
- `inbound` (string)
- `outbound` (string)
- `natinbound` (string)
- `natoutbound` (string)
- `fec` (string)
- `wccp` (string)
- `ntlm` (string)
- `ntlm-guest` (string)
- `ntlm-enabled-browsers` (string)
- `fsso-agent-for-ntlm` (string)
- `groups` (string)
- `users` (string)
- `fsso-groups` (string)
- `auth-path` (string)
- `disclaimer` (string)
- `email-collect` (string)
- `vpntunnel` (string)
- `natip` (string)
- `match-vip` (string)
- `match-vip-only` (string)
- `diffserv-copy` (string)
- `diffserv-forward` (string)
- `diffserv-reverse` (string)
- `diffservcode-forward` (string)
- `diffservcode-rev` (string)
- `tcp-mss-sender` (integer)
- `tcp-mss-receiver` (integer)
- `comments` (string)
- `auth-cert` (string)
- `auth-redirect-addr` (string)
- `redirect-url` (string)
- `identity-based-route` (string)
- `block-notification` (string)
- `custom-log-fields` (string)
- `replacemsg-override-group` (string)
- `srcaddr-negate` (string)
- `srcaddr6-negate` (string)
- `dstaddr-negate` (string)
- `dstaddr6-negate` (string)
- `service-negate` (string)
- `internet-service-negate` (string)
- `internet-service-src-negate` (string)
- `internet-service6-negate` (string)
- `internet-service6-src-negate` (string)
- `timeout-send-rst` (string)
- `captive-portal-exempt` (string)
- `decrypted-traffic-mirror` (string)
- `dsri` (string)
- `radius-mac-auth-bypass` (string)
- `radius-ip-auth-bypass` (string)
- `delay-tcp-npu-session` (string)
- `vlan-filter` (string)
- `sgt-check` (string)
- `sgt` (string)

### delete_api_v2_cmdb_firewall_policy_policyid_

**Environment variables**

- `API_KEY`

**Input schema**

- `policyid` (integer)
- `vdom` (string)

# @open-mcp/api_v2_reckonone_com

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "api_v2_reckonone_com": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/api_v2_reckonone_com@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/api_v2_reckonone_com@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add api_v2_reckonone_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_v2_reckonone_com \
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config add api_v2_reckonone_com \
  /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_v2_reckonone_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_v2_reckonone_com"],
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

### addresstypes_getaddresstypes

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### addresstypes_createaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### addresstypes_getaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `addressTypeId` (string)

### addresstypes_updateaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `addressTypeId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### addresstypes_patchaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `addressTypeId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### addresstypes_deleteaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `addressTypeId` (string)

### banking_getfinancialinstitutions

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### banking_getbankpayments

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### banking_createbankpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ledgerAccount` (string)
- `paymentDate` (string)
- `reference` (string)
- `lineItems` (array)
- `treatWarningsAsErrors` (boolean)
- `ignoreWarnings` (boolean)

### banking_getbankpaymentsunprocessedpayments

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ledgerAccountId` (string)
- `page` (integer)
- `perPage` (integer)

### banking_getbankpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)

### banking_deletebankpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)

### banking_updatebankpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)
- `paymentDate` (string)
- `reference` (string)
- `lineItems` (array)
- `treatWarningsAsErrors` (boolean)

### banking_patchbankpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)
- `paymentDate` (string)
- `reference` (string)
- `status` (other)

### banking_getbankpaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)
- `lineItemId` (string)

### banking_deletebankpaymentunprocessedpaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)
- `lineItemId` (string)

### banking_getbankpaymentabafile

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)

### banking_createbankpaymentbypayrun

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payrunId` (string)
- `ignoreWarnings` (boolean)

### banking_createbankpaymentunprocessedpaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `bankPaymentId` (string)
- `paymentId` (string)

### banking_getbankpaymentsbypayments

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentIds` (array)

### bills_getbills

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### bills_createbill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplier` (string)
- `billDate` (string)
- `dueDate` (string)
- `billDiscountAmount` (number)
- `billDiscountPercent` (number)
- `amountTaxStatus` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)

### bills_getbill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `format` (string)

### bills_updatebill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `supplier` (string)
- `billDate` (string)
- `dueDate` (string)
- `billDiscountAmount` (number)
- `billDiscountPercent` (number)
- `amountTaxStatus` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)

### bills_patchbill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `supplier` (string)
- `billDate` (string)
- `dueDate` (string)
- `billDiscountAmount` (number)
- `billDiscountPercent` (number)
- `amountTaxStatus` (string)
- `status` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `notes` (string)

### bills_deletebill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)

### bills_downloadattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `attachmentId` (string)

### bills_deletebillattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `attachmentId` (string)

### bills_getbillssummary

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `baseDate` (string)

### bills_addattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `fileName` (string)

### bills_getpopulatedemail

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)

### bills_emailbill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `toAddresses` (array)
- `ccAddresses` (array)
- `bccAddresses` (array)
- `subject` (string)
- `body` (string)
- `documentNumber` (string)

### bills_getlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `lineId` (string)

### bills_addlineitemtobill

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### bills_updatelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### bills_patchlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### bills_deletelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `lineItemId` (string)

### bills_deletetransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `billId` (string)
- `linkId` (string)

### books_getbooks

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### books_getbook

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### classifications_getclassifications

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)

### classifications_createclassification

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `description` (string)
- `status` (other)
- `isDefault` (boolean)
- `parentClassification` (string)

### classifications_getclassification

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `classificationId` (string)

### classifications_deleteclassification

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `classificationId` (string)

### classifications_updateclassification

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `classificationId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `description` (string)
- `status` (other)
- `isDefault` (boolean)
- `parentClassification` (string)

### classifications_patchclassification

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `classificationId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `description` (string)
- `status` (other)
- `isDefault` (boolean)
- `parentClassification` (string)

### contacts_getcontacts

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### contacts_createcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `salutation` (string)
- `department` (string)
- `position` (string)
- `status` (other)
- `notes` (string)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `organisation` (string)

### contacts_getcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)

### contacts_deletecontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)

### contacts_updatecontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `name` (string)
- `salutation` (string)
- `department` (string)
- `position` (string)
- `status` (other)
- `notes` (string)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `organisation` (string)

### contacts_patchcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `name` (string)
- `salutation` (string)
- `department` (string)
- `position` (string)
- `organisation` (string)
- `status` (other)
- `notes` (string)

### contacts_getcontactelectronicaddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)

### contacts_createcontactelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `address` (string)

### contacts_getcontactelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)

### contacts_deletecontactelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)

### contacts_updatecontactelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `address` (string)

### contacts_patchcontactelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `address` (string)

### contacts_getcontactphonenumbers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)

### contacts_createcontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)
- `type` (string)

### contacts_getcontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)

### contacts_updatecontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### contacts_patchcontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### contacts_deletecontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)

### contacts_getcontactaddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)

### contacts_createcontactaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `type` (string)

### contacts_getcontactaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)

### contacts_updatecontactaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### contacts_deletecontactaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)

### contacts_patchcontactaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `contactId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### countries_getcountries

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `perPage` (integer)

### countries_getcountry

**Environment variables**

No environment variables required

**Input schema**

- `countryId` (string)

### creditnotes_getcreditnotes

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### creditnotes_getcreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `format` (string)

### creditnotes_updatecreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `customer` (string)
- `creditNoteDate` (string)
- `amountTaxStatus` (other)
- `reference` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)

### creditnotes_patchcreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `customer` (string)
- `creditNoteDate` (string)
- `status` (other)
- `reference` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `template` (string)
- `notes` (string)

### creditnotes_deletecreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)

### creditnotes_createcreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customer` (string)
- `creditNoteDate` (string)
- `amountTaxStatus` (other)
- `reference` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)

### creditnotes_getcreditnotelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `lineItemId` (string)

### creditnotes_deletelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `lineItemId` (string)

### creditnotes_updatecreditnotelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)

### creditnotes_patchcreditnotelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)

### creditnotes_addlineitemtocreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)

### creditnotes_createcreditnotetransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `transactionId` (string)
- `transactionAmount` (number)
- `transactionType` (other)

### creditnotes_patchcreditnotetransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `linkId` (string)
- `transactionAmount` (number)

### creditnotes_unlinktransaction

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `creditNoteId` (string)
- `linkId` (string)

### customers_getcustomers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)

### customers_createcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `entityTypes` (other)
- `creditLimit` (number)
- `paymentTerms` (string)
- `transactionPassword` (other)
- `customFields` (array)
- `excludeFromInvoiceReminders` (boolean)

### customers_getcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_updatecustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `entityTypes` (other)
- `creditLimit` (number)
- `paymentTerms` (string)
- `transactionPassword` (other)
- `customFields` (array)
- `excludeFromInvoiceReminders` (boolean)

### customers_patchcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (string)
- `entityTypes` (other)
- `creditLimit` (number)
- `paymentTerms` (string)
- `transactionPassword` (other)
- `excludeFromInvoiceReminders` (boolean)

### customers_deletecustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_getcustomeravailablecredit

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_linkexistingcontacttocustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `contactId` (string)

### customers_unlinkcustomerlinkedcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `contactId` (string)

### customers_addnewcontacttocustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `name` (string)
- `salutation` (string)
- `department` (string)
- `position` (string)
- `status` (other)
- `notes` (string)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)

### customers_deletecontactfromcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `contactId` (string)

### customers_getcustomerlinkedcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `contactId` (string)

### customers_getcustomerphonenumbers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_createcustomerphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)
- `type` (string)

### customers_getcustomerphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_deletecustomerphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_patchcustomerphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### customers_updatecustomerphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### customers_getcustomeraddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_createcustomeraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `type` (string)

### customers_getcustomeraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_updatecustomeraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### customers_patchcustomeraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### customers_deletecustomeraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_patchcustomerelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `address` (string)

### customers_updatecustomerelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `address` (string)

### customers_deletecustomerelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_getcustomerelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_getcustomerelectronicaddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_createcustomerelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `address` (string)

### customers_getcustomercustomfields

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### customers_getcustomercustomfield

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)

### customers_updatecustomercustomfield

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `type` (string)
- `value` (string)

### customers_validatecustomerabn

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `abn` (string)

### defaultsuperfunds_upsertdefaultsuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `fund` (string)
- `fundProduct` (string)

### defaultsuperfunds_getdefaultsuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### defaultsuperfunds_removedefaultsuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### departments_getdepartments

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### departments_createdepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `code` (string)
- `status` (other)
- `notes` (string)
- `managers` (array)
- `employees` (array)

### departments_getdepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)

### departments_updatedepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)
- `name` (string)
- `code` (string)
- `status` (other)
- `notes` (string)
- `managers` (array)
- `employees` (array)

### departments_patchdepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)
- `name` (string)
- `code` (string)
- `status` (other)
- `notes` (string)

### departments_deletedepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)

### departments_linkmanagertodepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)
- `employeeId` (string)

### departments_unlinkdepartmentlinkedmanager

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)
- `employeeId` (string)

### departments_linkemployeetodepartment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)
- `employeeId` (string)

### departments_unlinkdepartmentlinkedemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `departmentId` (string)
- `employeeId` (string)

### electronicaddresstypes_getelectronicaddresstypes

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### electronicaddresstypes_createelectronicaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### electronicaddresstypes_getelectronicaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `electronicAddressTypeId` (string)

### electronicaddresstypes_updateelectronicaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `electronicAddressTypeId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### electronicaddresstypes_patchelectronicaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `electronicAddressTypeId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### electronicaddresstypes_deleteelectronicaddresstype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `electronicAddressTypeId` (string)

### employees_getemployees

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### employees_createemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `firstName` (string)
- `surname` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)

### employees_getemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `employeeId` (string)

### employees_updateemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `employeeId` (string)
- `name` (string)
- `firstName` (string)
- `surname` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)

### employees_patchemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `employeeId` (string)
- `name` (string)
- `firstName` (string)
- `surname` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `status` (other)

### employees_deleteemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `employeeId` (string)

### enterpriseagreements_createenterpriseagreement

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `classifications` (array)

### enterpriseagreements_getenterpriseagreements

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### enterpriseagreements_getenterpriseagreement

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `enterpriseAgreementId` (string)

### enterpriseagreements_deleteenterpriseagreement

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `enterpriseAgreementId` (string)

### enterpriseagreements_updateenterpriseagreement

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `enterpriseAgreementId` (string)
- `name` (string)
- `classifications` (array)

### entities_getentities

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `perPage` (integer)

### entities_getentity

**Environment variables**

No environment variables required

**Input schema**

- `entityId` (string)

### estimates_getestimates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### estimates_createestimate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customer` (string)
- `estimateDate` (string)
- `estimateExpiryDate` (string)
- `amountTaxStatus` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)
- `termsAndConditions` (string)
- `paymentNotes` (string)

### estimates_getestimate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)
- `format` (string)

### estimates_updateestimate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)
- `customer` (string)
- `estimateDate` (string)
- `estimateExpiryDate` (string)
- `amountTaxStatus` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)
- `termsAndConditions` (string)
- `paymentNotes` (string)

### estimates_deleteestimate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)

### estimates_patchestimate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)
- `customer` (string)
- `estimateDate` (string)
- `estimateExpiryDate` (string)
- `amountTaxStatus` (other)
- `status` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `notes` (string)
- `termsAndConditions` (string)
- `paymentNotes` (string)

### estimates_getestimateasinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)

### estimates_getpopulatedemail

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)

### estimates_emailestimate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)
- `toAddresses` (array)
- `ccAddresses` (array)
- `bccAddresses` (array)
- `subject` (string)
- `body` (string)
- `documentNumber` (string)

### estimates_getestimatetransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)
- `linkId` (string)

### estimates_getestimatelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `estimateId` (string)
- `lineItemId` (string)

### expenseclaims_getexpenseclaims

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### expenseclaims_createexpenseclaim

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `employee` (string)
- `claimDate` (string)
- `reference` (string)
- `project` (string)
- `customer` (string)
- `amountTaxStatus` (other)
- `status` (other)
- `lineItems` (array)
- `notes` (string)

### expenseclaims_getexpenseclaim

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `format` (string)

### expenseclaims_updateexpensclaim

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `employee` (string)
- `claimDate` (string)
- `reference` (string)
- `project` (string)
- `customer` (string)
- `amountTaxStatus` (other)
- `status` (other)
- `lineItems` (array)
- `notes` (string)

### expenseclaims_patchexpenseclaim

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `employee` (string)
- `claimDate` (string)
- `reference` (string)
- `project` (string)
- `customer` (string)
- `status` (other)
- `declineReason` (string)
- `notes` (string)

### expenseclaims_deleteexpenseclaim

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)

### expenseclaims_addlineitemtoexpenseclaim

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineNumber` (integer)
- `date` (string)
- `project` (string)
- `supplier` (string)
- `customer` (string)
- `isBillable` (boolean)
- `billableStatus` (other)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)
- `notes` (string)

### expenseclaims_updatelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `date` (string)
- `project` (string)
- `supplier` (string)
- `customer` (string)
- `isBillable` (boolean)
- `billableStatus` (other)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)
- `notes` (string)

### expenseclaims_patchlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `date` (string)
- `project` (string)
- `supplier` (string)
- `customer` (string)
- `isBillable` (boolean)
- `billableStatus` (other)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)
- `notes` (string)

### expenseclaims_deletelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineItemId` (string)

### expenseclaims_downloadattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineItemId` (string)
- `attachmentId` (string)

### expenseclaims_deleteattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineItemId` (string)
- `attachmentId` (string)

### expenseclaims_addattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `expenseClaimId` (string)
- `lineItemId` (string)
- `fileName` (string)

### heartbeat_get

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### heartbeat_throwerror

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### heartbeat_logtest

**Environment variables**

No environment variables required

**Input schema**

No input parameters

### industries_getindustries

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `perPage` (integer)

### industries_getindustry

**Environment variables**

No environment variables required

**Input schema**

- `industryId` (string)

### industries_getindustrycategories

**Environment variables**

No environment variables required

**Input schema**

- `industryId` (string)
- `page` (integer)
- `perPage` (integer)

### industries_getindustrycategory

**Environment variables**

No environment variables required

**Input schema**

- `industryId` (string)
- `categoryId` (string)

### industries_getindustrycategorybusinesstypes

**Environment variables**

No environment variables required

**Input schema**

- `industryId` (string)
- `categoryId` (string)
- `page` (integer)
- `perPage` (integer)

### industries_getindustrycategorybusinesstype

**Environment variables**

No environment variables required

**Input schema**

- `industryId` (string)
- `categoryId` (string)
- `businessTypeId` (string)

### industries_getbusinesstypes

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `perPage` (integer)

### invoiceremindertemplates_getinvoiceremindertemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### invoiceremindertemplates_createinvoicesremindertemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `daysToRemindAfter` (integer)
- `invoiceEmail` (other)

### invoiceremindertemplates_updateinvoicesremindertemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)
- `daysToRemindAfter` (integer)
- `invoiceEmail` (other)

### invoiceremindertemplates_getinvoiceremindertemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### invoiceremindertemplates_patchinvoicesremindertemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)
- `daysToRemindAfter` (integer)
- `invoiceEmail` (other)

### invoiceremindertemplates_deleteinvoiceremindertemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### invoices_getinvoices

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### invoices_createinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ignoreWarnings` (boolean)
- `customer` (string)
- `invoiceDate` (string)
- `dueDate` (string)
- `invoiceDiscountAmount` (number)
- `invoiceDiscountPercent` (number)
- `amountTaxStatus` (other)
- `paymentTerms` (string)
- `reference` (string)
- `purchaseOrderNumber` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `template` (string)
- `includeInInvoiceReminders` (boolean)
- `notes` (string)
- `paymentDetails` (string)
- `customFields` (array)
- `transactionLinks` (array)
- `lineItems` (array)

### invoices_getinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `format` (string)

### invoices_updateinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `ignoreWarnings` (boolean)
- `customer` (string)
- `invoiceDate` (string)
- `dueDate` (string)
- `invoiceDiscountAmount` (number)
- `invoiceDiscountPercent` (number)
- `amountTaxStatus` (other)
- `paymentTerms` (string)
- `reference` (string)
- `purchaseOrderNumber` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `template` (string)
- `includeInInvoiceReminders` (boolean)
- `notes` (string)
- `paymentDetails` (string)
- `customFields` (array)
- `lineItems` (array)

### invoices_patchinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `ignoreWarnings` (boolean)
- `customer` (string)
- `invoiceDate` (string)
- `dueDate` (string)
- `invoiceDiscountAmount` (number)
- `invoiceDiscountPercent` (number)
- `status` (other)
- `paymentTerms` (string)
- `reference` (string)
- `purchaseOrderNumber` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `template` (string)
- `includeInInvoiceReminders` (boolean)
- `notes` (string)
- `paymentDetails` (string)

### invoices_deleteinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)

### invoices_getinvoicesummary

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `baseDate` (string)

### invoices_getcustomerinvoicesummary

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)
- `baseDate` (string)

### invoices_convertinvoicefrom

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ignoreWarnings` (boolean)
- `id` (string)
- `type` (other)

### invoices_unlinktransaction

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `linkId` (string)

### invoices_createtransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `transactionType` (other)
- `transactionId` (string)
- `amount` (number)

### invoices_emailinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `toAddresses` (array)
- `ccAddresses` (array)
- `bccAddresses` (array)
- `subject` (string)
- `body` (string)
- `documentNumber` (string)

### invoices_getpopulatedemail

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)

### invoices_markinvoiceemailassent

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)

### invoices_markinvoiceemailasunsent

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)

### invoices_getlastinvoiceforcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customerId` (string)

### invoices_downloadattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `attachmentId` (string)

### invoices_patchinvoiceattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `attachmentId` (string)
- `isShareable` (boolean)

### invoices_deleteinvoiceattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `attachmentId` (string)

### invoices_getinvoicelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `lineItemId` (string)

### invoices_updatelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `lineItemId` (string)
- `ignoreWarnings` (boolean)
- `lineNumber` (integer)
- `serviceDate` (string)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)
- `isFullWidthDescription` (boolean)
- `parentLineId` (string)
- `rowType` (other)
- `group` (other)
- `transactionLinks` (array)

### invoices_addlineitemtoinvoice

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `ignoreWarnings` (boolean)
- `lineNumber` (integer)
- `serviceDate` (string)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)
- `isFullWidthDescription` (boolean)
- `parentLineId` (string)
- `rowType` (other)
- `group` (other)
- `transactionLinks` (array)

### invoices_patchlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `lineItemId` (string)
- `ignoreWarnings` (boolean)
- `lineNumber` (integer)
- `serviceDate` (string)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)
- `isFullWidthDescription` (boolean)

### invoices_deletelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `lineItemId` (string)
- `ignoreWarnings` (boolean)

### invoices_getrecurringinvoicetemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### invoices_getinvoicehistory

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `page` (integer)
- `perPage` (integer)

### invoices_addinvoicehistorynote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `details` (string)

### invoices_getallocabletransactions

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `page` (integer)
- `perPage` (integer)

### invoices_addattachment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `fileName` (string)

### invoices_getinvoicecustomfields

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)

### invoices_getinvoicecustomfieldbytype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `fieldType` (string)

### invoices_updateinvoicecustomfield

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `invoiceId` (string)
- `type` (string)
- `value` (string)

### items_getitems

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `baseDate` (string)
- `page` (integer)
- `perPage` (integer)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)

### items_createitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `parentItem` (string)
- `itemType` (other)
- `itemCode` (string)
- `status` (other)
- `purchase` (other)
- `sale` (other)
- `amountTaxStatus` (other)

### items_getitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `itemId` (string)
- `baseDate` (string)

### items_deleteitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `itemId` (string)

### items_patchitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `itemId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `parentItem` (string)
- `itemType` (other)
- `itemCode` (string)
- `status` (other)
- `purchase` (other)
- `sale` (other)
- `amountTaxStatus` (other)

### items_updateitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `itemId` (string)
- `name` (string)
- `parentItem` (string)
- `itemType` (other)
- `itemCode` (string)
- `status` (other)
- `purchase` (other)
- `sale` (other)
- `amountTaxStatus` (other)

### journals_getjournals

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### journals_createjournal

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `summary` (string)
- `journalDate` (string)
- `amountTaxStatus` (other)
- `description` (string)
- `adjustingJournal` (boolean)
- `lineItems` (array)

### journals_getjournal

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)

### journals_deletejournal

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)

### journals_updatejournal

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)
- `summary` (string)
- `journalDate` (string)
- `amountTaxStatus` (other)
- `description` (string)
- `adjustingJournal` (boolean)
- `lineItems` (array)

### journals_patchjournal

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)
- `summary` (string)
- `journalDate` (string)
- `amountTaxStatus` (other)
- `description` (string)
- `adjustingJournal` (boolean)

### journals_getjournallineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)
- `lineItemId` (string)

### journals_reversejournal

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)
- `summary` (string)
- `journalDate` (string)
- `description` (string)

### journals_updatelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)
- `lineItemId` (string)
- `reconciliationStatus` (other)
- `transactionType` (other)
- `ledgerAccount` (string)
- `debit` (number)
- `credit` (number)
- `taxRate` (string)
- `taxAmount` (number)
- `notes` (string)
- `entity` (string)
- `project` (string)
- `classification` (string)

### journals_patchlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `journalId` (string)
- `lineItemId` (string)
- `reconciliationStatus` (other)
- `transactionType` (other)
- `ledgerAccount` (string)
- `debit` (number)
- `credit` (number)
- `taxRate` (string)
- `taxAmount` (number)
- `notes` (string)
- `entity` (string)
- `project` (string)
- `classification` (string)

### ledgeraccounts_getledgeraccounts

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)

### ledgeraccounts_createledgeraccount

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `description` (string)
- `parentLedgerAccount` (string)
- `sortOrder` (integer)
- `status` (other)
- `defaultTaxRate` (string)
- `accountType` (other)
- `accountCode` (string)
- `exportCode` (string)
- `bankAccount` (other)
- `creditAccount` (other)

### ledgeraccounts_getledgeraccount

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `accountId` (string)

### ledgeraccounts_deleteledgeraccount

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ledgerAccountId` (string)

### ledgeraccounts_updateledgeraccount

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ledgerAccountId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `description` (string)
- `parentLedgerAccount` (string)
- `sortOrder` (integer)
- `status` (other)
- `defaultTaxRate` (string)
- `accountType` (other)
- `accountCode` (string)
- `exportCode` (string)
- `bankAccount` (other)
- `creditAccount` (other)

### ledgeraccounts_patchledgeraccount

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ledgerAccountId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `description` (string)
- `parentLedgerAccount` (string)
- `sortOrder` (integer)
- `status` (other)
- `defaultTaxRate` (string)
- `accountCode` (string)
- `exportCode` (string)
- `bankAccount` (other)
- `creditAccount` (other)

### novatti_disable

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### paymentmethods_getpaymentmethods

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### payments_getpayments

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### payments_createpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplier` (string)
- `paymentDate` (string)
- `ledgerAccount` (string)
- `paymentMethod` (string)
- `reference` (string)
- `notes` (string)
- `reconciliationStatus` (other)
- `internalNotes` (string)
- `accountsPayableLedgerAccount` (string)
- `classification` (string)
- `transactionLinks` (array)
- `lineItems` (array)
- `totalAmount` (number)

### payments_getpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `format` (string)

### payments_updatepayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `supplier` (string)
- `paymentDate` (string)
- `ledgerAccount` (string)
- `paymentMethod` (string)
- `reference` (string)
- `notes` (string)
- `reconciliationStatus` (other)
- `internalNotes` (string)
- `accountsPayableLedgerAccount` (string)
- `classification` (string)
- `transactionLinks` (array)
- `lineItems` (array)
- `totalAmount` (number)

### payments_patchpayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `supplier` (string)
- `paymentDate` (string)
- `ledgerAccount` (string)
- `paymentMethod` (string)
- `reference` (string)
- `notes` (string)
- `totalAmount` (number)
- `reconciliationStatus` (other)
- `internalNotes` (string)
- `classification` (string)

### payments_deletepayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)

### payments_getallocatedandallocatablepaymenttransactions

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `entityId` (string)
- `payableType` (string)
- `paymentId` (string)

### payments_deletepaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `lineId` (string)

### payments_updatepaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `lineId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### payments_patchpaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `lineId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)

### payments_getpaymentlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `lineItemId` (string)

### payments_addlineitemtopayment

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### payments_createpaymenttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `transactionType` (other)
- `transactionId` (string)
- `transactionAmount` (number)

### payments_patchreceipttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `linkId` (string)
- `transactionAmount` (number)

### payments_getpaymenttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `linkId` (string)

### payments_deletepyamenttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paymentId` (string)
- `linkId` (string)

### paymentterms_getpaymentterms

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### paymentterms_createpaymentterm

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `description` (string)
- `status` (other)
- `isDefault` (boolean)
- `useForInvoice` (boolean)
- `netDueDay` (integer)
- `netDueDaySelection` (other)
- `isDueDateWeekend` (boolean)
- `isIssuedWithinDays` (boolean)
- `issuedWithinDays` (integer)

### paymentterms_updatepaymentterm

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `termId` (string)
- `name` (string)
- `description` (string)
- `status` (other)
- `isDefault` (boolean)
- `useForInvoice` (boolean)
- `netDueDay` (integer)
- `netDueDaySelection` (other)
- `isDueDateWeekend` (boolean)
- `isIssuedWithinDays` (boolean)
- `issuedWithinDays` (integer)

### paymentterms_patchpaymentterm

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `termId` (string)
- `name` (string)
- `description` (string)
- `status` (other)
- `isDefault` (boolean)
- `useForInvoice` (boolean)
- `netDueDay` (integer)
- `netDueDaySelection` (other)
- `isDueDateWeekend` (boolean)
- `isIssuedWithinDays` (boolean)
- `issuedWithinDays` (integer)

### paymentterms_getpaymentterm

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `termId` (string)

### paymentterms_deletepaymentterm

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `termId` (string)

### paymentterms_getpaymenttermduedate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `termId` (string)
- `baseDate` (string)

### paytemplates_getpaytemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### paytemplates_createpaytemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `enterpriseAgreement` (string)
- `award` (string)
- `classifications` (array)

### paytemplates_getpaytemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payTemplateId` (string)

### paytemplates_updatepaytemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paytemplateId` (string)
- `name` (string)
- `classifications` (array)

### paytemplates_deletepaytemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `paytemplateId` (string)

### paytemplates_getpaytemplateclassification

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payTemplateId` (string)
- `classificationId` (string)

### paytemplates_getpaytemplateearnings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payTemplateId` (string)
- `page` (integer)
- `perPage` (integer)

### paytemplates_getpaytemplateallowances

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payTemplateId` (string)
- `page` (integer)
- `perPage` (integer)

### paytemplates_postbatchpaytemplateearningsandallowances

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payTemplateId` (string)
- `processMethod` (other)
- `earningsItems` (array)
- `allowanceItems` (array)

### paytemplates_duplicatepaytemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `payTemplateId` (string)

### permissions_getuserpermissions

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### phonetypes_getphonetypes

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### phonetypes_createphonetype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### phonetypes_getphonetype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `phoneTypeId` (string)

### phonetypes_updatephonetype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `phoneTypeId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### phonetypes_patchphonetype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `phoneTypeId` (string)
- `name` (string)
- `description` (string)
- `status` (other)

### phonetypes_deletephonetype

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `phoneTypeId` (string)

### projects_getprojects

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### projects_createproject

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `status` (other)
- `amountTaxStatus` (other)
- `parentProject` (string)
- `startDate` (string)
- `endDate` (string)
- `description` (string)
- `billingMethod` (other)
- `items` (array)
- `customers` (array)
- `suppliers` (array)

### projects_getproject

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)

### projects_updateproject

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `name` (string)
- `status` (other)
- `amountTaxStatus` (other)
- `parentProject` (string)
- `startDate` (string)
- `endDate` (string)
- `description` (string)
- `billingMethod` (other)
- `items` (array)
- `customers` (array)
- `suppliers` (array)

### projects_patchproject

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `name` (string)
- `status` (other)
- `amountTaxStatus` (other)
- `parentProject` (string)
- `startDate` (string)
- `endDate` (string)
- `description` (string)
- `billingMethod` (other)

### projects_deleteproject

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)

### projects_deleteprojectitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `lineId` (string)

### projects_patchprojectitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `lineId` (string)
- `item` (string)
- `projectRate` (number)

### projects_deleteprojectcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `lineId` (string)

### projects_patchprojectcustomer

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `lineId` (string)
- `customer` (string)

### projects_deleteprojectsupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `lineId` (string)

### projects_patchprojectsupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `projectId` (string)
- `lineId` (string)
- `supplier` (string)

### receipts_getreceipts

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### receipts_createreceipt

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `customer` (string)
- `receiptDate` (string)
- `ledgerAccount` (string)
- `paymentMethod` (string)
- `reference` (string)
- `notes` (string)
- `totalAmount` (number)
- `reconciliationStatus` (other)
- `internalNotes` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `lineItems` (array)
- `transactionLinks` (array)

### receipts_getreceipt

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `format` (string)

### receipts_updatereceipt

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `customer` (string)
- `receiptDate` (string)
- `ledgerAccount` (string)
- `paymentMethod` (string)
- `reference` (string)
- `notes` (string)
- `totalAmount` (number)
- `reconciliationStatus` (other)
- `internalNotes` (string)
- `accountsReceivableLedgerAccount` (string)
- `classification` (string)
- `lineItems` (array)
- `transactionLinks` (array)

### receipts_patchreceipt

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `customer` (string)
- `receiptDate` (string)
- `ledgerAccount` (string)
- `paymentMethod` (string)
- `reference` (string)
- `notes` (string)
- `totalAmount` (number)
- `reconciliationStatus` (other)
- `internalNotes` (string)
- `classification` (string)

### receipts_deletereceipt

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)

### receipts_getallocatedandallocatablepaymenttransactions

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `entityId` (string)
- `receiptId` (string)

### receipts_getreceiptlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `lineItemId` (string)

### receipts_updatereceiptlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)

### receipts_addlineitemtoreceipt

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)
- `taxIsModified` (boolean)

### receipts_patchreceiptlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxAmount` (number)
- `taxRate` (string)

### receipts_deletereceiptlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `lineId` (string)

### receipts_createreceipttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `transactionId` (string)
- `transactionAmount` (number)
- `transactionType` (other)

### receipts_patchreceipttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `linkId` (string)
- `transactionAmount` (number)

### receipts_deletereceipttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `receiptId` (string)
- `linkId` (string)

### reports_getreports

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### reports_getpayrollleavebalancesandaccrualvaluereportpost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getpayrollleavebalancesandaccrualvaluereportget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getpayrolldetailreportpost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getpayrolldetailreportget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getpayrolltransactionssummaryreportpost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getpayrolltransactionssummaryreportget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getsupertransactionsreportpost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getsupertransactionsreportget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_gettimesheetreportpost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_gettimesheetreportget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getsupercontributionsbyemployeereportpost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### reports_getsupercontributionsbyemployeereportget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `parameters` (other)
- `format` (string)
- `download` (boolean)

### roles_getroles

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### roles_createrole

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `description` (string)
- `permissions` (other)

### roles_getrole

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `roleId` (integer)

### roles_deleterole

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `roleId` (integer)

### roles_patchrole

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `roleId` (integer)
- `name` (string)
- `description` (string)
- `permissions` (other)

### roles_linkusertorole

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `roleId` (integer)
- `userId` (string)

### roles_unlinkdepartmentlinkedemployee

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `roleId` (integer)
- `userId` (string)

### settings_getsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_putsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `startDate` (string)
- `lockOffDate` (string)
- `entity` (string)
- `industry` (string)
- `category` (string)
- `businessType` (string)
- `replyToEmailAddress` (string)
- `showEmailSentFrom` (string)
- `bankDataRetrievalDays` (integer)
- `generalDetails` (other)
- `addresses` (array)
- `contactDetails` (other)

### settings_patchsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `startDate` (string)
- `lockOffDate` (string)
- `entity` (string)
- `industry` (string)
- `category` (string)
- `businessType` (string)
- `replyToEmailAddress` (string)
- `showEmailSentFrom` (string)
- `bankDataRetrievalDays` (integer)
- `generalDetails` (other)
- `contactDetails` (other)

### settings_patchsettingsaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `town` (string)
- `suburb` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### settings_patchsettingscontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `type` (string)
- `areaCode` (string)
- `number` (string)

### settings_patchsettingscontactelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `type` (string)
- `address` (string)

### settings_gettaxsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchtaxsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `taxRegistered` (boolean)
- `reportingBasis` (other)
- `amountTaxStatus` (other)
- `defaultSalesTaxLedgerAccount` (string)
- `defaultPurchasesTaxLedgerAccount` (string)
- `taxAmountEditable` (boolean)
- `chooseAmountTaxStatus` (boolean)
- `basSettings` (other)
- `gstSettings` (other)
- `vatSettings` (other)
- `emailSettings` (other)

### settings_getinvoicesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchinvoicesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `approvalEnabled` (boolean)
- `prefix` (string)
- `defaultTemplate` (string)
- `nextInvoiceNumber` (integer)
- `defaultPaymentDetails` (string)
- `serviceDateOnInvoice` (boolean)
- `emailSettings` (other)
- `defaultLineItemAccount` (string)

### settings_getcreditnotesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchcreditnotesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `prefix` (string)
- `defaultTemplate` (string)
- `emailSettings` (other)

### settings_getreceiptsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchreceiptsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `prefix` (string)
- `defaultBankAccount` (string)
- `emailSettings` (other)

### settings_getpayrollsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchpayrollsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `isStpV2Enabled` (boolean)
- `isPreparingForStpV2` (boolean)
- `legalContact` (other)
- `payrollSetup` (other)
- `defaultAccounts` (other)
- `defaultPayments` (other)
- `automaticPayrollPayments` (boolean)
- `defaultBankAccounts` (other)
- `isReducingOteHoursEnabled` (boolean)

### settings_patchpayrollsettingscontactphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `type` (string)
- `areaCode` (string)
- `number` (string)

### settings_patchpayrollsettingselectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `type` (string)
- `address` (string)

### settings_gettimeentrysettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchtimeentrysettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `approvalEnabled` (boolean)
- `firstDayOfWeek` (other)
- `transferBillableTimeAs` (other)

### settings_getclassificationsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchclassificationsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `classificationsEnabled` (boolean)

### settings_getbillsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchbillsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `approvalEnabled` (boolean)
- `prefix` (string)
- `defaultTemplate` (string)
- `emailSettings` (other)

### settings_getpaymentsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchpaymentsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `defaultBankAccount` (string)
- `emailSettings` (other)

### settings_getreportsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchreportsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `reportBasis` (other)
- `reportAgeingBasis` (other)
- `pdfSetup` (other)

### settings_getpayslipsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchpayslipsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `emailSettings` (other)

### settings_getsuppliercreditnotesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchsuppliercreditnotesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `prefix` (string)
- `defaultTemplate` (string)

### settings_postsuperstreamsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `selectedProvider` (other)

### settings_getsuperstreamsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_getsuperstreambeamurlsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_syncbeamdetails

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `participantId` (string)

### settings_getinvoiceremindertemplatesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### settings_patchinvoiceremindertemplatesettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `remindersEnabled` (boolean)
- `emailSettings` (other)

### settings_patchexpenseclaimsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `approvalEnabled` (boolean)
- `prefix` (string)
- `transferBillableExpense` (other)

### settings_getexpenseclaimsettings

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### statutoryrate_getsuperstatutoryrates

**Environment variables**

No environment variables required

**Input schema**

- `page` (integer)
- `perPage` (integer)

### statutoryrate_getsuperstatutoryrate

**Environment variables**

No environment variables required

**Input schema**

- `basedate` (string)

### superfundproviders_getsuperfundproviders

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### superfundproviders_searchsuperfundproviderspost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `searchText` (string)
- `first` (integer)

### superfundproviders_searchsuperfundprovidersget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `searchText` (string)
- `first` (integer)

### superfundproviders_getsuperfundprovidershavingusi

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `usi` (string)
- `page` (integer)
- `perPage` (integer)

### superfundproviders_getsuperfundprovider

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundProviderId` (string)

### superfundproviders_getsuperfundproviderproducts

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundProviderId` (string)
- `page` (integer)
- `perPage` (integer)

### superfundproviders_getsuperfundproviderproduct

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundProviderId` (string)
- `productId` (string)

### superfundproviders_getsuperfundproduct

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `productId` (string)

### superfundproviders_searchsuperfundproductspost

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `searchText` (string)
- `first` (integer)

### superfundproviders_searchsuperfundproductsget

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `searchText` (string)
- `first` (integer)

### superfundproviders_requestnewsuperfundprovider

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `name` (string)
- `abn` (string)
- `usi` (string)

### superfunds_getsuperfunds

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)

### superfunds_createsuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `entityTypes` (other)
- `bankDetails` (other)
- `superFundDetails` (other)

### superfunds_getsuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)

### superfunds_updatesuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `entityTypes` (other)
- `bankDetails` (other)
- `superFundDetails` (other)

### superfunds_patchsuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (string)
- `entityTypes` (other)
- `bankDetails` (other)
- `superFundDetails` (other)

### superfunds_deletesuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)

### superfunds_getsuperfundslinkedcontacts

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `page` (integer)
- `perPage` (integer)

### superfunds_addnewcontacttosuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `name` (string)
- `salutation` (string)
- `department` (string)
- `position` (string)
- `status` (other)
- `notes` (string)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)

### superfunds_getsuperfundslinkedcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `contactId` (string)

### superfunds_linkexistingcontacttosuperfund

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `contactId` (string)

### superfunds_unlinksuperfundslinkedcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `contactId` (string)

### superfunds_getsuperfundphonenumbers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)

### superfunds_createsuperfundphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)
- `type` (string)

### superfunds_getsuperfundphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)

### superfunds_patchsuperfundphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### superfunds_updatesuperfundphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### superfunds_deletesuperfundphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)

### superfunds_getsuperfundaddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)

### superfunds_createsuperfundaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `type` (string)

### superfunds_getsuperfundaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)

### superfunds_updatesuperfundaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### superfunds_patchsuperfundaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### superfunds_deletesuperfundaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)

### superfunds_getsuperfundelectronicaddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)

### superfunds_createsuperfundelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `address` (string)

### superfunds_getsuperfundelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)

### superfunds_updatesuperfundelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `address` (string)

### superfunds_patchsuperfundelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)
- `address` (string)

### superfunds_deletesuperfundelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superfundId` (string)
- `type` (string)

### superstreams_getsuperstreams

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)

### superstreams_createsuperstream

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `fromDate` (string)
- `toDate` (string)
- `description` (string)
- `lineItems` (array)

### superstreams_getsuperstream

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)

### superstreams_updatesuperstream

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)
- `fromDate` (string)
- `toDate` (string)
- `description` (string)
- `lineItems` (array)

### superstreams_patchsuperstream

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)
- `fromDate` (string)
- `toDate` (string)
- `description` (string)
- `status` (other)

### superstreams_deletesuperstream

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)

### superstreams_getunlinkedpayruntransactions

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `fromDate` (string)
- `toDate` (string)
- `page` (integer)
- `perPage` (integer)

### superstreams_generatesaff

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)

### superstreams_deletelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)
- `payrunSuperLineId` (string)

### superstreams_getsuperstreamlineitemdetail

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superStreamId` (string)
- `payrunSuperLineId` (string)

### superstreams_linksuperstreamlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `superstreamId` (string)
- `payrunSuperLineId` (string)

### suppliercreditnotes_getsuppliercreditnotes

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### suppliercreditnotes_createsuppliercreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplier` (string)
- `supplierCreditNoteDate` (string)
- `amountTaxStatus` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)

### suppliercreditnotes_getsuppliercreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)

### suppliercreditnotes_deletesupplierscreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)

### suppliercreditnotes_updatesuppliercreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `supplier` (string)
- `supplierCreditNoteDate` (string)
- `amountTaxStatus` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `lineItems` (array)
- `notes` (string)

### suppliercreditnotes_patchsuppliercreditnote

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `supplier` (string)
- `supplierCreditNoteDate` (string)
- `amountTaxStatus` (other)
- `status` (other)
- `reference` (string)
- `classification` (string)
- `template` (string)
- `notes` (string)

### suppliercreditnotes_deletelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `lineItemId` (string)

### suppliercreditnotes_updatelineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### suppliercreditnotes_getlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `lineId` (string)

### suppliercreditnotes_getpaymenttransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `linkId` (string)

### suppliercreditnotes_addlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### suppliercreditnotes_patchlineitem

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `lineItemId` (string)
- `lineNumber` (integer)
- `project` (string)
- `itemDetails` (other)
- `accountDetails` (other)
- `description` (string)
- `taxRate` (string)
- `taxAmount` (number)

### suppliercreditnotes_createsuppliercreditnotetransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `transactionType` (other)
- `transactionId` (string)
- `transactionAmount` (number)

### suppliercreditnotes_patchcreditnotetransactionlink

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierCreditNoteId` (string)
- `linkId` (string)
- `transactionAmount` (number)

### suppliercreditnotes_unlinktransaction

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `suppliercreditnoteId` (string)
- `linkId` (string)

### suppliers_getsuppliers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)

### suppliers_createsupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `entityTypes` (other)
- `isTpar` (boolean)
- `bankDetails` (other)

### suppliers_getsupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)

### suppliers_updatesupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (other)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)
- `entityTypes` (other)
- `isTpar` (boolean)
- `bankDetails` (other)

### suppliers_patchsupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `ExternalResourceId` (string)
- `ExternalClientId` (string)
- `ExternalTenancyId` (string)
- `name` (string)
- `organisationName` (string)
- `branch` (string)
- `notes` (string)
- `businessNumber1` (string)
- `businessNumber2` (string)
- `businessNumber` (string)
- `status` (string)
- `entityTypes` (other)
- `isTpar` (boolean)
- `bankDetails` (other)

### suppliers_deletesupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)

### suppliers_getsupplieraddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)

### suppliers_createsupplieraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `type` (string)

### suppliers_getsupplieraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)

### suppliers_patchsupplieraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### suppliers_updatesupplieraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `line1` (string)
- `line2` (string)
- `line3` (string)
- `suburb` (string)
- `town` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)

### suppliers_deletesupplieraddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)

### suppliers_getsupplierslinkedcontacts

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `page` (integer)
- `perPage` (integer)

### suppliers_addnewcontacttosupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `name` (string)
- `salutation` (string)
- `department` (string)
- `position` (string)
- `status` (other)
- `notes` (string)
- `addresses` (array)
- `phoneNumbers` (array)
- `electronicAddresses` (array)

### suppliers_getsupplierslinkedcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `contactId` (string)

### suppliers_linkexistingcontacttosupplier

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `contactId` (string)

### suppliers_unlinksupplierlinkedcontact

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `contactId` (string)

### suppliers_getsupplierelectronicaddresses

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)

### suppliers_createsupplierelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `address` (string)

### suppliers_getsupplierelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)

### suppliers_patchsupplierelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `address` (string)

### suppliers_updatesupplierelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `address` (string)

### suppliers_deleteelectronicaddress

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)

### suppliers_getsupplierphonenumbers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)

### suppliers_createsupplierphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)
- `type` (string)

### suppliers_getsupplierphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)

### suppliers_patchsupplierphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### suppliers_updatesupplierphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)
- `countryCode` (string)
- `areaCode` (string)
- `number` (string)
- `extension` (string)

### suppliers_deletesupplierphonenumber

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `type` (string)

### suppliers_validatesupplierabn

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `supplierId` (string)
- `abn` (string)

### tax_gettaxgroups

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `effectiveDate` (string)
- `page` (integer)
- `perPage` (integer)

### tax_gettaxgroup

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `taxGroupId` (string)
- `effectiveDate` (string)

### tax_gettaxrates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `effectiveDate` (string)
- `page` (integer)
- `perPage` (integer)

### tax_gettaxrate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `taxRateId` (string)
- `effectiveDate` (string)

### templates_gettemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_gettemplatelogo

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_gettemplateheaderimage

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getinvoicetemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getinvoicetemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getestimatetemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getestimatetemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getcustomeradjustmentnotestemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getcustomeradjustmentnotestemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getbilltemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getbilltemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getsupplieradjustmentnotestemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getsupplieradjustmentnotestemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getexpenseclaimstemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getexpenseclaimsstemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### templates_getcustomerstatementstemplates

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### templates_getcustomerstatementstemplate

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `templateId` (string)

### timeentries_gettimeentries

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### timeentries_createtimeentry

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `employee` (string)
- `timeEntryDate` (string)
- `project` (string)
- `customer` (string)
- `classification` (string)
- `billable` (boolean)
- `item` (string)
- `payrollItem` (string)
- `time` (other)
- `notes` (string)
- `declineReason` (string)

### timeentries_gettimeentry

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `timeEntryId` (string)

### timeentries_updatetimeentry

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `timeEntryId` (string)
- `employee` (string)
- `timeEntryDate` (string)
- `project` (string)
- `customer` (string)
- `classification` (string)
- `billable` (boolean)
- `item` (string)
- `payrollItem` (string)
- `time` (other)
- `notes` (string)
- `declineReason` (string)

### timeentries_deletetimeentry

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `timeEntryId` (string)

### timeentries_patchtimeentry

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `timeEntryId` (string)
- `employee` (string)
- `timeEntryDate` (string)
- `project` (string)
- `customer` (string)
- `classification` (string)
- `billable` (boolean)
- `approvalStatus` (other)
- `item` (string)
- `payrollItem` (string)
- `time` (other)
- `notes` (string)
- `declineReason` (string)

### users_getusers

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `page` (integer)
- `perPage` (integer)

### users_updateuserroles

**Environment variables**

No environment variables required

**Input schema**

- `bookId` (string)
- `userId` (string)
- `roles` (array)

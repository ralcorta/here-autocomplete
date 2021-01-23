# Here Autocomplete

Here Autocomplete for **Node**

Get locations without headache with OAuth authentication from Here.com to use in production. Just pass the credentials or a token if you took it from past request and wala, you can search by free text on here.com

## Install

```cmd
$ npm i here-autocomplete --save
```

## Quick Start

```ts
    let hereAutocomplete = new HereAutocomplete({
            accessKeyId: 'KEY_ID',
            accessKeySecret: 'KEY_SECRET',
            // token: 'TOKEN_FROM_PAST_REQUEST_IF_YOU_HAVE'
        })

     const response = await hereAutocomplete.search(query);
```

## Dependecies
-   axios
-   crypto
-   oauth-1.0a
-   qs

# whoami
quick JSON API that returns your IP address and headers.

[![](https://deno.com/deno-deploy-button.svg)](https://dash.deno.com/new?url=https://github.com/often/whoami/blob/main/whoami.js)

# Get IP address and headers

## JS
```js
let whoami = 'https://whoami.deno.dev'
let response = await fetch(whoami)
let data = await response.json()

console.log(data)
```

## CLI
`curl https://whoami.deno.dev?pretty`

# Get IP address only

## JS
```js
let whoami = 'https://whoami.deno.dev?ip'
let response = await fetch(whoami)
let ip = await response.text()

console.log(ip)
```

## CLI
`curl https://whoami.deno.dev?ip`

## license
[0BSD](LICENSE)

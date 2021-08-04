let handle = request =>
{
  let url = new URL(request.url)
  let ip = request.headers.get('x-forwarded-for')
  let response
  let type

  if (url.searchParams.has('ip'))
  {
    response = ip
    type = 'text/plain'
  }
  else
  {
    response = { ip, headers: {} }
    type = 'application/json'

    for (let [name, value] of request.headers) response.headers[name] = value

    if (url.searchParams.has('pretty')) response = JSON.stringify(response, null, 2)
    else response = JSON.stringify(response)
  }

  response += '\n'

  return new Response(response, {
    headers: {
      'content-type': `${type}; charset=utf-8`,
      'access-control-allow-origin': '*'
    }
  })
}

addEventListener('fetch', event => event.respondWith(handle(event.request)))

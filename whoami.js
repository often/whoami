let handle = request =>
{
  let url = new URL(request.url)
  let response = {}
  
  for (let [name, value] of request.headers)
  response[name] = value
  
  if (url.search) response = JSON.stringify({ ...response }, null, 2)
  else response = JSON.stringify({ ...response })
  
  return new Response(response, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    }
  })
}

addEventListener('fetch', event => event.respondWith(handle(event.request)))

import { useAuthStore } from '../stores/auth.store'

export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE'),
  patch: request('PATCH')
}

function request(method: string) {
  return (url: string, body: any) => {
    const requestOptions: any = {
      method,
      headers: authHeader(url)
    }
    if (body) {
      requestOptions.headers['Content-Type'] =
        typeof body === 'string' ? 'application/json' : 'application/x-www-form-urlencoded'
      requestOptions.body = body
    }
    return fetch(url, requestOptions).then(handleResponse)
  }
}

function authHeader(url: string) {
  const { jwt } = useAuthStore()
  const isLoggedIn = !!jwt
  const isApiUrl = url.startsWith('/api')
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${jwt}` }
  } else {
    return {}
  }
}

function handleResponse(response: any) {
  return response
    .text()
    .then((text: string) => {
      const data = text && JSON.parse(text)

      if (!response.ok) {
        const { jwt, logout } = useAuthStore()
        if ([401, 403, 500].includes(response.status) && jwt) {
          logout()
        }

        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
      }

      return data
    })
    .catch(() => {
      const { jwt, logout } = useAuthStore()
      if ([401, 403, 500].includes(response.status) && jwt) {
        logout()
      }

      const error = response.statusText
      return Promise.reject(error)
    })
}

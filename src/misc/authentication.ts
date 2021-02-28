export const getAuthToken = () => {
  return localStorage.getItem("token");
}

export const setAuthToken = (token: string) => {
  localStorage.setItem("token", token);
}

export const clearAuthToken = () => {
  localStorage.removeItem("token");
}

// Convenience function, returns header to pass to `fetch` api
export const getAuthHeader = () => {
  return ['x-auth-token', getAuthToken()!]
}
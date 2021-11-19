export function isAuthenticated () {
  console.log('AUTH CHECK' + localStorage.getItem('auth'))
  return localStorage.getItem('auth')
}
export default function useAuth () {
  return isAuthenticated
}

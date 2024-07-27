export const getGoogleAuthURL = () => {
  // Google Login Variables
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_OAUTH_REDIRECT_URL;
  const SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  const RESPONSE_TYPE = 'code';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${RESPONSE_TYPE}&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=${encodeURIComponent(SCOPE)}`;
  return authUrl;
}
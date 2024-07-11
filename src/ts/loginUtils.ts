export const getGoogleAuthURL = () => {
  // Google Login Variables
  const GOOGLE_AUTH_BASE_URL = import.meta.env.VITE_GOOGLE_AUTH_BASE_URL;
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_OAUTH_CLIENT_ID;
  const GOOGLE_REDIRECT_URI = import.meta.env
    .VITE_APP_GOOGLE_OAUTH_REDIRECT_URL;
  const SCOPE = import.meta.env.VITE_APP_GOOGLE_OAUTH_SCOPE;
  const RESPONSE_TYPE = "code";

  return `${GOOGLE_AUTH_BASE_URL}response_type=${RESPONSE_TYPE}&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=${encodeURIComponent(
    SCOPE
  )}`;
};

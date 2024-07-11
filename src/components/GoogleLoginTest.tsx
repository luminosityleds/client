import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import Header from "./Header";
import { useToggle } from "../ts/ToggleHeader";
import { useGoogleLogin } from "@react-oauth/google";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle, faMicrosoft, faGithub} from "@fortawesome/free-brands-svg-icons";

// Login components
export const GoogleLoginTest = () => {
  function login() {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=${RESPONSE_TYPE}&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=${encodeURIComponent(SCOPE)}`;
    window.location.href = authUrl;
  } 
  return (
  <div>
    <button className="third-party-btn" onClick={() => login()}>
      <FontAwesomeIcon className="third-party-icon" icon={faGoogle} size="2x" fixedWidth/>Login with Google
    </button>
  </div>
);
};
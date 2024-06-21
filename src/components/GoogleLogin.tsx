import axios from "axios"
import { useGoogleLogin } from "@react-oauth/google"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export const GoogleLogin = () => {
    const login = useGoogleLogin({
      onSuccess: async response => {
        try {
          const google_response = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", 
          {
            headers: {
              "Authorization": `Bearer ${response.access_token}` 
            }
          })
          
          const google_data = {
            email: google_response.data.email,
            name: google_response.data.name
          }
          
          const login_response = axios.post('http://localhost:5000/',
          google_data
          ).then(response => {
            if (response.data.success === true) {
              // Set that the user is now logged in
              window.localStorage.setItem("isLoggedIn", "true")
              window.localStorage.setItem("userName", google_data.name)
  
              // Go back to the homepage
              window.location.href = "/"
            }
  
            else if (response.data.success === false) {
              // Go to the registration page
              window.location.href = "/register"
            }
          });
        }
        catch (err) {
          console.log(err);
        }
      }
    });
  
    return (
    <div>
      <button className="third-party-btn" onClick={() => login()}>
        <FontAwesomeIcon className="third-party-icon" icon={faGoogle} size="2x" fixedWidth/>Login with Google
      </button>
    </div>
  );
  };
import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLogin } from "./GoogleLogin"

export const TestLogin = () => {
    return (
        <GoogleOAuthProvider clientId="337166284035-e9g7u5rcp0fam8o2bbrcj2o8nct3tabb.apps.googleusercontent.com">
          <GoogleLogin />
        </GoogleOAuthProvider>
    )
}
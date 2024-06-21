import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Header from "./Header";
import { useToggle } from "../ts/ToggleHeader";
import { getGoogleUrl } from '../../utils/getGoogleUrl';
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google"
import { GoogleLogin } from "./GoogleLogin";
import { Link } from "react-router-dom";

export const Login = () => {
    const lightMode = useToggle((state) => state.light);


    return(   
    <div className={`"App" ${lightMode ? "bg-card-light-blue" : "dark bg-card-dark-blue"} min-h-screen flex flex-col`}>
        <Header /> 
        <div className="relative flex flex-grow">
            <div className="flex flex-col items-center justify-center flex-1">
                <button 
                    className={`${ 
                        lightMode
                            ? "bg-card-sky-blue border-black hover:bg-electric-blue"
                            : "bg-black text-white hover:bg-charcoal-black" 
                    } border-[3px] rounded-[15px] border-radius: 15px w-[720px] h-[120px] py-2 px-12 mb-24 flex items-center justify-center`}
                >
                    <FontAwesomeIcon
                    icon={icon({ name: 'github', style: 'brands' })}
                    className="mr-2 h-12" 
                    /> 
                    <span className="flex-grow text-base">
                        <p className={`${
                            lightMode
                                ? "text-duke-blue"
                                : "text-white"
                        } text-[48px] ml-2`}>Log In with Github</p>
                        </span>
                </button>
                    
                <button
                    className={`${
                        lightMode 
                            ? "bg-card-sky-blue border-black hover:bg-electric-blue"
                            : "bg-black text-white hover:bg-charcoal-black" 
                    } border-[3px] rounded-[15px] w-[720px] h-[120px] py-2 px-12 mb-12 flex items-center justify-center`}
                    >
                    {/* <FontAwesomeIcon
                    icon={icon({ name: 'google', style: 'brands' })}
                    className="mr-2 h-12" 
                    /> */}
                    {/* google login test */}
                    <GoogleOAuthProvider clientId="337166284035-e9g7u5rcp0fam8o2bbrcj2o8nct3tabb.apps.googleusercontent.com">
                        <GoogleLogin />
                    </GoogleOAuthProvider>
                    {/* <span className="flex-grow text-base">
                    <p className={`${
                            lightMode
                                ? "text-duke-blue"
                                : "text-white"
                        } text-[48px] ml-2`}>Log In with Google</p>
                        </span> */}
                </button>
                {/* <Link
                    to={getGoogleUrl(from)}
                >
                </Link>   */}
                    
                <div 
                    className="text-[24px] mb-10">
                <span
                    className={`${
                        lightMode
                            ? "text-duke-blue hover:text-sapphire-blue"
                            : "text-white hover:text-suva-grey" 
                    }`}
                >Forgot Password? </span> 
                <span 
                    className={`${
                        lightMode
                            ? "text-duke-blue"
                            : "text-white" 
                    }`}
                >|</span> 
                <span
                    className={`${
                        lightMode
                            ? "text-duke-blue hover:text-sapphire-blue"
                            : "text-white hover:text-suva-grey" 
                    }`}
                > Register</span>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Login;
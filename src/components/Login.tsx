import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Header from "./Header";
import { useToggle } from "../ts/ToggleHeader";

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
                                ? "bg-white text-black"
                                : "bg-black text-white"
                            } w-[720px] h-[120px] mt-[240px] py-2 px-4 rounded mb-12`}
                    >
                        <FontAwesomeIcon
                        icon={icon({ name: 'github', style: 'brands' })}
                        
                        /> Log In with Github
                        </button>
                  
                        <button 
                            className={`${
                                lightMode 
                                    ? "bg-white text-black"
                                    : "bg-black text-white" 
                            } w-[720px] h-[120px] py-2 px-4 rounded mt-12 mb-8`}
                        >
                        <FontAwesomeIcon
                        icon={icon({ name: 'google', style: 'brands' })}
                        /> Log In with Google
                        </button>  
               
                <p 
                    className={`${
                        lightMode
                            ? "text-black"
                            : "text-white" 
                    } mt-8`}
                >
                    Forgot Password? | Register
                </p>
            </div>
            </div>
        </div>
    )
}

export default Login;
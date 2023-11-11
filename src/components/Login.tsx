import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import Header from "./Header";
import { useToggle } from "../ts/ToggleHeader";

export const Login = () => {
    const lightMode = useToggle((state) => state.light);


    return(
        <div className={`"App" ${lightMode ? "bg-card-light-blue" : "dark bg-card-dark-blue"}` }>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen">
                <ul>
                    <li>
                        <button 
                            className={`${
                                lightMode
                                    ? "bg-white text-black"
                                    : "bg-black text-white"
                             } w-72 h-12 py-2 px-4 rounded mb-12`}
                        >
                        <FontAwesomeIcon
                        icon={icon({ name: 'github', style: 'brands' })}
                        
                        /> Log In with Github
                        </button>
                    </li>
                    <li>
                        <button 
                            className={`${
                                lightMode 
                                    ? "bg-white text-black"
                                    : "bg-black text-white" 
                            } w-72 h-12 py-2 px-4 rounded mt-12 mb-8`}
                        >
                        <FontAwesomeIcon
                        icon={icon({ name: 'google', style: 'brands' })}
                        /> Log In with Google
                        </button>  
                    </li>
                </ul>
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
        
    )
}

export default Login;
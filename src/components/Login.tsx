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
                            ? "bg-electric-blue border-black hover:bg-card-light-blue"
                            : "bg-black text-white hover:bg-suva-grey" 
                    } border w-[720px] h-[120px] py-2 px-12 rounded-lg mb-24 flex items-center justify-center`}
                >
                    <FontAwesomeIcon
                    icon={icon({ name: 'github', style: 'brands' })}
                    className="mr-2 h-12" 
                    /> 
                    <span className="flex-grow text-base">
                        <p className="text-[48px] ml-2">Log In with Github</p>
                        </span>
                </button>
                    
                    
                <button 
                    className={`${
                        lightMode 
                            ? "bg-electric-blue border-black hover:bg-card-light-blue"
                            : "bg-black text-white hover:bg-suva-grey" 
                    } border w-[720px] h-[120px] py-2 px-12 rounded-lg mb-12 flex items-center justify-center`}
                    >
                    <FontAwesomeIcon
                    icon={icon({ name: 'google', style: 'brands' })}
                    className="mr-2 h-12" 
                    /> 
                    <span className="flex-grow text-base">
                    <p className="text-[48px] ml-2">Log In with Google</p>
                        </span>
                </button>  
                    
                <div 
                    className="text-[24px] mb-10">
                <span
                    className={`${
                        lightMode
                            ? "text-duke-blue hover:text-electric-blue"
                            : "text-white hover:text-suva-grey" 
                    }`}
                >Forgot Password? </span> 
                <span 
                    className={`${
                        lightMode
                            ? "text-electric-blue"
                            : "text-suva-grey" 
                    }`}
                >|</span> 
                <span
                    className={`${
                        lightMode
                            ? "text-duke-blue hover:text-electric-blue"
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
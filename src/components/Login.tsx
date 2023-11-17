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
                            ? "bg-duke-blue"
                            : "bg-black" 
                    } text-white w-[720px] h-[120px] py-2 px-12 rounded mb-32 flex items-center justify-center`}
                >
                    <FontAwesomeIcon
                    icon={icon({ name: 'github', style: 'brands' })}
                    className="mr-2 h-12" 
                    /> 
                    <span className="flex-grow text-base">
                        <p className="text-[48px]">Log In with Github</p>
                        </span>
                </button>
                    
                    
                <button 
                    className={`${
                        lightMode 
                            ? "bg-duke-blue"
                            : "bg-black" 
                    } text-white w-[720px] h-[120px] py-2 px-12 rounded mb-16 flex items-center justify-center`}
                    >
                    <FontAwesomeIcon
                    icon={icon({ name: 'google', style: 'brands' })}
                    className="mr-2 h-12" 
                    /> 
                    <span className="flex-grow text-base">
                    <p className="text-[48px]">Log In with Google</p>
                        </span>
                </button>  
                    
                <p 
                    className={`${
                        lightMode
                            ? "text-duke-blue"
                            : "text-white" 
                    } text-[24px] mb-10`}
            >
                Forgot Password? | Register
                </p>
            </div>
        </div>
    </div>
        
    )
}

export default Login;
import Header from "./Header";
import { useToggle } from "../ts/ToggleHeader";

export const Login = () => {
    const lightMode = useToggle((state) => state.light);
    return(
        <div className={`"App" ${lightMode ? "" : "dark"}` }>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen">
                <ul>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login with Github
                        </button>
                    </li>
                    <li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login with Google
                        </button>  
                    </li>
                </ul>
                <p>Forgot Password? | Register</p>
            </div>
        </div>
        
    )
}

export default Login;
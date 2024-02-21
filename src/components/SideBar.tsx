import React from "react";
import { useToggle } from "../ts/ToggleHeader";
import Header from "./Header";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export const Acc = () => {

    const lightMode = useToggle((state) => state.light);
return (
    <div className={`"App" ${lightMode ? "bg-card-light-blue" : "dark bg-card-dark-blue"}min-h-screen flex flex-col`}>
        
       
       
        <div className={`"App" ${lightMode ? "bg-[#88dbe1]" : "dark bg-black"} h-screen flex flex-col w-1/4 `}>
            <h1 className = "relative py-10 font-sans text-3xl font-bold text-black dark:text-white left-9 ">User Setting</h1>
            
            <div className = "flex flex-col text-center ">
                
            <button className = "font-sans text-2xl text-black bg-red-600 dark:text-white"> Devices </button>


            
            <button className = "font-sans text-xl text-black bg-red-600 dark:text-white"> <span className="flex-grow text-base">
                    <p className={`${
                            lightMode
                                ? "text-duke-blue"
                                : "text-white"
                        } text-[10px] ml-2`}>Notifications</p>
                        </span> </button>
            <button className = "justify-self-center"> end</button>

            
            </div>

        
        </div>















    </div>    
)

}    

export default Acc;
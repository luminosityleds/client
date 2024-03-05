import React from "react";
import { useToggle } from "../ts/ToggleHeader";
import Header from "./Header";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import LogoIcon from "./LogoIcon";


export const SideBarButton = () => {

    const lightMode = useToggle((state) => state.light);
return (
 <div className={`"App" ${lightMode ? "bg-card-light-blue" : "dark bg-card-dark-blue"}min-h-screen flex flex-col  `}>

    <h1 className = "pt-[32px] font-sans text-2xl font-bold text-[#000274] dark:text-white pl-[32px]">User Setting</h1>

        <div className = " pl-[32px] px-[32px] text-[#000274] dark:text-white  ">
            <div className = "flex flex-col ">
                <div className = "pl-[32px]">
                <FontAwesomeIcon icon={faLightbulb}/>
                    <button className= "font-bold  bg-[#88dbe1] dark:bg-black  h-[40px]  text-left ml-2">
                        Devices
                            </button>
                </div>   

    
                <div className = " pl-[32px] " >
                    <FontAwesomeIcon icon= {faBell}/>    
                        <button className = "font-sans font-bold bg-[#88dbe1] dark:bg-black  h-[40px]   ml-2"> 
                            Notifications 
                        </button>
                </div>   
                    
                     
                <div className = "pl-[32px]">
                    <FontAwesomeIcon icon= {faMagnifyingGlass}/>
                            <button className= "font-bold  bg-[#88dbe1] dark:bg-black h-[40px]  ml-2 ">
                                Search History
                            </button>
                </div>       
                
                <div className = "pl-[32px]">
                    <FontAwesomeIcon icon= {faMagnifyingGlass}/>
                            <button type = "button"className= "font-bold  bg-[#88dbe1] dark:bg-black h-[40px]  ml-2 rounded-lg border-black ">
                                Search History
                                         </button>
                </div>       

                
                <div className = " pl-[32px]">
                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium
                 text-gray-900 focus:outline-none bg-white rounded-lg border
                  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 
                  focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 
                  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                  dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>


                <button type="button" className="text-white bg-gray-800
                                     hover:bg-gray-900 focus:outline-none focus:ring-4 
                                        focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                                            dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                             Dark</button>
                </div>
                       
            </div>
        </div>
</div>
      
              
)
}

export default SideBarButton;


import React from "react";
import { useToggle } from "../ts/ToggleHeader";
import Header from "./Header";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export const SideBarButton = () => {

    const lightMode = useToggle((state) => state.light);
return (
 <div className={`"App" ${lightMode ? "bg-card-light-blue" : "dark bg-card-dark-blue"}min-h-screen flex flex-col  `}>

    <h1 className = "pt-[32px] font-sans text-2xl font-bold text-[#000274] dark:text-white pl-[32px]">User Setting</h1>

        <div className = " pl-[32px] px-[32px]  ">
            <div className = "flex flex-col ">
                <div>
                <FontAwesomeIcon icon= {faBell}/>
                <button className= "font-bold text-[#000274] bg-[#88dbe1]  hover:bg-blue-700 h-[40px] dark:text-white dark:bg-black text-left">
                 Devices
                    </button>
                    </div>   
            <button className = "font-sans font-bold bg-[#88dbe1] hover:bg-blue-700  dark:text-white h-[40px] text-[#000274] dark:bg-black"> 
                Notifications 
                    </button>
                    <div>   
                        <FontAwesomeIcon icon= {faMagnifyingGlass}/>
                            <button className= "font-bold text-[#000274] bg-[#88dbe1] dark:bg-black hover:bg-blue-700 h-[40px] dark:text-white">
                                Search History
                                </button>
                    </div>          
            </div>
        </div>
</div>
      
              
)
}

export default SideBarButton;


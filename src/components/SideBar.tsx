import React from "react";
import { useToggle } from "../ts/ToggleHeader";
import Header from "./Header";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import SideBarButton from "./sideBarButton";

export const Acc = () => {

    const lightMode = useToggle((state) => state.light);
return (
  
        
       
       
        <div className={`"App" ${lightMode ? "bg-[#88dbe1]" : "dark bg-black"} h-screen flex flex-col w-1/4 `}>

            <SideBarButton/>
          
            </div>

        
     















    
)

}    

export default Acc;
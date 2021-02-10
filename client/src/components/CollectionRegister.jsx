import React from "react"
import SidebarBeforeLogin from "../components/SidebarBeforeLogin/SidebarBeforeLogin"
import FormRegister from "../components/FormRegister/FormRegister"

function CollectionRegister() {

    return(
        <>
            <div className="wrapper">
                <nav id="sidebar">    
                    <SidebarBeforeLogin/>
                </nav>
                <div id="content">
                    <FormRegister/>
                </div>
            </div>  
        </>
    )
}

export default CollectionRegister
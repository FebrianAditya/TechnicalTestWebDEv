import React from "react"
import SidebarBeforeLogin from "../components/SidebarBeforeLogin/SidebarBeforeLogin"
import FormLogin from "../components/FormLogin/FormLogin"

function CollectionLogin() {
    
    return(
        <>
            <div className="wrapper">
                <nav id="sidebar">    
                    <SidebarBeforeLogin/>
                </nav>
                <div id="content">
                    <div className="container">
                        <FormLogin/>
                    </div>  
                </div>
            </div>       
        </>
    )
}

export default CollectionLogin
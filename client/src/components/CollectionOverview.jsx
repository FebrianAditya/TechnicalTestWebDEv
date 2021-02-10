import React from "react"
import SidebarAfterLogin from "../components/SidebarAfterLogin/SidebarAfterLogin"

function CollectionOverview() {
    
    return(
        <>
            <div className="wrapper">
                <nav id="sidebar">    
                    <SidebarAfterLogin/>
                </nav>
                <div id="content">
                    <div className="container">
                        <h1>Overview Page</h1>
                    </div>  
                </div>
            </div>       
        </>
    )
}

export default CollectionOverview
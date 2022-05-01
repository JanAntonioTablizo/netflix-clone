import React from "react";
import Logo from "../images/netflix-logo.png"

const HeaderLogContent = ()=>{
    return(
        <header id="log-header">
            <img src={Logo} alt="Netflix Logo" id="log-logo"/>
        </header>
    );
}

export default HeaderLogContent;
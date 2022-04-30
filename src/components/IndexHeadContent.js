import React from "react";
import Logo from '../images/netflix-logo.png';

const IndexHeadContent = ()=>{
    return(
    <header id="index-header">
        <img src={Logo} alt="Netflix Logo" id="logo"/>
        <button id="signin-btn">Sign In</button>
    </header>
    );
}

export default IndexHeadContent;
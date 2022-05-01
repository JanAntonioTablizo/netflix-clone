import React from "react";
import Logo from '../images/netflix-logo.png';
import { Link } from "react-router-dom";

const IndexHeadContent = ()=>{
    return(
    <header id="index-header">
        <img src={Logo} alt="Netflix Logo" id="logo"/>
        <Link to="/Login" id="signin-btn">Sign In</Link>
    </header>
    );
}

export default IndexHeadContent;
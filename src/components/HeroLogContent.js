import React from "react";
import { Link } from "react-router-dom";

const HeroLogContent = ()=>{
    return(
        <div id="log-hero">
            <form id="log-form">
                <h1 id="log-title">Sign In</h1>
                <input type="text" className="log-form-items" id="log-email-no" placeholder="Email or phone number"/>
                <input type="password" className="log-form-items" id="log-pass" placeholder="Password"/>
                <Link to="/" className="log-form-items" id="log-btn">Sign In</Link>
            </form>
        </div>
    );
}

export default HeroLogContent;
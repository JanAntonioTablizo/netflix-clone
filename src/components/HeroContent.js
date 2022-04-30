import React from "react";
import {FaAngleRight} from 'react-icons/fa';

const HeroContent = ()=>{
    return(
    <div id="hero">
        <div id="title-div">
            <h1 id="title">Unlimited movies, TV shows, and more.</h1>
            <h2 id="subtitle">Watch anywhere. Cancel anytime.</h2>
            <form id="email-form">
                <h3 id="form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div id="form-items-holder">
                    <input type="email" required id="form-email" placeholder="Email Address"/>
                    <button type="submit" id="form-btn">Get Started <FaAngleRight/></button>
                </div>
            </form>
        </div>
    </div>
    );
}

export default HeroContent;
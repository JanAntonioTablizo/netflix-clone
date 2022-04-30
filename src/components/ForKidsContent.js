import React from "react";
import Kids from '../images/for-kids.png';

const ForKidsContent = ()=>{
    return(
    <div id="for-kids">
        <img src={Kids} alt="For kids" id="fk-img"/>
        <div id="for-kids-desc">
            <h1 id="fk-title">Create profiles for kids.</h1>
            <h2 id="fk-subtitle">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        </div>
    </div>
    );
}

export default ForKidsContent;
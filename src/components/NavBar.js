import React from "react";
import Logo from "../images/netflix-logo.png";
import {Link} from "react-router-dom";
import {BiMenu, BiX} from "react-icons/bi";
const NavBar = ()=>{
    return(
        <header id="all-header">
            <img src={Logo} alt="Netflix Logo" id="nav-logo"/>
            <nav id="all-nav">
                <input type="checkbox" id="check"/>
                <label htmlFor="check" id="menu-lab-bar"><BiMenu/></label>
                <label htmlFor="check" id="menu-lab-x"><BiX/></label>
                <ul>
                    <li><a href="#new-release" className="nav-links">New Release</a></li>
                    <li><a href="#trends" className="nav-links">Trending</a></li>
                    <li><a href="#continue-watch" className="nav-links">Continue Watching</a></li>
                </ul>
            </nav>
            <Link to="/Login" id="sign-out-btn">Sign Out</Link>
        </header>
    );
}

export default NavBar;
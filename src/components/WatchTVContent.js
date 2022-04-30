import React from "react";
import TV from '../images/tv.png';

const WatchTVContent = ()=>{
    return(
    <div id="watch-on-tv">
        <div id="tv-desc">
            <h1 id="tv-title">Enjoy on your TV.</h1>
            <h2 id="tv-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <img src={TV} alt="TV" id="tv-img"/>
    </div>
    );
}

export default WatchTVContent;
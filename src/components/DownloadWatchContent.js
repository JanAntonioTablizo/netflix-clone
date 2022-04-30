import React from "react";
import CP from '../images/mobile-0819.jpg';
import ST from '../images/dl-img.png'

const DownloadWatchContent= ()=>{
    return(
    <div id="download-watch">
        <div id="cp-img-holder">
            <img src={CP} alt="Cellphone" id="cp-img"/>
            <div id="downloading">
                <img src={ST} alt="Stranger Things Cover" id="st-img"/>
                <div id="dl-desc">
                    <div id="dl-title">Stanger Things</div>
                    <div id="dl-text">Downloading...</div>
                </div>
            </div>
        </div>
        <div id="dl-watch-desc">
            <h1 id="dw-title">Download your shows to watch offline.</h1>
            <h2 id="dw-subtitle">Save your favorites easily and always have something to watch.</h2>
        </div>
    </div>
    );
}

export default DownloadWatchContent;
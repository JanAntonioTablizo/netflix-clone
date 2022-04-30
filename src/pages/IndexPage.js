import React from "react";
import IndexHeadContent from "../components/IndexHeadContent";
import HeroContent from "../components/HeroContent";
import WatchTVContent from "../components/WatchTVContent";
import DownloadWatchContent from "../components/DownloadWatchContent";
import WatchEverywhereContent from "../components/WatchEverywhereContent";
import ForKidsContent from "../components/ForKidsContent";
import FaqsContent from "../components/FaqsContent";

const IndexPage = ()=> {
    return(
        <>
        <IndexHeadContent/>
        <div id="story-divs-parent">
            <HeroContent/>
            <WatchTVContent/>
            <DownloadWatchContent/>
            <WatchEverywhereContent/>
            <ForKidsContent/>
            <FaqsContent/>
        </div>
        </>
    );
} 

export default IndexPage;
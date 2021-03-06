import React from "react";
import NRMovies from "../data/nr-movies.json";
import TrendMovies from "../data/trend-movies.json";
import ContWatchMovies from "../data/cont-watch-movies.json";
const HomeContent = ()=>{
    return(
        <main id="home-main">
            <div id="movie-statuses">
                <h1 className="mov-stat-titles" id="nr-mov">New Released Movies</h1>
                <div className="movies custom-scrollbar" id="new-release">
                    {NRMovies.map((movie, key)=>(
                        <img key={key} src={movie["movie-img"]} alt={movie.title} className="nr-movies"/>
                    ))}
                </div>
                <h1 className="mov-stat-titles" id="trend-mov">Trending Movies</h1>
                <div className="movies custom-scrollbar" id="trends">
                    {TrendMovies.map((movie, key)=>(
                        <img key={key} src={movie["movie-img"]} alt={movie.title} className="nr-movies"/>
                    ))}                    
                </div>
                <h1 className="mov-stat-titles" id="cont-mov">Continue Watch Movies</h1>
                <div className="movies custom-scrollbar" id="continue-watch">
                    {ContWatchMovies.map((movie, key)=>(
                        <img key={key} src={movie["movie-img"]} alt={movie.title} className="nr-movies"/>
                    ))}     
                </div>
            </div>
        </main>
    );
}

export default HomeContent;
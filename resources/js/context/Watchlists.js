import React, { createContext } from "react";
import Moviedata from "../utility/movieData";

let defaultValue = Moviedata;
//watchlist context
export const WatchlistContext = React.createContext("hello");

function WatchlistProvider({ children }) {
    const [Watch, setWatch] = React.useState([]);

    //movie delete from Watch
    const MovieDelete = (id) => {
        const RemoveMovie = [...Watch].filter((item) => item.id !== id);
        setWatch(RemoveMovie);
    };

    //clear watchlist at once
    const clearWatchlist = () => {
        setWatch([]);
    };

    //add to watchlist
    const Addmovie = (movie) => {
        const {
            id,
            title,
            releaseYear,
            image,
            trailerUrl,
            MoiveUrl,
            genre,
        } = movie;
        const newMovie = {
            id,
            title,
            releaseYear,
            image,
            trailerUrl,
            MoiveUrl,
            genre,
        };
        console.log(movie);
        const NewWatchlist = [...Watch, newMovie];
        setWatch(NewWatchlist);
    };

    return (
        <WatchlistContext.Provider value={{ Watch, MovieDelete, Addmovie }}>
            {children}
        </WatchlistContext.Provider>
    );
}

export default WatchlistProvider;

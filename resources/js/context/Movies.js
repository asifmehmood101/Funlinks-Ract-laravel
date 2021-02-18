import React from "react";
import Moviedata from "../utility/movieData";

//movie context
export const MovieContext = React.createContext();

function MoviesProvider({ children }) {
    const [Movie, setMoive] = React.useState(Moviedata);

    return (
        <MovieContext.Provider value={{ Movie }}>
            {children}
        </MovieContext.Provider>
    );
}

export default MoviesProvider;

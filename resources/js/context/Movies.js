import React from "react";
import Moviedata from "../utility/movieData";

//movie context
export const MovieContext = React.createContext();

function MoviesProvider({ children }) {
    const [Movie, setMoive] = React.useState(Moviedata);
    const [change, setChange] = React.useState(false);

    const HandleChange = () => setChange(!change);

    return (
        <MovieContext.Provider value={{ Movie, HandleChange, change }}>
            {children}
        </MovieContext.Provider>
    );
}

export default MoviesProvider;

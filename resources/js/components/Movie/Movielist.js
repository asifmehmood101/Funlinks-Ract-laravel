import React from "react";
import { MovieContext } from "../../context/Movies";
import Moviecard from "./Moviecard";
import Grid from "@material-ui/core/Grid";

function Movielist() {
    const { Movie } = React.useContext(MovieContext);
    console.log(Movie);
    return (
        <Grid container direction="row" spacing={0}>
            {Movie.map((items) => {
                return (
                    <Grid item xs={2} sm={2} lg={2} key={items.id}>
                        <Moviecard {...items} key={items.id}/>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default Movielist;

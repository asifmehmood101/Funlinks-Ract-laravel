import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import EmptyImage from "../../images/Emptyimage.png";

const useStyle = makeStyles({
    EmptyImage: {
        margin: 10,
    },
});

function EmptyWatchlist() {
    const classes = useStyle();
    return (
        <div>
            <Grid
                container
                direction="column"
                alignItems="center"
            >
                <Grid item xs>
                    <img
                        src={EmptyImage}
                        alt="Watchlist empty Item"
                        className={classes.EmptyImage}
                    />
                </Grid>
                <Grid item xs>
                    <Link to="/Explore">
                        <Button variant="outlined" color="secondary">
                            Go Back
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default EmptyWatchlist;

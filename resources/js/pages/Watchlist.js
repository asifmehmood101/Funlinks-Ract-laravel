import React, { useContext } from "react";
import HomeNavbar from "../Partials/Homenavbar";
import { fade, makeStyles, Grid,Container } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { WatchlistContext } from "../context/Watchlists";
import WatchItem from "../components/Watchlist/WatchItem";
import EmptyWatchlist from "../components/Watchlist/EmptyWatchlist";

const useStyle = makeStyles((theme) => ({
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

function Watchlist() {
    const { Watch } = useContext(WatchlistContext);
    console.log(Watch);
    const classes = useStyle();

    if (Watch.length === 0) {
        return (
            <div>
                <HomeNavbar
                    search={
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ "aria-label": "search" }}
                            />
                        </div>
                    }
                />
                <EmptyWatchlist />
            </div>
        );
    }
    return (
        <div>
            <HomeNavbar
                search={
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                }
            />
           
                <Grid container direction="row" spacing={0}>
                    {Watch.map((items) => {
                        console.log(items);
                        return (
                            <Grid item xs={2} sm={2} lg={2} key={items.id}>
                                <WatchItem key={items.id} {...items} />
                            </Grid>
                        );
                    })}
                </Grid>
        </div>
    );
}

export default Watchlist;

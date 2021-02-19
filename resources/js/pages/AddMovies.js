import React from "react";
import Navbar from "../Partials/Navbar";
import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import AddMovie from "../components/AddMovie";
import Background from "../images/backimage.jpg";

const useStyle = makeStyles({
    SignBtn: {
        background: "#18A0FB",
        color: "white",
        borderRadius: "2px",
        height: "30px",
    },
    link: {
        textDecoration: "none",
    },
    container: {
        backgroundColor: "#3f3f3f",
        height: "100%",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "inset 100px 100px 200px black",
    },
});

function AddMovies() {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Toolbar>
                <Navbar />
            </Toolbar>
            <AddMovie />
        </div>
    );
}

export default AddMovies;

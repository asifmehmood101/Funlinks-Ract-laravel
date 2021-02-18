import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Toolbar,
    makeStyles,
    Container,
    Typography,
    Grid,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactPlayer from "react-player";
const useStyle = makeStyles({
    container: {
        backgroundColor: "#3f3f3f",
        boxShadow: "inset 100px 100px 200px black",
        margin: "0",
    },
    myVideo: {
        objectFit: "cover",
        position: " fixed",
        top: "0",
        left: "0",
    },
    content: {
        position: "relative",
        height: "100vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        textDecoration: "none",
    },
    headline: {
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: "60px",
        color: "#0062a5",
        textShadow: "200px 200px 200px rgba(0, 0, 0, 0.25)",
    },
    subline: {
        fontStyle: "normal",
        fontSize: "25px",
        color: "white",
        textShadow: "200px 200px 200px rgba(1, 1, 1, 0.25)",
    },
});

function Landingpage() {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <ReactPlayer
                className={classes.myVideo}
                width
                height
                autoPlay
                muted
                loop
                playing
                url={[{ src: "/images/landing.mp4", type: "video/mp4" }]}
            />
            <Grid container>
                <Grid item xs={12}>
                    <Container className={classes.content}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={classes.headline}>
                                    Welcome To Funlinks
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.subline}>
                                    Pakistan first subscription-based media
                                    services
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Link to="/faq" className={classes.link}>
                                    <Button variant="contained" color="primary">
                                        GET STARTED
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
}

export default Landingpage;

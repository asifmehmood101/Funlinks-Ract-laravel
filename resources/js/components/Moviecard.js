import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import content from "../utility/content";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: "30rem",
        margin: "1rem",
        backgroundColor: "black",
        color: "white",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        color: "grey",
    },
});

export default function Moviecard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Slide
                easing="ease"
                arrows={true}
                duration={3000}
                indicators={true}
                scale={1.4}
            >
                {content.map((item) => {
                    const { image, id } = item;
                    return (
                        <div className="each-slide" key={id}>
                            <div
                                style={{
                                    backgroundImage: `url(${image})`,
                                    height: "30rem",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    boxShadow: "inset 100px 100px 200px black",
                                }}
                            ></div>
                        </div>
                    );
                })}
            </Slide>
        </Card>
    );
}

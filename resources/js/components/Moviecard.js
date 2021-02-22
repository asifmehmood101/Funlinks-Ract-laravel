import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";

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
    Container: {
        height: "25rem",
    },

    button: {
        color: "black",
    },
});

export default function Moviecard(props) {
    const { Movie } = props;
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
                {Movie.map((item) => {
                    const {
                        image,
                        id,
                        descreption,
                        genre,
                        releaseYear,
                        title,
                    } = item;
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
                            >
                                <Container className={classes.Container}>
                                    <Typography variant="h5">
                                        {title} {`(${releaseYear})`}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        <b>{genre}</b>
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {descreption}
                                    </Typography>
                                    <CardActions>
                                        <Link to={`/trailer/${id}`}>
                                            <button
                                                size="small"
                                                variant="outlined"
                                                color="secondary"
                                                title="Watch tailer"
                                            >
                                                Trailers
                                            </button>
                                        </Link>
                                        <Link to={`/watch/${id}`}>
                                            <button
                                                size="large"
                                                color="primary"
                                                title="Play"
                                            >
                                                <PlayCircleOutlineRoundedIcon />
                                            </button>
                                        </Link>
                                    </CardActions>
                                </Container>
                            </div>
                        </div>
                    );
                })}
            </Slide>
        </Card>
    );
}

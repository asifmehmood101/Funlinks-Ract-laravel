import React from "react";
import QierPlayer from "qier-player";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/Movies";
import HomeNavbar from "../Partials/Homenavbar";
import MovieDetail from "../components/Moviedetail";
import { makeStyles, Container } from "@material-ui/core";

//style
const useStyles = makeStyles({
    maincontainer: {
        width: "100%",
    },
});

function WatchMovie() {
    const { id } = useParams();
    const { Movie } = React.useContext(MovieContext);

    const movie = Movie.find((video) => video.id === parseInt(id));
    const {
        title,
        releaseYear,
        image,
        trailerUrl,
        MoiveUrl,
        genre,
        descreption,
        rating,
    } = movie;

    //classes
    const classes = useStyles();
    return (
        <div>
            <HomeNavbar />
            <div className={classes.videoplayer}>
                <QierPlayer
                    width={"100%"}
                    height={650}
                    language="en"
                    showVideoQuality={true}
                    themeColor="#abc123"
                    src1080p={MoiveUrl}
                    srcOrigin={MoiveUrl}
                />
            </div>
            <Container>
                <MovieDetail
                    image={image}
                    title={title}
                    releaseYear={releaseYear}
                    genre={genre}
                    descreption={descreption}
                    rating={rating}
                    id={id}
                />
            </Container>
        </div>
    );
}

export default WatchMovie;

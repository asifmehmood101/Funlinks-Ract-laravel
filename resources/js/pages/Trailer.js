import React from "react";
import QierPlayer from "qier-player";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/Movies";
import { makeStyles, Container } from "@material-ui/core";
import HomeNavbar from "../Partials/Homenavbar";
import MovieDetail from "../components/Moviedetail";

//style
const useStyles = makeStyles({});

function Trailer() {
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
                    src1080p={trailerUrl}
                    srcOrigin={trailerUrl}
                />
            </div>
            <Container>
                <MovieDetail
                    image={image}
                    title={title}
                    releaseYear={releaseYear}
                    genre={genre}
                    descreption={descreption}
                />
            </Container>
        </div>
    );
}

export default Trailer;
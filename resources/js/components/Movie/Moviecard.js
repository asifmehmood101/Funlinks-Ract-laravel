import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import { WatchlistContext } from "../../context/Watchlists";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { MovieContext } from "../../context/Movies";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 230,
        boxShadow: "none",
        backgroundColor: "#151515",
        color: "white",
        transition: "0.5s",
        marginTop: 30,
        margin: 5,
        "&:hover": {
            boxShadow: "4px 7px 8px 3px rgba(0, 0, 0, 0.3)",
        },
        fontFamily: "Libre Baskerville,serif",
        borderRadius: 10,
    },
    media: {
        height: 200,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    content: {
        marginBottom: 5,
        textTransform: "uppercase",
    },
});

function Moviecard({ id, title, releaseYear, image }) {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const [addmovie, setAddmovie] = React.useState(true);
    const { Addmovie, MovieDelete } = React.useContext(WatchlistContext);
    const { Movie } = React.useContext(MovieContext);

    const movie = Movie.find((video) => video.id === parseInt(id));

    const handleMouseEnter = () => {
        return setShow(!show);
    };
    const handleMouseleave = () => {
        return setShow(!show);
    };

    return (
        <Card
            className={classes.root}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseleave}
        >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={title}
                ></CardMedia>

                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="subtitle2">
                        {title}({releaseYear})
                    </Typography>
                </CardContent>
            </CardActionArea>
            {show ? (
                <CardActions style={{ transition: "0.5s" }}>
                    <Link to={`/trailer/${id}`}>
                        <Button
                            size="small"
                            color="primary"
                            variant="outlined"
                            color="secondary"
                            title="Watch tailer"
                        >
                            Trailer
                        </Button>
                    </Link>
                    <Link to={`/watch/${id}`}>
                        <Button
                            size="large"
                            color="primary"
                            color="primary"
                            title="Play"
                        >
                            <PlayCircleOutlineRoundedIcon />
                        </Button>
                    </Link>

                    {addmovie ? (
                        <Button
                            size="large"
                            color="primary"
                            title="Add to Watch-List"
                            onClick={(prev) => {
                                Addmovie(movie);
                                setAddmovie(false);
                            }}
                        >
                            <AddIcon />
                        </Button>
                    ) : (
                        <Button
                            size="large"
                            color="primary"
                            title="Remove from Watch-List"
                            onClick={(prev) => {
                                console.log(`removed ${id}`);
                                MovieDelete(id);
                                setAddmovie(true);
                            }}
                        >
                            <HighlightOffIcon />
                        </Button>
                    )}
                </CardActions>
            ) : (
                ""
            )}
        </Card>
    );
}

export default Moviecard;

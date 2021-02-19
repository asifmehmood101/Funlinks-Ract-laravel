import React from "react";
import { useForm } from "react-hook-form";
import {
    makeStyles,
    Container,
    Typography,
    Box,
    TextField,
    withStyles,
    Grid,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import QueuePlayNextIcon from "@material-ui/icons/QueuePlayNext";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

//image uploading video
//https://www.youtube.com/watch?v=hlYczGvLlDY
//

//textfield customization
const CssTextField = withStyles({
    root: {
        "& .MuiInputBase-root": {
            color: "black",
            backgroundColor: "white",
            width: "20ch",
        },
        "& label.Mui-focused": {
            marginTop: ".3rem",
            color: "#008DEC",
            backgroundColor: "transparent",
            fontSize: "1rem",
            fontWeight: "700",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#008DEC",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#008DEC",
            },
            "&:hover fieldset": {
                borderColor: "#008DEC",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#008DEC",
            },
        },
    },
})(TextField);

const useStyel = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Input: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    SignBtn: {
        color: "white",
        textDecoration: "none",
        width: "250.82px",
        height: "60px",
        fontSize: "25px",
        borderRadius: "20rem",
        fontWeight: "bold",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    SignupBtn: {
        color: "white",
        textDecoration: "none",
        height: "60px",
        fontSize: "25px",
        borderRadius: "3px",
        fontWeight: "bold",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginLeft: "70px",
    },
    headtitle: {
        color: "#008DEC",
    },
    headline: {
        fontWeight: "500",
        color: "white",
        fontSize: "2rem",
        textDecoration: "5px underline #008DEC",
    },
    Flexbox: {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        justifyContent: "center",
        marginTop: "5rem",
    },
    contentSpace: {
        marginTop: ".5em",
        marginBottom: ".5em",
    },
    card: {
        backgroundColor: "black ",
        border: "3px solid #008DEC",
        borderRadius: "10px",
        // maring: '10rem',
    },
    link: {
        textDecoration: "none",
    },
    ErrorMessage: {
        color: "red",
        fontStyle: "bold",
    },
    input: {
        display: "none",
    },
    textarea: {
        width: "400px",
        borderRadius: "3px",
    },
}));

function AddMovie() {
    const [resp, setResp] = React.useState([]);
    const { register, handleSubmit, errors, watch, formState } = useForm({
        mode: "all",
    });

    const [image, setImage] = React.useState("");
    const { isSubmitting } = formState;

    //handlesubmit
    const onSubmit = (data, e) => {
        console.log("working...");
        // e.preventDefault();
        // axios
        //     .post("http://127.0.0.1:8000/api/user/store", JSON.stringify(data))
        //     .then((res) => {
        //         setResp(res.data);
        //     });
    };
    const history = useHistory();
    // if (resp.id) {
    //     history.push("signup/plan");
    // }

    const classes = useStyel();

    return (
        <Container maxWidth="sm" style={{ height: "38rem" }}>
            <Container maxWidth="xl">
                <Box className={classes.Flexbox}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Container>
                                <Typography className={classes.headline}>
                                    Add Movie To Funlinks
                                </Typography>
                                <br />
                                <Box alignSelf="center">
                                    <br />
                                    <Container maxWidth="sm" fixed>
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                            className={classes.root}
                                        >
                                            <Grid container spacing={3}>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="Title"
                                                        type="text"
                                                        label="Name"
                                                        variant="outlined"
                                                        id="name"
                                                        autoComplete="name"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                User name is
                                                                required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="year"
                                                        type="text"
                                                        label="Relase year"
                                                        variant="outlined"
                                                        id="year"
                                                        autoComplete="year"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Release year
                                                                required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="Cast-1"
                                                        type="text"
                                                        label="Movie cast 1"
                                                        variant="outlined"
                                                        id="Cast-1"
                                                        autoComplete="Cast-1"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Cast required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="Cast-2"
                                                        type="text"
                                                        label="Movie cast 2"
                                                        variant="outlined"
                                                        id="Cast-2"
                                                        autoComplete="Cast-2"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Cast required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="Director"
                                                        type="text"
                                                        label="Director name"
                                                        variant="outlined"
                                                        id="Director"
                                                        autoComplete="Director"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Director
                                                                required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="Producer"
                                                        type="text"
                                                        label="Producer name"
                                                        variant="outlined"
                                                        id="Producer"
                                                        autoComplete="Producer"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Producer
                                                                required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <CssTextField
                                                        name="Category"
                                                        type="text"
                                                        label="Category"
                                                        variant="outlined"
                                                        id="Category"
                                                        autoComplete="Category"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.name &&
                                                        errors.name.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Category
                                                                required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextareaAutosize
                                                        aria-label="empty textarea"
                                                        placeholder="Movie Description"
                                                        className={
                                                            classes.textarea
                                                        }
                                                        rowsMin={4}
                                                    />
                                                </Grid>
                                                <Grid item lg={2} />
                                                <Grid item xs={3} sm={3}>
                                                    <input
                                                        name="poster"
                                                        accept="image/*"
                                                        className={
                                                            classes.input
                                                        }
                                                        id="contained-button-file"
                                                        multiple
                                                        type="file"
                                                        // onChange={}
                                                    />
                                                    <Tooltip
                                                        title="Add Poster"
                                                        aria-label="add Poster"
                                                    >
                                                        <label htmlFor="contained-button-file">
                                                            <Fab
                                                                component="span"
                                                                className={
                                                                    classes.button
                                                                }
                                                            >
                                                                <AddPhotoAlternateIcon />
                                                            </Fab>
                                                        </label>
                                                    </Tooltip>
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <input
                                                        name="Trailer"
                                                        accept="Video/*"
                                                        className={
                                                            classes.input
                                                        }
                                                        id="contained-file"
                                                        multiple
                                                        type="file"
                                                        // onChange={}
                                                    />
                                                    <Tooltip
                                                        title="Add Trailer"
                                                        aria-label="add Trailer"
                                                    >
                                                        <label htmlFor="contained-file">
                                                            <Fab
                                                                component="span"
                                                                className={
                                                                    classes.button
                                                                }
                                                            >
                                                                <QueuePlayNextIcon />
                                                            </Fab>
                                                        </label>
                                                    </Tooltip>
                                                </Grid>
                                                <Grid item xs={3} sm={3}>
                                                    <input
                                                        name="Movie"
                                                        accept="Video/*"
                                                        className={
                                                            classes.input
                                                        }
                                                        id="contained-file-movie"
                                                        multiple
                                                        type="file"
                                                        // onChange={}
                                                    />
                                                    <Tooltip
                                                        title="Add movie"
                                                        aria-label="add movie"
                                                    >
                                                        <label htmlFor="contained-file-movie">
                                                            <Fab
                                                                component="span"
                                                                className={
                                                                    classes.button
                                                                }
                                                            >
                                                                <MovieFilterIcon />
                                                            </Fab>
                                                        </label>
                                                    </Tooltip>
                                                </Grid>
                                                <Grid item lg={2} />
                                                <CardActions>
                                                    <Container maxWidth="sm">
                                                        <Button
                                                            type="submit"
                                                            className={
                                                                classes.SignupBtn
                                                            }
                                                            variant="contained"
                                                            color="primary"
                                                            enabled={
                                                                isSubmitting
                                                            }
                                                            fullWidth
                                                        >
                                                            <Typography variant="h5">
                                                                Upload
                                                            </Typography>
                                                        </Button>
                                                    </Container>
                                                </CardActions>
                                            </Grid>
                                        </form>
                                    </Container>
                                </Box>
                            </Container>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Container>
    );
}

export default AddMovie;

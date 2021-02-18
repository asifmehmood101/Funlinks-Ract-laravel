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
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

/*
How to Use React-Hook-Form With Material UI
https://www.youtube.com/watch?v=PquWexbGcVc

form validation
https://www.freecodecamp.org/news/build-forms-in-react-with-react-hook-form-library/

//

*/

//textfield customization
const CssTextField = withStyles({
    root: {
        "& .MuiInputBase-root": {
            color: "black",
            backgroundColor: "white",
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

const useStyel = makeStyles({
    root: {
        width: "100%",
    },
    SignBtn: {
        color: "white",
        textDecoration: "none",
        width: "250.82px",
        height: "60px",
        fontSize: "25px",
        borderRadius: "3px",
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
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        marginTop: "5rem",
    },
    contentSpace: {
        marginTop: ".5em",
        marginBottom: ".5em",
    },
    card: {
        backgroundColor: "black",
        border: "2px solid #0062a5",
        borderRadius: "10px",
    },
    ErrorMessage: {
        color: "red",
        fontStyle: "bold",
    },
});

function Signincard() {
    const [message, setMessage] = React.useState("");
    const { register, handleSubmit, watch, errors, formState } = useForm({
        mode: "all",
    });

    const { is } = formState;
    //handlesubmit
    const onSubmit = (data, e) => {
        e.preventDefault();
        axios
            .post("http://127.0.0.1:8000/api/user/login", JSON.stringify(data))
            .then((res) => {
                setMessage(res.data);
            });
    };
    console.log(message);
    const history = useHistory();
    if (message === "success") {
        history.push("/Home");
    }
    const classes = useStyel();
    return (
        <Container maxWidth="sm" style={{ height: "40rem" }}>
            <Container maxWidth="xl">
                <Box className={classes.Flexbox}>
                    <Card className={classes.card}>
                        <Box>
                            <CardContent>
                                <Container>
                                    <Typography className={classes.headline}>
                                        Sign In
                                    </Typography>
                                    <div className={classes.root}>
                                        {message === "wrong" ? (
                                            <Alert
                                                variant="filled"
                                                severity="error"
                                            >
                                                somthing went wrong
                                            </Alert>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <br />
                                    <Box alignSelf="center">
                                        <br />
                                        <Container maxWidth="sm" fixed>
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <Grid container spacing={4}>
                                                    <Grid item xs={12}>
                                                        <CssTextField
                                                            name="email"
                                                            type="email"
                                                            label="Email"
                                                            variant="outlined"
                                                            id="filled-email"
                                                            autoComplete="email"
                                                            error={
                                                                !!errors.email
                                                            }
                                                            inputRef={register({
                                                                required: true,
                                                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                            })}
                                                            fullWidth
                                                        />
                                                        {errors.email &&
                                                            errors.email
                                                                .type ===
                                                                "required" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Email is
                                                                    required!
                                                                </p>
                                                            )}
                                                        {errors.email &&
                                                            errors.email
                                                                .type ===
                                                                "pattern" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Email is not
                                                                    valid.
                                                                </p>
                                                            )}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <CssTextField
                                                            name="password"
                                                            type="password"
                                                            label="Password"
                                                            variant="outlined"
                                                            id="custom-css-outlined-input"
                                                            fullWidth
                                                            error={
                                                                !!errors.password
                                                            }
                                                            inputRef={register({
                                                                required: true,
                                                                minLength: 6,
                                                            })}
                                                        />
                                                        {errors.password &&
                                                            errors.password
                                                                .type ===
                                                                "required" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Password is
                                                                    required.
                                                                </p>
                                                            )}
                                                        {errors.password &&
                                                            errors.password
                                                                .type ===
                                                                "minLength" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Password
                                                                    should be
                                                                    at-least 6
                                                                    characters.
                                                                </p>
                                                            )}
                                                    </Grid>
                                                    <Grid item lg={2} />
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={10}
                                                        lg={8}
                                                    >
                                                        <CardActions>
                                                            <Button
                                                                type="submit"
                                                                className={
                                                                    classes.SignupBtn
                                                                }
                                                                variant="contained"
                                                                color="primary"
                                                                fullWidth
                                                            >
                                                                Sign in
                                                            </Button>
                                                        </CardActions>
                                                    </Grid>
                                                    <Grid item lg={2} />
                                                </Grid>
                                            </form>
                                        </Container>
                                    </Box>
                                </Container>
                            </CardContent>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </Container>
    );
}

export default Signincard;

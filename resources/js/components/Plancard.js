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
import {useHistory} from 'react-router-dom';


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
});

function Plancard() {
    const [resp, setResp] = React.useState([]);
    const { register, handleSubmit, errors, watch, formState } = useForm({
        mode: "all",
    });
    const { isSubmitting } = formState;

    //handlesubmit
    const onSubmit = (data, e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/user/store', JSON.stringify(data))
        .then(res=>{
            setResp(res.data);
        });
    };
    const history = useHistory();
    if(resp.id){
        history.push("signup/plan");
    }

    const classes = useStyel();

    return (
        <Container maxWidth="sm" style={{ height: "38rem" }}>
            <Container maxWidth="xl">
                <Box className={classes.Flexbox}>
                    <Card className={classes.card} variant="outlined">
                        <CardContent>
                            <Container>
                                <Typography className={classes.headline}>
                                    Step 1/3
                                </Typography>
                                <br />
                                <Box alignSelf="center">
                                    <br />
                                    <Container maxWidth="xs" fixed>
                                        <form
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <Grid container spacing={4}>
                                                <Grid item xs={12}>
                                                    <CssTextField
                                                        name="name"
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
                                                <Grid item xs={12}>
                                                    <CssTextField
                                                        name="address"
                                                        type="text"
                                                        label="Address"
                                                        variant="outlined"
                                                        id="address"
                                                        autoComplete="address"
                                                        size="small"
                                                        error={!!errors.name}
                                                        required
                                                        inputRef={register({
                                                            required: true,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.address &&
                                                        errors.address.type ===
                                                            "required" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                User Address is
                                                                required!
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <CssTextField
                                                        name="email"
                                                        type="email"
                                                        label="Email"
                                                        variant="outlined"
                                                        id="filled-email"
                                                        autoComplete="email"
                                                        error={!!errors.email}
                                                        required
                                                        size="small"
                                                        inputRef={register({
                                                            required: true,
                                                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        })}
                                                        fullWidth
                                                    />
                                                    {errors.email &&
                                                        errors.email.type ===
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
                                                        errors.email.type ===
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
                                                        id="pwd"
                                                        fullWidth
                                                        required
                                                        size="small"
                                                        error={
                                                            !!errors.password
                                                        }
                                                        inputRef={register({
                                                            required: true,
                                                            minLength: 6,
                                                        })}
                                                    />
                                                    {errors.password &&
                                                        errors.password.type ===
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
                                                        errors.password.type ===
                                                            "minLength" && (
                                                            <p
                                                                className={
                                                                    classes.ErrorMessage
                                                                }
                                                            >
                                                                Password should
                                                                be at-least 6
                                                                characters.
                                                            </p>
                                                        )}
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={3}
                                                    sm={2}
                                                    xs={2}
                                                />
                                                <Grid
                                                    item
                                                    lg={9}
                                                    sm={10}
                                                    xs={10}
                                                >
                                                    <CardActions>

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
                                                            Continue
                                                        </Typography>
                                                    </Button>
                                                    </CardActions>
                                                </Grid>
                                                <Grid
                                                    item
                                                    lg={2}
                                                    sm={2}
                                                    xs={1}
                                                />
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

export default Plancard;

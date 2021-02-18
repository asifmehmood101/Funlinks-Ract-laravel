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
import Popup from "./Popup";
import { useHistory } from "react-router-dom";

//textfield customization
const CssTextField = withStyles({
    root: {
        "& .MuiInputBase-root": {
            color: "#008DEC",
            backgroundColor: "white",
        },
        "& label.Mui-focused": {
            marginTop: ".4rem",
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
        borderRadius: "3px",
        fontWeight: "bold",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    SignupBtn: {
        color: "white",
        textDecoration: "none",
        height: "60px",
        borderRadius: "3px",
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
    icon: {
        margin: ".2rem",
    },
    firstText: {
        fontWeight: "500",
        color: "#008DEC",
    },
    secondText: {
        color: "white",
    },
    link: {
        textDecoration: "none",
    },
    ErrorMessage: {
        color: "red",
        fontStyle: "bold",
    },
});

function Creditoption() {
    const { register, handleSubmit, watch, errors } = useForm({
        mode: "all",
    });
    const [credit, setCredit] = React.useState([]);
    const history = useHistory();

    //handlesubmit
    const onSubmit = (data, e) => {
        e.preventDefault();
        axios
            .post(
                "http://127.0.0.1:8000/api/signup/plan/payment/credit/store",
                JSON.stringify(data)
            )
            .then((res) => {
                setCredit(res.data);
            });
        if (credit) {
            history.push("/funlinks");
        } else {
            console.log("Your email or password is not valid");
        }
    };

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
                                        Step 3/3
                                    </Typography>
                                    <br />
                                    <Box alignSelf="center">
                                        <br />

                                        <Container maxWidth="sm" fixed>
                                            <Box alignSelf="center">
                                                <Typography variant="h5">
                                                    <span
                                                        className={
                                                            classes.firstText
                                                        }
                                                    >
                                                        Pay
                                                    </span>{" "}
                                                    <span
                                                        className={
                                                            classes.secondText
                                                        }
                                                    >
                                                        Rs500 now. Set up your
                                                        payment
                                                    </span>
                                                </Typography>
                                            </Box>
                                            <br />
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12}>
                                                        <CssTextField
                                                            name="username"
                                                            type="text"
                                                            label="Name"
                                                            variant="outlined"
                                                            id="filled-email"
                                                            inputRef={register({
                                                                required: true,
                                                            })}
                                                            error={
                                                                !!errors.username
                                                            }
                                                            required
                                                            fullWidth
                                                            size="small"
                                                        />
                                                        {errors.username &&
                                                            errors.username
                                                                .type ===
                                                                "required" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Card name
                                                                    required
                                                                </p>
                                                            )}
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <CssTextField
                                                            name="cardNumber"
                                                            type="number"
                                                            label="Card Number"
                                                            variant="outlined"
                                                            id="custom-css-outlined-input"
                                                            fullWidth
                                                            size="small"
                                                            onInput={(e) => {
                                                                e.target.value = Math.max(
                                                                    0,
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                                    .toString()
                                                                    .slice(
                                                                        0,
                                                                        16
                                                                    );
                                                            }}
                                                            error={
                                                                !!errors.cardNumber
                                                            }
                                                            helperText={
                                                                errors.cardNumber
                                                                    ? errors
                                                                          .cardNumber
                                                                          .message
                                                                    : ""
                                                            }
                                                            inputRef={register({
                                                                required: true,
                                                                maxLength: 16,
                                                                minLength: 16,
                                                            })}
                                                        />
                                                        {errors.cardNumber &&
                                                            errors.cardNumber
                                                                .type ===
                                                                "required" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Credit card
                                                                    number is
                                                                    required!
                                                                </p>
                                                            )}
                                                        {(errors.cardNumber &&
                                                            errors.cardNumber
                                                                .type ===
                                                                "maxLength") ||
                                                            ("minLength" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Credit card
                                                                    length
                                                                    should not
                                                                    be less and
                                                                    more than 16
                                                                    digits
                                                                </p>
                                                            ))}
                                                    </Grid>

                                                    <Grid item xs={12}>
                                                        <CssTextField
                                                            name="cardDate"
                                                            type="date"
                                                            label="Expiration Date"
                                                            variant="outlined"
                                                            id="custom-css-outlined-input"
                                                            //defaultValue="2025-05-24"
                                                            error={
                                                                !!errors.cardDate
                                                            }
                                                            fullWidth
                                                            size="small"
                                                            inputRef={register({
                                                                required: true,
                                                            })}
                                                        />
                                                        {errors.cardDate &&
                                                            errors.cardDate
                                                                .type ===
                                                                "required" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Card expire
                                                                    date is
                                                                    required!
                                                                </p>
                                                            )}
                                                    </Grid>
                                                    <Grid
                                                        container
                                                        item
                                                        xs={12}
                                                    >
                                                        <CssTextField
                                                            name="Cvv"
                                                            type="number"
                                                            label="Security Code (CVV)"
                                                            variant="outlined"
                                                            id="custom-css-outlined-input"
                                                            size="small"
                                                            onInput={(e) => {
                                                                e.target.value = Math.max(
                                                                    0,
                                                                    parseInt(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                )
                                                                    .toString()
                                                                    .slice(
                                                                        0,
                                                                        4
                                                                    );
                                                            }}
                                                            error={!!errors.Cvv}
                                                            inputRef={register({
                                                                required: true,
                                                                maxLength: 4,
                                                            })}
                                                        />
                                                        {errors.Cvv &&
                                                            errors.Cvv.type ===
                                                                "required" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Cvv number
                                                                    is required!
                                                                </p>
                                                            )}
                                                        {errors.Cvv &&
                                                            errors.Cvv.type ===
                                                                "maxLength" && (
                                                                <p
                                                                    className={
                                                                        classes.ErrorMessage
                                                                    }
                                                                >
                                                                    Cvv length
                                                                    should not
                                                                    be more than
                                                                    4 digits
                                                                </p>
                                                            )}

                                                        <Grid
                                                            item
                                                            xs
                                                            zeroMinWidth
                                                            className={
                                                                classes.icon
                                                            }
                                                        >
                                                            <Popup />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item lg={3} />
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        sm={10}
                                                        lg={9}
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
                                                                <Typography variant="h6">
                                                                    Membership
                                                                </Typography>
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

export default Creditoption;

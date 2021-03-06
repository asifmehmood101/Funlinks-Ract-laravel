import React from "react";
import { Container, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import HomeNavbar from "../Partials/Homenavbar";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";

//style
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "#0c111b",
        height: "100vh  ",
    },
    root: {
        marginTop: 20,
        minWidth: 275,
        minHeight: 500,
        backgroundColor: "black",
        border: "2px solid #008DEC",
        borderRadius: "10px",
        filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.25))",
        color: "white",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        textAlign: "center",
        textDecoration: "5px underline #008DEC",
    },
    pos: {
        marginBottom: 12,
        lineHeight: 2.5,
    },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: "#ffff",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Userinfo() {
    const classes = useStyles();
    const [user, setUser] = React.useState({});
    const [subscription, setSubscription] = React.useState({});
    const [payment, setPayment] = React.useState({});
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const userInfo = () => {
        axios.get("http://127.0.0.1:8000/api/user/userinfo").then((res) => {
            setUser(res.data);
        });
        axios.get("http://127.0.0.1:8000/api/user/userPayment").then((res) => {
            setPayment(res.data);
        });
        axios
            .get("http://127.0.0.1:8000/api/user/userSubscription")
            .then((res) => {
                setSubscription(res.data);
            });
    };

    React.useEffect(() => {
        userInfo();
        return setUser({});
    }, []);
    const { id, name, email, address } = user;
    const { created_at, price } = subscription;
    const { card_number, card_expiry_date } = payment;
    const history = useHistory();
    const deleteUser = () => {
        axios
            .delete(
                `http://127.0.0.1:8000/api/user/userCancelSubscription/${id}`
            )
            .then((res) => {
                if (res.data) {
                    history.push("/");
                }
            });
    };
    const body = (
        <div className={classes.paper}>
            <h2 id="simple-modal-title">
                Are you Sure Want to Delete Your Membership 😭?
            </h2>
            <p id="simple-modal-description">
                <b>BEFORE CONTINUE WE WARN YOU!</b>{" "}
                {"YOUR ACCOUNT WILL REMOVE PERMENTANTLY AND YOU NEED TO RESUB TO FUNLINK again if you need our serves".toLowerCase()}
            </p>
            <Button onClick={deleteUser}>OK</Button>
            <Button onClick={handleClose}>Exit</Button>
        </div>
    );
    return (
        <div className={classes.mainContainer}>
            <Toolbar style={{ margin: 0, padding: 0 }}>
                <HomeNavbar />
            </Toolbar>

            <Container maxWidth="sm">
                <Card className={classes.root}>
                    <CardContent style={{ color: "white" }}>
                        <Typography
                            className={classes.title}
                            gutterBottom
                            variant="h3"
                        >
                            My Account
                        </Typography>
                        <Container maxWidth="md">
                            <Typography
                                variant="h5"
                                style={{
                                    textDecoration: "5px underline #008DEC",
                                }}
                            >
                                Personal Detail
                            </Typography>
                            <br />
                            <Container>
                                <Typography className={classes.pos}>
                                    <b>Username</b> : {name}
                                    <br />
                                    <b>Email</b> : {email}
                                    <br />
                                    <b>Address</b> : {address}
                                    <br />
                                </Typography>
                                <Typography
                                    variant="h5"
                                    style={{
                                        textDecoration: "5px underline #008DEC",
                                    }}
                                >
                                    Billing Detail
                                </Typography>
                                <br />
                                <Container>
                                    <Typography className={classes.pos}>
                                        <b>Card Number </b>: {card_number}
                                        <br />
                                        <b>Card Exp-date </b>:{" "}
                                        {new Date(
                                            card_expiry_date
                                        ).toDateString()}
                                        <br />
                                        <b>Subcription Date </b> :{" "}
                                        {new Date(created_at).toDateString()}
                                        <br />
                                        <b>Subcription Amount</b> : {price}/-
                                        <br />
                                    </Typography>
                                </Container>
                                <CardActions>
                                    <Button
                                        type="submit"
                                        className={classes.SignupBtn}
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        onClick={handleOpen}
                                        type="button"
                                       
                                    >
                                        <Typography variant="h6">
                                            Cancel Membership
                                        </Typography>
                                    </Button>
                                    <Modal open={open} onClose={handleClose}>
                                        {body}
                                    </Modal>
                                </CardActions>
                            </Container>
                        </Container>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default Userinfo;

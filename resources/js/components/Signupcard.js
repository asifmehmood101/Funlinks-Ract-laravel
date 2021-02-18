import React from "react";
import {
    makeStyles,
    Button,
    Typography,
    Container,
    Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
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
    headtitle: {
        color: "#008DEC",
        oxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    headline: {
        fontWeight: "300",
        color: "white",
        oxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    Flexbox: {
        display: "flex",
        flexDirection: "column",
        height: "35rem",
        justifyContent: "center",
    },
    contentSpace: {
        marginTop: ".5em",
        marginBottom: ".5em",
    },
    link: {
        textDecoration: "none",
    },
});

function Signupcard() {
    const classes = useStyle();
    return (
        <Container maxWidth="xl" style={{ height: "40rem" }}>
            <Box className={classes.Flexbox}>
                <Box className={classes.contentSpace}>
                    <Typography variant="h4" className={classes.headline}>
                        <span className={classes.headtitle}>Welcome</span> to
                        Funlinks
                    </Typography>
                </Box>
                <Box className={classes.contentSpace}>
                    <Typography variant="h6" className={classes.headtitle}>
                        Hi THERE !
                    </Typography>
                </Box>
                <Box alignSelf="center" className={classes.contentSpace}>
                    <Typography className={classes.headline}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Autem ipsam alias animi dignissimos excepturi
                        consectetur beatae? Iusto, eveniet. Aspernatur nemo odit
                        amet facere quisquam tempora a consequuntur, distinctio
                        illo beatae.
                    </Typography>
                </Box>
                <Box alignSelf="center" className={classes.contentSpace}>
                    <Link to="/signup" className={classes.link}>
                        <Button
                            className={classes.SignBtn}
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
}

export default Signupcard;

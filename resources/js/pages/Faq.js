import React from "react";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import Storycard from "../components/Storycard";
import QA from "../components/Qa";
import Button from "@material-ui/core/Button";
import { makeStyles, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    SignBtn: {
        background: "#008DEC",
        color: "white",
        borderRadius: "0px",
        height: "30px",
        textDecoration: "none",
        borderRadius: "4px",
    },
    link: {
        textDecoration: "none",
    },
    mainDiv: {
        maxWidth: "1650px",
        background: "#000000",
        width: "100%",
    },
    Divider: {
        borderTop: "5px solid #303030",
    },
});

function Faq() {
    const classes = useStyle();

    return (
        <div className={classes.mainDiv} maxWidth="xl">
            <Navbar
                button={
                    <Link className={classes.link} to="/signin">
                        <Button
                            className={classes.SignBtn}
                            variant="contained"
                            color="primary"
                        >
                            Sign in
                        </Button>
                    </Link>
                }
            />
            <Storycard />
            <Divider className={classes.Divider} />
            <QA />
            <Divider className={classes.Divider} />
            <Footer />
        </div>
    );
}

export default Faq;

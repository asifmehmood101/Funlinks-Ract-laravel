import React from "react";
import Navbar from "../Partials/Navbar";
import Footer from "../Partials/Footer";
import AdminSignInCard from "../components/AdminSignInCard";
import { makeStyles, Container, Toolbar, Grid } from "@material-ui/core";

import Background from "../images/backimage.jpg";

const useStyle = makeStyles({
    container: {
        backgroundColor: "#3f3f3f",
        height: "100%",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "inset 100px 100px 200px black",
    },
});

function AdminSignin() {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Toolbar>
                <Navbar />
            </Toolbar>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <AdminSignInCard />
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div>
    );
}

export default AdminSignin;

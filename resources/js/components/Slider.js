import React from "react";
import Moviecard from "./Moviecard";
import { Container } from "@material-ui/core";
import { MovieContext } from "../context/Movies";

function Slider() {
    const { Movie } = React.useContext(MovieContext);
    return (
        <Container maxWidth="xl">
            <Moviecard Movie={Movie} />
        </Container>
    );
}

export default Slider;

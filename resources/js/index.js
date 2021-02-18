import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import App from "./IndexApp";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./CSS/theme";
import MoviesProvider from "./context/Movies";
import WatchlistProvider from "./context/Watchlists";

ReactDOM.render(
    <MoviesProvider>
        <WatchlistProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </WatchlistProvider>
    </MoviesProvider>,
    document.getElementById("root")
);

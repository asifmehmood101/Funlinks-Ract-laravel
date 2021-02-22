import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./CSS/App.css";
import "video-react/dist/video-react.css"; // import css

//pages
import Landing from "./pages/Landingpage";
import Faq from "./pages/Faq";
import SignIn from "./pages/Signin";
import Signup from "./pages/signup/Signup";
import Plan from "./pages/signup/Plan";
import Payment from "./pages/signup/Payment";
import Credit from "./pages/signup/Credit";
import Membership from "./pages/signup/Membership";
import HelpCenter from "./pages/Helpcenter";
import Explore from "./pages/Explore";
import UserINFO from "./pages/Userinfo";
import Videoplayer from "./pages/Trailer";
import WatchMovie from "./pages/WatchMovie";
import Watchlist from "./pages/Watchlist";
import AdminPanel from "./pages/AdminPanel";
import AddMovies from "./pages/AddMovies";
import AdminSignin from "./pages/Admin-SignIn";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signup/plan" exact component={Plan} />
                <Route path="/signup/plan/payment" exact component={Payment} />
                <Route
                    path="/signup/plan/payment/credit"
                    exact
                    component={Credit}
                />
                <Route path="/funlinks" exact component={Membership} />
                <Route path="/Help-Center" exact component={HelpCenter} />
                <Route path="/Explore" exact component={Explore} />
                <Route path="/userinfo" exact component={UserINFO} />
                <Route
                    path="/trailer/:id"
                    exact
                    children={<Videoplayer />}
                ></Route>
                <Route
                    path="/watch/:id"
                    exact
                    children={<WatchMovie />}
                ></Route>
                <Route path="/watchlist" exact component={Watchlist} />
                <Route path="/admin" exact component={AdminPanel} />
                <Route path="/admin/addmovie" exact component={AddMovies} />
                <Route path="/adminSignin" exact component={AdminSignin} />
                <Route path="*" exact component={Landing} />
            </Switch>
        </Router>
    );
}

export default App;

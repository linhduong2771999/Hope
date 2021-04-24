import {BrowserRouter, Route, Switch } from "react-router-dom";

// import pages
import Login from "../modules/Auth/Login/Login";
import Signup from "../modules/Auth/Signup/Signup";
import Wrapper from "../modules/Wrapper/Wrapper";
import Home from "../modules/Home/Home";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Wrapper>
                <Route exact path="/" component={Home}/>
            </Wrapper>
        </Switch>
    </BrowserRouter>
)

export default Router;
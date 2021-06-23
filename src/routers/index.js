import {BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import pages
import Login from "../modules/Auth/Login/Login";
import Signup from "../modules/Auth/Signup/Signup";
import Wrapper from "../modules/Wrapper/Wrapper";
import Home from "../modules/Home/Home";
import ProductsManagement from "../modules/ProductsManagement/ProductsManagement";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Wrapper>
                <Route exact path="/" component={Home}/>
                <PrivateRoute exact path="/user_management" component={ProductsManagement}/>
            </Wrapper>
        </Switch>
    </BrowserRouter>
)

export default Router;
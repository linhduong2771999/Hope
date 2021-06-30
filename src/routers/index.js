import {BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import pages
import Home from "../modules/Home/Home";
import Login from "../modules/Auth/Login/Login";
import Signup from "../modules/Auth/Signup/Signup";
import Wrapper from "../modules/Wrapper/Wrapper";
import ResetPassword from "../modules/Auth/ResetPassword/ResetPassword";
import ProfileAccount from "../modules/ProfileAccount/ProfileAccount";
import ForgotPassword from "../modules/Auth/ForgotPassword/ForgotPassword";
import ProductsManagement from "../modules/ProductsManagement/ProductsManagement";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/resetPassword/:resetToken" component={ResetPassword} />
            <Wrapper>
                <Route exact path="/" component={Home}/>
                <Route exact path="/profile" component={ProfileAccount} />
                <PrivateRoute exact path="/user_management" component={ProductsManagement}/>
            </Wrapper>
        </Switch>
    </BrowserRouter>
)

export default Router;
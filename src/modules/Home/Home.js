import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { getLocalStorage } from "../../helpers/localStorage";
import { infoNotification } from "../../components/Notification/Notifies";


import FontAwesome from '../../components/FontAwesome/FontAwesome';
import Login from "../../assets/images/svg/sign-in.svg";

const Compo = () => (
    <Link className="btn--remind" to="/login">
        Login to see more
        <FontAwesome src={Login} width="15px" height="15px" alt="login" />
    </Link>
)
class Home extends Component {

    componentDidMount = () => {
        const token = getLocalStorage("user_token") || {};
        if(JSON.stringify(token) === "{}"){
            infoNotification({
                component: <Compo />,
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: false
            })
        }
    }

    render() {
        return (
            <div>
                Home !!!
            </div>
        );
    }
}

export default Home;
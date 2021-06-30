import React, { Component } from 'react';
import { Link } from "react-router-dom";

import UserEdit from "../../../assets/images/svg/user-edit.svg";

import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import FontAwesome from "../../../components/FontAwesome/FontAwesome";

class UpdateProfile extends Component {
    render() {
    return (
        <Card className="update-content">
            <div className="title">
                Update your profile
            </div>
            <div className="text">
                <p>Update your profile that let everyone knows about you.</p>
            </div>
            <div className="action">
                <Button type="text">
                    <FontAwesome
                        src={UserEdit}
                        width="20px"
                        height="20px"
                        alt="User edit"
                        color="white"
                    />
                    <span>Update Profile</span>
                </Button>
            </div>
        </Card>
        );
    }
}

export default UpdateProfile;
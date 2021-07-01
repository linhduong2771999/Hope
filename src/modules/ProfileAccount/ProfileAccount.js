import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { formatDate } from '../../helpers/dates';
import { 
    socialItem, 
    tabSettingItem, 
    progressBarItem, 
    tabAboutInfoItem
} from "./data";

import Phone from "../../assets/images/svg/phone-alt.svg";
import AngleRight from "../../assets/images/svg/angle-right.svg";
import DefaultUserMale from "../../assets/images/common/default-user-male.png";
import DefaultUserFemale from "../../assets/images/common/default-user-female.png";

import Card from "../../components/Card/Card";
import Tabs from "../../components/Tabs/Tabs";
// import Input from "../../components/Input/Input";
// import Button from '../../components/Button/Button';
import TabPane from "../../components/TabPane/TabPane";
import GridLayout from '../../components/GridLayout/GridLayout';
import FontAwesome from "../../components/FontAwesome/FontAwesome";

import UpdatePassword from './components/UpdatePassword';
import UpdateProfile from './components/UpdateProfile';

const { Row, Col } = GridLayout;
class ProfileAccount extends Component {
    constructor(props){
        super(props);
        this.state = {
            active_AboutTab: tabAboutInfoItem[0].key,
            active_SettingTab: tabSettingItem[1].key
        }
    }

    handleClickTab = (tabName, key) => {
        if(tabName === "aboutTab") {
            this.setState({
                active_AboutTab: key
            })
         } else {
            this.setState({
                active_SettingTab: key
            })
         }
    }

    renderProgressBar = (bars) => {
        if(bars.length > 0){
            return (
                <ul className="list-progress">
                    {bars.map((item, index) => (
                        <li className="list-item" key={index}>
                            <p className="title">{item.title}</p>
                            <div className="progress-bar">
                                <div 
                                    className="progress" 
                                    style={{width: item.width, background: item.background}}
                                >
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )
        }

        return null;
    }

    renderSocial = (social) => {
        if(social.length > 0) {
            return (
                <Row className="social">
                    {social.map((item, index) => (
                        <Col col={4} className={item.className}  key={index}>
                            <h3>{item.number}</h3>
                            <p>{item.name}</p>
                        </Col>
                    ))}
                </Row>
            )
        }

        return null
    }

    render() {
        const { user } = this.props.stateOfProfileAccountReducers;
        const createAt = user.createAt ? user.createAt : "";
        const lastLoginAt = user.lastLoginAt ? user.lastLoginAt : "";
        const email = user.email ? user.email : "???";
        // const name = user.name ? user.name : "???"; 
        const phone = user.phone ? user.phone : "???"; 
        const full_name = user.profile.full_name ? user.profile.full_name : "???";
        const dob = user.profile.dob ? user.profile.dob : "???"; 
        const address = user.profile.address ? user.profile.address : "???"; 
        const about_me = user.profile.about_me ? user.profile.about_me : "???"; 
        const country = user.profile.country ? user.profile.country : "???"; 
        const description = user.profile.description ? user.profile.description : "???"; 
        const gender = user.profile.gender ? user.profile.gender : "???"; 
        const photoUrl = user.profile.photoUrl ? user.profile.photoUrl : "";    
        const avatar = photoUrl ? photoUrl : (gender === "male" ? DefaultUserMale : DefaultUserFemale)

        return (
            <div className="profile">
                <div className="profile-container">
                    <Row>
                        <Col col={4} pad={1} className="col-responsive-contact">
                            <Card className="card-contact">
                                <div className="card-header">
                                    <p className="title">{full_name}</p>
                                    <p className="career">Software Engineer</p>
                                </div>
                                <div className="card-body">
                                    <div className="avatar">
                                        <img src={avatar} width="112px" height="112px" alt="Avatar"/>
                                    </div>
                                    <p className="address">{address}</p>
                                    <p className="phone">
                                        <FontAwesome 
                                            src={Phone} 
                                            width="15px" 
                                            height="15px" 
                                            alt="Phone"
                                        />
                                        <span>{phone}</span>
                                    </p>
                                    {this.renderSocial(socialItem)}
                                </div>
                            </Card>
                            <Card className="card-about">
                                <Tabs 
                                    tabItem={tabAboutInfoItem}
                                    activeClass="tab-item--active"
                                    activeTab={this.state.active_AboutTab}
                                    onClick={(key) => this.handleClickTab("aboutTab",key)}
                                />
                                <TabPane 
                                    className="about"
                                    isActiveTab={this.state.active_AboutTab === "label1" ? true : false}
                                >
                                    <p>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and 
                                    scrambled it to make a type specimen book. It has 
                                    survived not only five centuries, but also the leap 
                                    into electronic typesetting, remaining essentially 
                                    unchanged.</p>
                                    <div className="email-address">
                                        <label>Email address:</label>
                                        <p>{email}</p>
                                    </div>
                                    <div className="phone">
                                        <label>Phone:</label>
                                        <p>{phone}</p>
                                    </div>
                                </TabPane>
                                <TabPane 
                                    className="skills"
                                    isActiveTab={this.state.active_AboutTab === "label2" ? true : false}
                                >
                                    {this.renderProgressBar(progressBarItem)}
                                </TabPane>
                            </Card>
                        </Col>
                        <Col col={8} pad={1} className="col-responsive-setting">
                            <Card className="card-menu">
                                <Tabs
                                    tabItem={tabSettingItem}
                                    activeClass="tab-item--active"
                                    activeTab={this.state.active_SettingTab}
                                    onClick={(key) => this.handleClickTab("settingTab",key)}
                                />  
                            </Card>
                            <TabPane 
                                className="card-about"
                                isActiveTab={this.state.active_SettingTab === "label3" ? true :false }
                            >
                                <Card className="about-content">
                                    <div className="title">About</div>
                                    <Row className="user-info">
                                        <Col col={3} className="user-info__name">
                                            <p className="title">Full Name</p>
                                            <p className="full-name">{full_name}</p>
                                        </Col>
                                        <Col col={3} className="user-info__gender">
                                            <p className="title">Gender</p>
                                            <p className="gender">{gender}</p>
                                        </Col>
                                        <Col col={3} className="user-info__dob">
                                            <p className="title">Date of birth</p>
                                            <p className="dob">{dob}</p>
                                        </Col>
                                        <Col col={3} className="user-info__country">
                                            <p className="title">Country</p>
                                            <p className="country">{country}</p>
                                        </Col>
                                    </Row>
                                    <div className="user-aboutme">
                                        <p className="text">{about_me}</p>
                                    </div>
                                </Card>
                                <Card className="description-content">
                                    <div className="title">
                                        Description
                                    </div>
                                    <div className="text">
                                        <p>{description}</p>
                                    </div>
                                </Card>

                                <UpdateProfile />
                            </TabPane>
                            <TabPane 
                                className="card-settings"
                                isActiveTab={this.state.active_SettingTab === "label4" ? true :false }
                            >
                                
                                <Card className="account-content">
                                    <div className="title">
                                        <strong>Account</strong>
                                        <FontAwesome 
                                            src={AngleRight}
                                            width="25px"
                                            height="25px"
                                            alt="User edit"
                                        />
                                        <span>Information and activities</span>
                                    </div>
                                    <Row className="account-info">
                                        <Col col={3} className="account-info__email">
                                            <p className="title">Email</p>
                                            <p className="email">{email}</p>
                                        </Col>
                                        <Col col={3} className="account-info__phone">
                                            <p className="title">Phone</p>
                                            <p className="phone">{phone}</p>
                                        </Col>
                                        <Col col={3} className="account-info__create-at">
                                            <p className="title">Create At</p>
                                            <p className="create-at">{formatDate(createAt)}</p>
                                        </Col>
                                        <Col col={3} className="account-info__last-login">
                                            <p className="title">Last login at</p>
                                            <p className="last-login">{formatDate(lastLoginAt)}</p>
                                        </Col>
                                    </Row>
                                </Card>
                                
                                <UpdatePassword />
                                
                            </TabPane>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stateOfProfileAccountReducers: state.ProfileAccountReducers
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     updatePasswordRequest: (account) => dispatch(ProfileAccountActions.updatePasswordRequest(account))
// })

export default connect(mapStateToProps, null)(ProfileAccount);

// Account detail
// Profile detail
// Role for router
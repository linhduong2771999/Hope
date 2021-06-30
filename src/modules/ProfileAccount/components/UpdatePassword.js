import React, { Component } from 'react';
import { connect } from "react-redux";
import { formItem } from "../data";
import { Redirect } from "react-router-dom"
import { removeDiacritics } from "../../../helpers/strings";
import { removeLocalStorage } from '../../../helpers/localStorage';
import { ProfileAccountActions } from '../../../store/actions';
import { errorPopup, customPopup } from "../../../components/SweetAlert/SweetAlert";
import { validateEmail, validateStrengthPassword } from '../../../helpers/validates';

import AngleRight from "../../../assets/images/svg/angle-right.svg";

import Card from "../../../components/Card/Card"
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import FontAwesome from "../../../components/FontAwesome/FontAwesome";
class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            account: {
                email: "linhduong2771999@gmail.com",
                password: "Linhduong277",
                newPassword: "Linhduong277",
                passwordConfirm: "Linhduong277"
            },
            errors: {
                email: "",
                password: "",
                newPassword: "",
                passwordConfirm: ""
            },
            redirect: false
        }
    }

    renderInput = (formItem) => {
        if(formItem.length > 0){
            return formItem.map((input, index) => (
                <div className="input-group" key={index}>
                    <Input 
                        name={input.name}
                        type={input.type} 
                        autoComplete="off"
                        onChange={this.onChangeInput}
                        placeholder={input.placeholder}
                        value={this.state.account[input.name]}
                    />
                    <span className="input-errors">{this.state.errors[input.name]}</span>
                </div>
            ))
        }
        return null
    }

    onChangeInput = (e) => {
        const { name, value } = e.target;

        this.setState({
            account: {
                ...this.state.account,
                [name]: removeDiacritics(value).trim()
            }
        }, () => this.validateOnchangeInput(name, this.state.account))
    }

    validateFunc = (account) => {
        const errors = {};

        errors.email = !validateEmail(account.email) ? "Invalid Email" : "";
        errors.password = !validateStrengthPassword(account.password) ? "Password must contain 1 letter,1 number and 8-16 characters" : "";
        errors.newPassword = !validateStrengthPassword(account.newPassword) ? "Password must contain 1 letter,1 number and 8-16 characters" : "";
        errors.passwordConfirm = (account.newPassword !== account.passwordConfirm) ? "Please confirm password correct" : "";
        
        return errors;
    }

    validateOnchangeInput = (name, account) => {
        const errors = {...this.state.errors};

        switch (name) {
            case "email":
                errors.email = this.validateFunc(account).email;
                break;
            case "password":
                errors.password = this.validateFunc(account).password;
                break;
            case "newPassword":
                errors.newPassword = this.validateFunc(account).newPassword;
                break;
            case "passwordConfirm":
                errors.passwordConfirm = this.validateFunc(account).passwordConfirm;
                break;
            default:
                break;
        }

        this.setState({
            errors
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        let errors = {...this.state.errors};
        errors = this.validateFunc(this.state.account);
        const body = {
            account: this.state.account,
            callBack: (message) => customPopup({
                title: "Success",
                text: message,
                icon: "success",
                showCancelButton: false
            }).then((result) => {
                if(result.isConfirmed){
                    removeLocalStorage("user_token");
                    removeLocalStorage("user_info");
                    this.setState({
                        redirect: true
                    })
                }
            }),
            fallBack: (message) => errorPopup({
                title: "Oops!", 
                text: message, 
                confirmButtonText: "Cancel"
            }),
        }
        if(
            errors.email === "" &&
            errors.password === "" &&
            errors.newPassword === "" &&
            errors.passwordConfirm === "" 
        ) {
            this.props.updatePasswordRequest(body)
        } else {
            this.setState({
                errors
            })
        }
    }


    render() {
        if(this.state.redirect) return <Redirect  to="/login" />
        return (
            <Card className="update-password">
                <div className="title">
                    <strong>Security</strong>
                    <FontAwesome 
                        src={AngleRight}
                        width="25px"
                        height="25px"
                        alt="User edit"
                    />
                    <span>Change your password</span>
                </div>
                <form onSubmit={this.formSubmit}>
                    {this.renderInput(formItem)}
                    <div className="submit-btn">
                        <Button type="text">Save Changes</Button>
                    </div>
                </form>
            </Card>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         stateOfProfileAccountReducers: state.ProfileAccountReducers
//     }
// }

const mapDispatchToProps = (dispatch) => ({
    updatePasswordRequest: (account) => dispatch(ProfileAccountActions.updatePasswordRequest(account))
})

export default connect(null, mapDispatchToProps)(UpdatePassword);
import React, { Component } from 'react';

import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { AuthActions } from "../../../store/actions/index";
import { ToastContainer } from "react-toastify";
import { removeDiacritics } from "../../../helpers/strings";
import { timerIntervalPopup } from '../../../components/SweetAlert/SweetAlert';
import { createLoadingSelector } from '../../../helpers/loadingSelector';
import { validateStrengthPassword } from '../../../helpers/validates';
import { validateErrorNotification } from '../../../components/Notification/Notifies';

import Form from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import LoadingIcon from '../../../components/LoadingIcon/LoadingIcon';

const formItem = [
    {key:"unique-resetPass", name: "password", label: "New password"},
    {key:"unique-resetPass", name: "passwordConfirm", label: "Confirm your password"}
]
class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            account: {
                password: "Linhduong2777",
                passwordConfirm: "Linhduong2777"
            },
            errors: {
                password: "",
                passwordConfirm: ""
            },
            redirect: false
        }

        this.inputRef = [0, 0].map(() =>  React.createRef()) 
    }

    onChangeInput = (e) => {
        const { value, name } = e.target;
        this.setState({
          account: {
            ...this.state.account,
            [name]: removeDiacritics(value).trim()
          }
        }, () => this.validateOnchangeInput(name, this.state.account))
    }
    
    onBlur = (index) => {
        if(this.inputRef[index].current.value !== ""){
            this.inputRef[index].current.classList.add("has-val")
        } else {
            this.inputRef[index].current.classList.remove("has-val")
        }
    }

    validateFunc = (account) => {
        const errors = {};
    
        errors.password = !validateStrengthPassword(account.password) ? "Password must contain 1 letter,1 number and 8-16 characters" : ""; 
        errors.passwordConfirm = (account.password !== account.passwordConfirm) ? "Confirm password are not match" : "";

        return errors
      }

    validateOnchangeInput = (name, account) => {
    const errors = {...this.state.errors};
        switch (name) {
        case "password":
            errors.password = this.validateFunc(account).password
            break;
        case "passwordConfirm":
            errors.passwordConfirm = this.validateFunc(account).passwordConfirm
            break;
        default:
            break;
        }

        this.setState({
            errors
        })
    }
    
    renderForm = (formItem) => {
        if(formItem.length > 0){
            return formItem.map((item, index) => (
                <Form.InputGroup className="input-group" key={item.key} >
                    <Form.InputWithBorder 
                        label={item.label}
                        type="password"
                        name={item.name}
                        inputRef={this.inputRef[index]}
                        onChange={this.onChangeInput}
                        onBlur={() => this.onBlur(index)}
                        value={this.state.account[item.name]}
                    />
                    {
                        this.state.errors[item.name] && <Form.InputError text={this.state.errors[item.name]} />
                    }
                </Form.InputGroup>
            ))
        }

        return null
    }

    formSubmit = (e) => {
        e.preventDefault();
        let errors = {...this.state.errors};
        errors = this.validateFunc(this.state.account);
        let body = {
            account: this.state.account,
            resetToken: this.props.match.params.resetToken || "none",
            callBack: () => (
                timerIntervalPopup({
                    title: "Reset password successfull.",
                    html: "Return to login page in"
                }).then(() => {
                    this.setState({
                        redirect: true
                    })
                })
            ),
            fallBack: (message) => validateErrorNotification(message),
        }
       
        if( 
            errors.password === "" &&
            errors.passwordConfirm === ""
        ) {
          this.props.resetPasswordRequest(body);  
        } else {
          this.setState({
            errors
          })
        }
      }

    render() {
        if(this.state.redirect) return <Redirect to="/login" /> 
        return (
            <div className="reset-password-page">
            {
                this.props.loadingFromResetPassword ? <LoadingIcon /> : null
            }
            <ToastContainer style={{maxWidth: "1000px", width: "auto"}} />
               <div className="container">
                    <h1 className="title">Atrio</h1>
                    <div className="reset-password-form">
                        <h2>Reset Password</h2>
                        <p>Enter your new password.</p>
                        <form onSubmit={this.formSubmit}>
                            {this.renderForm(formItem)}
                            <div className="submit-btn">
                                <Button sample="btn-primary">Reset password</Button>
                            </div>
                        </form>
                    </div>
                    <div className="copyright">
                        @2020 (I do not own this template) All rights reserved | Template by W3layouts.
                    </div>
               </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loadingFromResetPassword: createLoadingSelector(["RESET_PASSWORD"])(state)
})

const mapDispatchToProps = (dispatch) => ({
    resetPasswordRequest: (payload) => dispatch(AuthActions.resetPasswordRequest(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
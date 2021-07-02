import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthActions } from "../../../store/actions/index";
import { successPopup } from "../../../components/SweetAlert/SweetAlert";
import { validateEmail } from "../../../helpers/validates";
import { ToastContainer } from "react-toastify";
import { removeDiacritics } from "../../../helpers/strings";
import { createLoadingSelector } from "../../../helpers/loadingSelector";
import { validateErrorNotification } from "../../../components/Notification/Notifies";

// Components
import Form from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import LoadingIcon from "../../../components/LoadingIcon/LoadingIcon";

const formData = [
  { key: "unique-forgotPass", className: "email", type: "text", name: "email", label: "Email" },
];
class ForgotPassword extends Component {

  constructor(props){
    super(props);

    this.state = {
      account: {
        email: "linhduong2771999@gmail.com",
      },
      errors: {
        email: ""
      }
    }

    this.inputRef = [0].map(() =>  React.createRef()) 

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

    errors.email = !validateEmail(account.email) ? "Invalid Email" : "";
    
    return errors
  }

  validateOnchangeInput = (name, account) => {
    const errors = {...this.state.errors};
      switch (name) {
        case "email":
          errors.email = this.validateFunc(account).email
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
    let body = {
      email: this.state.account.email,
      callBack: (message) => successPopup({
        title: "Success",
        text: message,
        timer: 5000
      }),
      fallBack: (message) => validateErrorNotification(message),
    }
    errors = this.validateFunc(this.state.account);
    if( errors.email === "") {
      this.props.forgotPasswordRequest(body);  
    } else {
      this.setState({
        errors
      })
    }
  }

  renderInput = (data) => (
    data.map((item, index) => (
      <Form.InputGroup key={item.key} >
        <Form.InputWithBorder 
          label={item.label}
          type={item.type}
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
  )

  renderForm = (formData) => (
    <form onSubmit={this.formSubmit}>
      <div className="title"><span>Reset Password</span></div>
      <div className="description">
        <p>Please check your email for tutorials to reset your password.</p>
      </div>
      {this.renderInput(formData)}
      <div className="reset-password-btn">
        <Button sample="btn-primary">Reset my password</Button>
      </div>
      <div className="return-login">
        <Link to="/login">Return to login?</Link>
      </div>
    </form>
  )
  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } };
    // const userToken = getLocalStorage("user_token") || {};
    // if(userToken.exp > Date.now()) return <Redirect to={from} />;
    return (
      <div className="forgot-password-page">
        {
          this.props.loadingFromForgotPassword ? <LoadingIcon /> : null
        }
        <ToastContainer style={{maxWidth: "1000px", width: "auto"}} />
        <div className="container">
          <div className="forgot-password-background"></div>
          <div className="forgot-password-form">
              {this.renderForm(formData)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingFromForgotPassword: createLoadingSelector(["FORGOT_PASSWORD"])(state)
}); // Need re-rendering

const mapDispatchToProps = (dispatch) => ({
  forgotPasswordRequest: (email) => dispatch(AuthActions.forgotPasswordRequest(email))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

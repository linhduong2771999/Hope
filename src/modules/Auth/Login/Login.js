import React, { Component } from "react";
import {  connect } from "react-redux";
import { AuthActions } from "../../../store/actions";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getLocalStorage } from "../../../helpers/localStorage";
import { removeDiacritics } from "../../../helpers/strings";
import { validateEmail, validateStrengthPassword } from "../../../helpers/validates";
import { loginSuccessNotification, validateErrorNotification } from "../../../components/Notification/Notifies";

// Components
import Form from "../../../components/Input/Input";
import Button  from "../../../components/Button/Button";
// Form's info
const formData = [
  {name: "email", type: "text", label: "Email", key: "unique-login1"},
  {name: "password", type: "password", label: "Password", key: "unique-login2"}
];
class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      account: {
        email: "linhduong2771999@gmail.com",
        password: "Linhduong277",
      },
      errors: {},
      isShowPassword: false
    }
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
  
  validateFunc = (account) => {
    const errors = {};

    errors.email = !validateEmail(account.email) ? "Invalid Email" : "";
    errors.password = !validateStrengthPassword(account.password) ? "Password must contain 1 letter,1 number and 8-16 characters" : ""; 

    return errors
  }

  validateOnchangeInput = (name, account) => {
    const errors = {...this.state.errors};
      switch (name) {
        case "email":
          errors.email = this.validateFunc(account).email
          break;
        case "password":
          errors.password = this.validateFunc(account).password;
          break;
        default:
          break;
      }

      this.setState({
        errors
      })
  }

  showPassword = () => {
    this.setState((state, props) => ({
      isShowPassword: !state.isShowPassword
    }))
  }

  formSubmit = (e) => {
    e.preventDefault();
    let errors = {...this.state.errors};
    errors = this.validateFunc(this.state.account);

    const body = {
      account: this.state.account,
      callBack: () => loginSuccessNotification(),
      fallBack: (message) => validateErrorNotification(message),
    }

    if(errors.email === "" && errors.password === "") {
      this.props.loginAccountRequest(body);
    } else {
      this.setState({
        errors
      })
    }
  }

  renderInput = (data) => (
    data.map((item) => {
      if(item.name === "password") {
        return (
          <Form.InputGroup key={item.key}>
              <div className="password">
                <Form.Input
                  name={item.name}
                  onChange={this.onChangeInput}
                  value={this.state.account.password} 
                  type={this.state.isShowPassword ? "text" : item.type} 
                />
                <label>{item.label}</label>
                <Form.ShowPasswordIcon 
                  handleShowPassword={this.showPassword} 
                  isShowPassword={this.state.isShowPassword}
                />
              </div>
              {
                this.state.errors[item.name] && <Form.InputError text={this.state.errors[item.name]} />
              }
          </Form.InputGroup>
        )
      }
      return (
        <Form.InputGroup key={item.key}>
            <div className="username">
              <Form.Input
                name={item.name}
                type={item.type} 
                onChange={this.onChangeInput}
                value={this.state.account.email} 
              />
              <label>{item.label}</label>
            </div>
            {
              this.state.errors[item.name] && <Form.InputError text={this.state.errors[item.name]} />
            }
        </Form.InputGroup>
      )
    })
  )

  renderForm = (formData) => (
    <form onSubmit={this.formSubmit}>
      <div className="title">
          <h2>Login</h2>
      </div>
      {this.renderInput(formData)}
      <div className="forgot-password">
        <Link to="/forgotPassword">
            Forgot password?
        </Link>
      </div>
      <div className="return-signup">
        <Link to="/signup">
            Dont't have an account?
        </Link>
      </div>
      <div className="login-btn">
          <Button sample="btn-primary">Login</Button>
      </div>
    </form>
  )

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const userToken = getLocalStorage("user_token") || {};
    if(userToken.exp > Date.now()) return <Redirect to={from} />
    return (
      <div className="login">
        <ToastContainer style={{maxWidth: "700px", width: "auto"}} />
        <div className="login-container">
          <div className="background">
            <div className="login-form">
                {this.renderForm(formData)}
            </div>
            <div className="register">
                <p>Don't have an account?</p>
                <Link className="register-btn" to="/signup">Register</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stateOfAuthReducers: state.AuthReducers
})

const mapDispatchToProps = (dispatch) => ({
  loginAccountRequest: (account) => dispatch(AuthActions.loginAccountRequest(account))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
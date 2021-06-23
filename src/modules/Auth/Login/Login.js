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
import Eye from "../../../assets/images/svg/eye.svg";
import Button  from "../../../components/Button/Button";
import EyeSlash from "../../../assets/images/svg/eye-slash.svg";
import FontAwesome from "../../../components/FontAwesome/FontAwesome";

// Form's info
const formData = [
  {name: "email", type: "text", label: "Email"},
  {name: "password", type: "password", label: "Password"}
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
    errors.password = !validateStrengthPassword(account.password) ? "password must contain 1 letter,1 number, 1 special and be 8-16 characters" : ""; 

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
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
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
    data.map((item, index) => {
      if(item.name === "password") {
        return (
          <div className="input-group" key={index}>
              <div className="password">
                <input
                  name={item.name}
                  onChange={this.onChangeInput}
                  value={this.state.account.password} 
                  type={this.state.isShowPassword ? "text" : item.type} 
                />
                <label>{item.label}</label>
                <div className="show-password" onClick={this.showPassword}>
                    <FontAwesome  
                      width="20px"
                      height="20px"
                      alt={"Show password"}
                      src={this.state.isShowPassword ? EyeSlash : Eye}
                      />
                </div>
              </div>
              {
                this.state.errors[item.name] && <span className="input-error">{this.state.errors[item.name]}</span>
              }
          </div>
        )
      }
      return (
        <div className="input-group" key={index}>
            <div className="username">
              <input
                name={item.name}
                type={item.type} 
                onChange={this.onChangeInput}
                value={this.state.account.email} 
              />
              <label>{item.label}</label>
            </div>
            {
              this.state.errors[item.name] && <span className="input-error">{this.state.errors[item.name]}</span>
            }
        </div>
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
        <Link to="/">
            Forgot password?
        </Link>
      </div>
      <div className="login-btn">
          <Button>Login</Button>
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
            <div className="login-form">
                {this.renderForm(formData)}
            </div>
            <div className="register">
                <p>Don't have an account?</p>
                <Link className="register-btn" to="/signup">Register</Link>
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
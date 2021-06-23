import React, { Component } from "react";

import { connect } from "react-redux";
import { AuthActions } from "../../../store/actions/index";
import { Link, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getLocalStorage } from "../../../helpers/localStorage";
import { removeDiacritics } from "../../../helpers/strings";
import { 
  validateEmail, 
  validateStrengthPassword, 
  validatePhoneNumber, 
  validateName 
} from "../../../helpers/validates";
import { 
  loginSuccessNotification, 
  validateErrorNotification 
} from "../../../components/Notification/Notifies";

// Components
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

// Form's info
const checkedBoxData = [
  { className: "role", type: "radio", name: "role", value: ["USER"], label: "User", checked: true },
  { className: "role", type: "radio", name: "role", value: ["USER", "SHOP"], label: "Shop" },
]

const formData = [
  { className: "name", type: "text", name: "name", label: "Username" },
  { className: "email", type: "text", name: "email", label: "Email" },
  { className: "phone", type: "text", name: "phone", label: "Phone" },
  { className: "password", type: "password", name: "password", label: "Password" },
  { className: "confirmPassword", type: "password", name: "confirmPassword", label: "Confirm password" },
];
class Signup extends Component {

  constructor(props){
    super(props);

    this.state = {
      account: {
        name: "linhduong",
        email: "linhduong2771999@gmail.com",
        phone: "0942740975",
        password: "Linhduong277",
        confirmPassword: "Linhduong277",
        role: ["USER"]
      },
      errors: {}
    }

    this.inputRef = [0,0,0,0,0].map(() =>  React.createRef()) // create 5 input ref

  }

  onChangeCheckedBox = (e) => {
    const {name, value} = e.target; 
    this.setState({
      account: {
        ...this.state.account,
        [name]: value.split(",")
      }
    })
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

    errors.name = !validateName(account.name) ? "Name must be at least 5 characters and no number" : ""
    errors.email = !validateEmail(account.email) ? "Invalid Email" : "";
    errors.phone = !validatePhoneNumber(account.phone) ? "Invalid phone number" : "";
    errors.password = !validateStrengthPassword(account.password) ? "Password must contain 1 letter,1 number and 8-16 characters" : ""; 
    errors.confirmPassword = (account.password !== account.confirmPassword) ? "Confirm password are not match" : "";
    
    return errors
  }

  validateOnchangeInput = (name, account) => {
    const errors = {...this.state.errors};
      switch (name) {
        case "name":
          errors.name = this.validateFunc(account).name;
          break;
        case "email":
          errors.email = this.validateFunc(account).email
          break;
        case "phone":
          errors.phone = this.validateFunc(account).phone;
          break;
        case "password":
          errors.password = this.validateFunc(account).password;
          break;
        case "confirmPassword":
          errors.confirmPassword = this.validateFunc(account).confirmPassword;
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
      account: this.state.account,
      callBack: () => loginSuccessNotification(),
      fallBack: (message) => validateErrorNotification(message),
    }
    errors = this.validateFunc(this.state.account);
    if(
      errors.name === "" && 
      errors.email === "" &&
      errors.phone === "" && 
      errors.password === "" && 
      errors.confirmPassword === "" 
      ) {
      this.props.signupAccountRequest(body);  
    } else {
      this.setState({
        errors
      })
    }
  }

  renderCheckedBox = (data) => (
    data.map((item, index) => (
      <div className="checkbox-group" key={index} >
          <label className={item.className}>
              {item.label}
              <Input 
                type={item.type} 
                name={item.name} 
                value={item.value}
                defaultChecked={item.checked}
                onChange={this.onChangeCheckedBox}
              />
              <span className="checkmark"></span>
          </label>
      </div>
    ))
  )

  renderInput = (data) => (
    data.map((item, index) => (
      <div className="input-group" key={index} >
        <div className={item.className}>
          {
            <Input 
              type={item.type} 
              name={item.name} 
              ref={this.inputRef[index]}
              onChange={this.onChangeInput}
              onBlur={() => this.onBlur(index)}
              value={this.state.account[item.name]}
            />
          }
          <label>{item.label}</label>
          <div className="border"></div>
        </div>
        {
          this.state.errors[item.name] && <span className="input-error">{this.state.errors[item.name]}</span>
        }
      </div>
    ))
  )

  renderForm = (formData) => (
    <form onSubmit={this.formSubmit}>
      <div className="title"><span>Register</span></div>
      {this.renderInput(formData)}
      {this.renderCheckedBox(checkedBoxData)}
      <div className="already-signup">
        <Link to="/login">Already Registered?</Link>
      </div>
      <div className="signup-btn">
        <Button>Register</Button>
      </div>
    </form>
  )
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const userToken = getLocalStorage("user_token") || {};
    if(userToken.exp > Date.now()) return <Redirect to={from} />;

    return (
      <div className="signup">
        <ToastContainer style={{maxWidth: "700px", width: "auto"}} />
        <div className="signup-container">
          <div className="signup-background"></div>
          <div className="signup-form">
              {this.renderForm(formData)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({state}); // Need re-rendering

const mapDispatchToProps = (dispatch) => ({
  signupAccountRequest: (account) => dispatch(AuthActions.signupAccountRequest(account))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import  Button  from "../../../components/Button/Button";
// import
class Login extends Component {
  render() {
    return <div className="login">
        <div className="login-container">
              <div className="login-form">
                  <form>
                    <div className="title">
                        <h2>Login</h2>
                    </div>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <label>Mail or Username</label>
                    </div>
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <label>Password</label>
                    </div>
                    <div className="forgot-password">
                      <Link>
                          Forgot password?
                      </Link>
                    </div>
                    <div className="login-btn">
                        <Button>Login</Button>
                    </div>
                  </form>
              </div>
          </div>
    </div>;
  }
}

export default Login;

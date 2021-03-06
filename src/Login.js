import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const bcrypt = require('bcryptjs')
var CryptoJS = require("crypto-js");

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };








  submit = (event) => {
    event.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    axios({
      url: "https://webgen-assessment-backend.herokuapp.com/authentication/login",
      method: "POST",
      data: payload,
    })
      .then(async (res) => {
        console.log("Success");
        console.log(res);
        if (res.data.status === "success") {
          alert("Login Successful");


          // const salt = await bcrypt.genSalt(10);
          // const userId= await bcrypt.hash(res.data.userId, salt);

          // Encrypt
          // var ciphertext = CryptoJS.AES.encrypt(res.data.userId, 'secret key 123').toString();

          // Decrypt
          // var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
          // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

          localStorage.setItem('userId',res.data.userId)

          Cookies.set('jwt', res.data.jwt, { expires: 3 })
          this.props.history.push("/");
        } else {
          if (res.data.errors.email.length) {
            alert(res.data.errors.email);
          } else if (res.data.errors.password.length) {
            alert(res.data.errors.password);
          }
        }
      })
      .catch((err) => {
        console.log("Internal server error");
        alert("Internal Server Error. Please try again.");
        console.log(err);
      });
  };

  render() {
    console.log("state: ", this.state);
    return (
      <div id="login">
        <form onSubmit={this.submit}>
          {/* <img  src={logo} alt="" className="img-fluid" /> */}
          <p>Welcome to Webgen Technologies</p>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

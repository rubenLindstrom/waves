import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FormField from "../utils/Form/formfield";
import { update, generateData, validateForm } from "../utils/Form/formActions";

import { connect } from "react-redux";
import { loginUser } from "../../actions/user";

class Login extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ""
      }
    }
  };

  updateForm = el => {
    el.event.persist();
    const newFormData = update(el, this.state.formData, "login");
    this.setState({
      formData: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();

    const data = generateData(this.state.formData, "login");
    const isValid = validateForm(this.state.formData, "login");

    if (isValid) {
      this.props.dispatch(loginUser(data)).then(res => {
        if (res.payload.loginSuccess) {
          this.props.history.push("/user/dashboard");
        } else {
          this.setState({
            formError: true
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={e => this.submitForm(e)}>
          <FormField
            id={"email"}
            formData={this.state.formData.email}
            onChange={el => this.updateForm(el)}
          />
          <FormField
            id={"password"}
            formData={this.state.formData.password}
            onChange={el => this.updateForm(el)}
          />

          {this.state.formError ? (
            <div className="error_label">Please check your data!</div>
          ) : null}
          <button
            type="default"
            linkTo="/user/dashboard"
            onClick={e => this.submitForm(e)}
          >
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(withRouter(Login));

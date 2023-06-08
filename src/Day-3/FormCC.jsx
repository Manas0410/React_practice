import { Component } from "react";

class FormCC extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  /*   onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }; */

  onInputChange = (e) => {
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
        </div>
      </div>
    );
  }
}

export default FormCC;

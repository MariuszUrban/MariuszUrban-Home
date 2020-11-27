import React, { Component } from "react";
import "./_message.scss";
export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <form
        id="contact-form"
        className="MessageContainer"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="inputs">
          <div className="input-container">
            <div className="ph-img name-img"></div>
            <input
              type="text"
              className="form-control ph"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
              placeholder="Twoje imię"
            />
          </div>
          <div className="input-container">
            <div className="ph-img email-img"></div>
            <input
              type="email"
              className="form-control ph"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
              placeholder="E-mail"
            />
          </div>
        </div>
        <div className="message-container">
          <textarea
            className="form-control message"
            value={this.state.message}
            onChange={this.onMessageChange.bind(this)}
            placeholder="Wiadomość"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn-contact">
          <div className="m-img"></div>
            <span>Wyślij</span>
          </button>
        </div>
      </form>
    );
  }
}

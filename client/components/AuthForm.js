import React, { Component } from 'react';
import '../styles/authForm.css';
class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: ''};
  }

  onSubmit(event) {
    event.preventDefault();

    // const { email, password } = this.state;
    // this.props.onSubmit({ email, password });

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className="auth-form">
        <div >
          <input 
            className="auth-form__input"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div >
          <input 
            className="auth-form__input"
            placeholder="Password"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="auth-form__errors">
          { this.props.errors.map(error => <div key={error}>{error}</div>) }
        </div>
        <button className="auth-form__btn">Submit</button>
      </form>
    )
  }
}

export default AuthForm;

import React, { Component } from 'react';
import { Link } from 'react-router';

import { graphql } from 'react-apollo';
import CurrentUserQuery from '../queries/CurrentUser';
import LogoutMutation from '../mutations/Logout';

import '../styles/header.css';
import navUserImage from '../assets/reggie.png';
class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: CurrentUserQuery}]
    });
  }
  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) { return <div/>; }
    if (user) {
      return (
        <li>
          <a 
            onClick={this.onLogoutClick.bind(this)} 
            className="nav__button-link">Logout
          </a>
        </li>
      );
    } else {
      return (
        <div className="nav__button-list">
          <li className="nav__button-item">
            <Link to="/signup" className="nav__button-link">Signup</Link>
          </li>
          <li className="nav__button-item">
            <Link to="/login" className="nav__button-link">Login</Link>
          </li>
        </div>
      );
    }
  }
  renderUser() {
    const { loading, user } = this.props.data;
    if (loading) { return <div/>; }
    if (user) {
      console.log(user.firstName);
      console.log(user.email);
      console.log(user.id);
      return (
        <div className="nav__user">
          {/* <Link to="/edit" className="nav__user-profile-icon">Edit User</Link> */}
          <Link to="/profile" className="nav__user-profile-icon">Profile</Link>
          <div className="nav__user-name">{user.email}</div>
          <img src={navUserImage}
            className="nav__user-image"/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
  renderLogo() {
    const { loading, user } = this.props.data;
    if (loading) { return <div/>; }
    if (user) {
      return (
        <Link to="/dashboard" className="nav__logo">Logo link</Link>
      );
    } else {
      return (
        <Link to="/" className="nav__logo">Logo link</Link>
      );
    }
  }
  render() {
    return (
      <nav className="nav">
        {this.renderLogo()}
        <div className="nav__right">
          <ul className="nav__button-list">
            {this.renderButtons()}
          </ul>
          <div className="nav__user">
            {this.renderUser()}
          </div>
        </div>
      </nav>
    );
  }
}
export default graphql(LogoutMutation)(
  graphql(CurrentUserQuery)(Header)
);

import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/profile.css';
import { graphql } from 'react-apollo';
import CurrentUserQuery from '../queries/CurrentUser';


class ProfilePage extends Component {
  render() {
    const { loading, user } = this.props.data;
    console.log(user);
    if (loading) {
      return <div/>
    }
    return (
      <div className="profile">
        <Link to="/edit" className="profile__link-edit-user">Edit User</Link>
        <h1 className="profile__header">Profile Page to display profile data.</h1>
        <div className="profile__box">
          <div className="profile__box-first-name">First Name: {user.firstName}</div>
          <div className="profile__box-email">Email: {user.email}</div>
        </div>
      </div>
    )
  }
}

export default graphql(CurrentUserQuery)(ProfilePage);

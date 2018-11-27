import React, { Component } from 'react';
import '../styles/editUserForm.css';

class EditUserForm extends Component {
  render() {
    return (
      <div className="edit-user">
        <h3 className="edit-user__header">Edit User</h3>
        <form className="edit-user__form">
          <div className="edit-user__form__field">
            {/* <label>First Name:</label> */}
            <input 
              className="edit-user__input"
              placeholder="First Name"
              />
          </div>
          <div className="edit-user__form__field">
            <input 
              className="edit-user__input"
              placeholder="Email"
              />
          </div>
          {/* <div className="edit-user__form__field">
            <input 
                className="edit-user__input"
                placeholder="Password"
                type="password"
              />
          </div> */}
          <div className="edit-user__form__field">
            <input 
                className="edit-user__input-button"
                type="submit"
              />
          </div>
        </form>
      </div>
    )
  }
}

export default EditUserForm;
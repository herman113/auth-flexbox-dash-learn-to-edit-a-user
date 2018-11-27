import React, { Component } from 'react'
import SideBar from './SideBar';
import Content from './Content';

import '../styles/dashboard.css';
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <p className="dashboard__login-message">Logged in to Dashboard. How can I make this message temporary?</p>
        <SideBar/>
        <Content/>
      </div>
    )
  }
}

export default Dashboard;

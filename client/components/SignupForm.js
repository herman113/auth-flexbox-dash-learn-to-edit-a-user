import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import { graphql } from 'react-apollo';
import SignupMutation from '../mutations/Signup';
import CurrentUserQuery from '../queries/CurrentUser';
import { hashHistory } from 'react-router';
import '../styles/signup-form.css'

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = { errors: [] }
  }

  componentWillUpdate(nextProps) {
    // this.props // the old, current set of props
    // nextProps // the next set of props that will be in place
    // when the component rerenders
    if (!this.props.data.user && nextProps.data.user) {
      // redirect to dashboard!!!
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query: CurrentUserQuery }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors: errors });
    })
  }

  render() {
    return (
      <div className="signup-form">
        <h3 className="signup-form__header">Signup</h3>
        <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}

export default graphql(CurrentUserQuery)(
  graphql(SignupMutation)(SignupForm)
);
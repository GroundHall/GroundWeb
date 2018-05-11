import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import classnames from 'classnames';

import Button from '@atlaskit/button';
import FieldText from '@atlaskit/field-text';
import Spinner from '@atlaskit/spinner';

import flamePNG from './assets/groundFlame.png';
import styles from './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleLoding = this.toggleLoding.bind(this);
  }

  toggleLoding() {
    this.setState({ loading: !this.state.loading });
  }

  handleLogin() {
    const { email, password } = this.state;
    if (email && password) {
      this.toggleLoding();
      this.props.authenticate({
        variables: { email, password }
      }).then(({data: { authenticate }}) => {
        this.toggleLoding();
        localStorage.setItem('authToken', authenticate);
        this.props.history.push('/feed');
      }).catch(({ graphQLErrors }) => {
        this.setState({
          error: graphQLErrors[0].message,
          loading: false
        });
      });
    } else {
      this.setState({
        error: 'Please enter all the required fields!',
        loading: false
      });
    }
  }

  handleInputChange(field) {
    return ({ target: { value } }) => {
      this.setState({ [field]: value });
    };
  }

  render() {
    const {
      email, password, error, loading
    } = this.state;

    if (loading) {
      return (
        <div className={styles.loginWrap}>
          <img src={flamePNG} alt="GroundHall" style={{ marginBottom: '-68px', zIndex: 3 }} />
          <div className={classnames(styles.contentWrap, styles.spinnerWrap)}>
            <Spinner size="large" />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.loginWrap}>
        <img src={flamePNG} alt="GroundHall" style={{ marginBottom: '-68px', zIndex: 3 }} />
        <div className={styles.contentWrap}>
          <FieldText
            label="E-Mail"
            placeholder="Enter E-Mail here..."
            value={email}
            onChange={this.handleInputChange('email')}
            shouldFitContainer
            isInvalid={error}
            invalidMessage={error}
            required
            disabled={loading}
          />
          <FieldText
            label="Password"
            type="password"
            placeholder="Enter Password here..."
            value={password}
            onChange={this.handleInputChange('password')}
            shouldFitContainer
            isInvalid={error}
            invalidMessage={error}
            required
            disabled={loading}
          />
          <Button
            type="submit"
            onClick={this.handleLogin}
            appearance="primary"
            className={styles.loginButton}
            isDisabled={loading}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}


const authenticate = gql`
  mutation authenticate($email: String!, $password: String!) {
      authenticate(email: $email, password: $password)
  }
`;


export default compose(
  graphql(authenticate, { name: 'authenticate' })
)(withRouter(Login));

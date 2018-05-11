import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { ProfileView } from '../../components/Profile';
import styles from './style.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kristiyan Serafimov'
    };
  }
  render() {
    return (
      <div className={styles.pageWrap}>
        <ProfileView />
      </div>
    );
  }
}

export default withRouter(Profile);

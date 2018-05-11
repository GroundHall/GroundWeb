import React from 'react';
import Avatar from '@atlaskit/avatar';
import FireOutlineSVG from './assets/fireOutline.svg';

import styles from './style.css';

const View = () => (
  <div>
    <div id="tag" className={styles.tag} />
    <div id="profile" className={styles.profileWrap}>
      <div className={styles.profileLeft}>
        <img
          className={styles.avatar}
          src="http://www.gamepeople.co.uk/screens/psv_chronovolt_shot4.jpg"
          alt=""
        />
        <div className={styles.nameUsernameTypeWrap}>
          <div className={styles.nameWrap}>Kristiyan Serafimov</div>
          <div className={styles.usernameTypeWrap}>@chrispcode, Admin</div>
        </div>
      </div>
      <div className={styles.profileRight}>
        <button className={styles.friendButton}>
          <FireOutlineSVG />
          Friend
        </button>
        <button className={styles.messageButton}>Message</button>
      </div>
    </div>
    <div id="quotas" className={styles.quotas}>Everything is shit, no matter what you do!</div>
  </div>
);

export default View;

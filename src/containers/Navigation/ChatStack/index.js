import React, { Fragment } from 'react';
import { AkNavigationItem } from '@atlaskit/navigation';

import Avatar from '@atlaskit/avatar';
import Loading from '@atlaskit/spinner';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';

import styles from './style.css';

const defaultProps = {
  friends: []
};

const ChatStack = ({ friends }) => {
  if (!friends.length) {
    return (
      <div className={styles.loaderWrap}>
        <Loading size="medium" />
      </div>
    );
  }
  return (
    <Fragment>
      { friends.map(({ firstName, lastName, avatarURL }) => (
        <AkNavigationItem
          icon={<Avatar size="small" src={avatarURL} />}
          text={`${firstName} ${lastName}`}
          key={`${firstName} ${lastName}`}
        />
    ))}
    </Fragment>
  );
};

ChatStack.defaultProps = defaultProps;

export default ChatStack;

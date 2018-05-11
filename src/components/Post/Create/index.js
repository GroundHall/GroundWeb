import React, { Component } from 'react';
import { autobind } from 'core-decorators';

import Avatar from '@atlaskit/avatar';
import TextareaAutosize from 'react-textarea-autosize';
import Spinner from '@atlaskit/spinner';
import Toggle from '@atlaskit/toggle';


import styles from './style.css';

import CircleButton from '../../Button/Circle';

const AVATAR_BORDER_COLOR = '#172B4D';

class Create extends Component {
  render() {
    const {
      user: {
        firstName,
        lastName,
        avatarURL
      },
      text,
      onChange,
      onCreate,
      hashtag: {
        id,
        name
      },
      loading
    } = this.props;

    const avatarProps = {
      borderColor: AVATAR_BORDER_COLOR,
      borderWidth: '4px',
      size: 'large',
      src: avatarURL
    };
    debugger;
    return (
      <div className={styles.createPostWrap}>
        <div className={styles.tag}>{`@${firstName} ${lastName}`}</div>
        <div className={styles.feed}>
          <div className={styles.topWrap}>
            <div className={styles.topLeftWrap}>
              <img src={avatarURL} className={styles.avatar} />
              <div className={styles.ndWrap}>
                <div className={styles.name}>{`${firstName} ${lastName}`}</div>
                <div className={styles.date}>create post</div>
              </div>
            </div>
            <div className={styles.topRightWrap}>
              <div className={styles.publicLabel}>Public?</div>
              <Toggle label="Public" isChecked={this.props.isPublicityChecked} onChange={this.props.onPostPublicityChange} />
            </div>
          </div>
          <div className={styles.bubbleInputWrap}>
            <TextareaAutosize
              value={text}
              onChange={onChange}
              className={styles.textBubble}
              placeholder="What do you have to say?"
              disabled={loading}
            />
            <div className={styles.errorMessage}>
            Psss, the post cannot be longer than 140 characters!
            </div>
          </div>
        </div>
        <div className={styles.circleButtonWrap}>
          <CircleButton onClick={onCreate} loading={loading} />
        </div>
      </div>

    );
  }
}

export default Create;

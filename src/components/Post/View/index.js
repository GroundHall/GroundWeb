import React from 'react';
import Avatar from '@atlaskit/avatar';
import { Line } from 'rc-progress';

import FireFillSVG from './assets/fireFill.svg';
import FireOutlineSVG from './assets/fireOutline.svg';
import styles from './style.css';

const AVATAR_BORDER_COLOR = '#172B4D';

const Post = ({
  user: {
    firstName,
    lastName,
    avatarURL
  },
  text,
  likeCount,
  isLiked,
  onLikeClick,
  onUnlikeClick,
  loading
}) => {
  const avatarProps = {
    borderColor: AVATAR_BORDER_COLOR,
    size: 'medium',
    src: avatarURL
  };
  const svgProps = {
    height: '20px',
    fill: isLiked ? '#E91E63' : '#FF467E'
  };
  const SVGComponent = isLiked ? FireFillSVG : FireOutlineSVG;
  const likeButtonClassName =
    isLiked ? styles.likeButtonTextActive : styles.likeButtonText;
  const likeText = isLiked ? 'Liked' : 'Like';
  const action = isLiked ? onUnlikeClick : onLikeClick;
  const loaderPercent = loading ? "100" : "0";
  const loaderStyle = loading ? {} : {display: 'none'};
  return (
    <div className={styles.feed}>
      {loading && <div className={styles.loadingBar} />}
      <div className={styles.topWrap}>
        <Avatar {...avatarProps} />
        <div className={styles.ndWrap}>
          <div className={styles.name}>{`${firstName} ${lastName}`}</div>
          <div className={styles.date}>now</div>
        </div>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.likeCount}>{likeCount}</div>
      <div className={styles.bottom}>
        <a className={styles.likeButton} onClick={action}>
          <SVGComponent {...svgProps} />
          <div className={likeButtonClassName}>{likeText}</div>
        </a>
      </div>
    </div>
  );
};


export default Post;

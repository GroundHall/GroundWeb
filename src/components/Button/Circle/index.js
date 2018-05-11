import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Spinner from '@atlaskit/spinner';

import SendIcon from './assets/send.svg';
import styles from './style.css';

const propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  IconComponent: PropTypes.func,
  className: PropTypes.string
};

const defaultProps = {
  onClick: () => {console.log("Clicked me!")},
  loading: false,
  IconComponent: SendIcon,
  className: ''
};

const CircleButton = ({
  onClick,
  loading,
  IconComponent,
  className
}) => {
  const wrapperClassName =
    loading ? styles.addSpinnerWrapper : styles.addIconWrapper;
  return (
    <button
      disabled={loading}
      className={classnames(styles.addButton, className)}
      onClick={onClick}
    >
      <div className={wrapperClassName}>
        {
          loading
          ? <Spinner invertColor size="medium" />
          : <IconComponent height="28px" fill="white" />
        }
      </div>
    </button>
  );
};

CircleButton

CircleButton.propTypes = propTypes;
CircleButton.defaultProps = defaultProps;

export default CircleButton;

import React from 'react';
import { AkNavigationItem, AkContainerTitle, AkContainerTitleDropdown } from '@atlaskit/navigation';
import DropdownMenu, { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';

import Avatar from '@atlaskit/avatar';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';

const defaultProps = {
  name: '',
  accountType: 'student',
  isNavigationOpen: 'false'
};

const Header = ({
  user: {
    firstName,
    lastName,
    avatarURL,
    type
  },
  onBack,
  shouldBackExist,
  isNavigationOpen,
  onLogout
}) => (
  <React.Fragment>
    <AkContainerTitleDropdown
      icon={
        <Avatar
          src={avatarURL}
          size={isNavigationOpen ? 'medium' : 'small'}
          label="Back"
        />}
      text={`${firstName} ${lastName}`}
      subText={type.charAt(0).toUpperCase() + type.slice(1)}
    >
      <DropdownItemGroup title={`${firstName} ${lastName}`}>
        <DropdownItem onClick={onLogout}>
          Logout
        </DropdownItem>
      </DropdownItemGroup>
    </AkContainerTitleDropdown>
    {shouldBackExist && (
      <AkNavigationItem
        icon={<ArrowLeftIcon label="Back" />}
        onClick={onBack}
        text="Back"
      />
  )}
  </React.Fragment>
);

Header.defaultProps = defaultProps;

export default Header;

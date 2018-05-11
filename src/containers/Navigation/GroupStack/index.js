import React, { Fragment } from 'react';
import { AkNavigationItem } from '@atlaskit/navigation';
import Avatar from '@atlaskit/avatar';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';

const GroupStack = () => (
  <Fragment>
    <AkNavigationItem
      icon={
        <Avatar size="small" src="https://i.pinimg.com/originals/95/ca/24/95ca24f9bc5a8d131cf3a25081b02e9b.jpg"  />
      }
      text="Someone There"
      key="Group Stuff"
    />
    <AkNavigationItem
      icon={<PeopleGroupIcon label="Question" />}
      text="More Group Stuff"
      key="More Group Stuff"
    />
  </Fragment>
);

export default GroupStack;

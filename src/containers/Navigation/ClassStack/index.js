import React, { Fragment } from 'react';
import { AkNavigationItem } from '@atlaskit/navigation';

import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';

const ClassStack = () => (
  <Fragment>
    <AkNavigationItem
      icon={<PeopleGroupIcon label="Calendar" />}
      text="Class stuff"
      key="Class stuff"
    />
    <AkNavigationItem
      icon={<PeopleGroupIcon label="Question" />}
      text="More Class stuff"
      key="More Class stuff"
    />
  </Fragment>
);

export default ClassStack;

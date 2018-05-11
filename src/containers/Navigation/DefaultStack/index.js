import React, { Fragment } from 'react';

// Atlaskit
import Button from '@atlaskit/button';
import { AkNavigationItem } from '@atlaskit/navigation';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';
import CommentIcon from '@atlaskit/icon/glyph/comment';
import ClassIcon from '@atlaskit/icon/glyph/backlog';

const DefaultStack = ({
  onChatSelect,
  onClassSelect,
}) => (
  <Fragment>
    <AkNavigationItem
      action={
        <Button
          appearance="subtle"
          iconBefore={<ChevronRightIcon label="goToChat" size="medium" />}
          spacing="none"
        />
        }
      key="Chat"
      text="Chat"
      onClick={onChatSelect}
      icon={
        <CommentIcon
          label="Chat"
          secondaryColor="inherit"
          size="medium"
        />
    }
    />
    <AkNavigationItem
      action={
        <Button
          appearance="subtle"
          iconBefore={<ChevronRightIcon label="goToClass" size="medium" />}
          spacing="none"
        />
        }
      key="Class"
      text="Class"
      onClick={onClassSelect}
      icon={
        <ClassIcon
          label="Class"
          secondaryColor="inherit"
          size="medium"
        />
    }
    />
  </Fragment>
);

export default DefaultStack;

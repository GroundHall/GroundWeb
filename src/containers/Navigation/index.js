import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { autobind } from 'core-decorators';

import Navigation, {
  AkCollapseOverflowItem,
  AkCollapseOverflowItemGroup,
  AkCollapseOverflow,
  presetThemes,
  AkContainerTitle,
  AkNavigationItemGroup,
  AkNavigationItem,
  AkGlobalItem,
  AkContainerNavigationNested,

} from '@atlaskit/navigation';
import ClassIcon from '@atlaskit/icon/glyph/backlog';

import DropList, {
  DroplistGroup,
  Item
} from '@atlaskit/droplist';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import DiscoverIcon from '@atlaskit/icon/glyph/discover';
import Button from '@atlaskit/button';
import AddonIcon from '@atlaskit/icon/glyph/addon';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';


import { compose } from 'react-apollo';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CommentIcon from '@atlaskit/icon/glyph/comment';

import EditorMediaWideIcon from '@atlaskit/icon/glyph/editor/media-wide';
import AddIcon from '@atlaskit/icon/glyph/add';
import Tooltip from '@atlaskit/tooltip';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';


import Avatar from '@atlaskit/avatar';

import meQuery from './query.js';

import Header from './Header';
import PrimaryIcon from './PrimaryIcon';
import DefaultStack from './DefaultStack';
import GroupStack from './GroupStack';
import ClassStack from './ClassStack';
import ChatStack from './ChatStack';


class GNavigation extends Component {
  state = {
    isOpen: false,
    isLogoutOpen: false,
    stack: [
      <DefaultStack
        onClassSelect={() => this.stackPush(GroupStack)}
        onChatSelect={() => this.stackPush(() => <ChatStack friends={this.props.me.friends} />)}
        key="defaultStack"
      />
    ],
    shouldBackExist: false
  };

  static defaultProps = {
    me: {
      firstName: '',
      lastname: '',
      friends: [],
      type: ''
    }
  };


  
  @autobind
  handleStackChange(ItemsComponent, props = {}) {
    return () => {
      this.setState({
        stack: [
          ...this.state.stack,
          [<ItemsComponent key="additionalStack" {...props} />],
        ],
        shouldBackExist: true
      });
    }
  };

  @autobind
  resize(resizeState) {
    this.setState({
      isOpen: resizeState.isOpen,
    });
  }

  @autobind
  stackPush(Item) {
    debugger;
    const stack = [...this.state.stack, <Item />];
    this.setState({ stack });
  }

  @autobind
  stackPop() {
    if (this.state.stack.length > 1) {
      const stack = this.state.stack.slice(0, this.state.stack.length - 1);
      this.setState({ stack });
    }
  }

  @autobind
  goBackHome() {
    return this.setState({ 
      stack: [this.defaultStack],
      shouldBackExist: false
    });
  };

  @autobind
  handleLogout() {
    localStorage.removeItem('authToken');
    this.props.history.push('/login');
  }

  renderPrimaryActions() {
    return [
      <AkGlobalItem size="medium">
        <Tooltip position="right" content="Search">
          <SearchIcon
            label="Search icon"
            secondaryColor="inherit"
            size="medium"
          />
        </Tooltip>
      </AkGlobalItem>
    ];
  }


  render() {
    const { firstName, lastName, type, avatarURL } = this.props.me;
    return (
      <Navigation
        width={320}
        containerHeaderComponent={
          () => (
          <Header 
            onLogout={this.handleLogout}
            isNavigationOpen={this.state.isOpen}
            onBack={this.stackPop}
            shouldBackExist={this.state.stack.length > 1}
            user={this.props.me}
          />
        )}
        globalPrimaryIcon={<PrimaryIcon />}
        globalPrimaryItemHref="/feed"
        isOpen={this.state.isOpen}
        onResize={this.resize}
        globalPrimaryActions={this.renderPrimaryActions()}
      >
        <AkContainerNavigationNested stack={this.state.stack} />
      </Navigation>
    );
  }
}

export default withRouter(
  compose(meQuery)
(GNavigation));

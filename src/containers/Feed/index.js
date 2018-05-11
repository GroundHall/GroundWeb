import React, { Component } from 'react';
import { compose } from 'react-apollo';
import gql from 'graphql-tag';
import { autobind } from 'core-decorators';

import Spinner from '@atlaskit/spinner';
import VisibilitySensor from 'react-visibility-sensor';
import InfiniteScroll from 'react-infinite-scroller';

import Post, { Create } from '../../components/Post';
import { meQuery, postQuery, POST_UPDATE_QUERY_TAG } from './query';
import { likePost, unlikePost, createPost } from './mutations';

import style from './style.css';

const defaultProps = {
  posts: [],
};

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createPostText: '',
      createPostLoading: false,
      visiblePostIds: [],
      currentPostLength: 0,
      createPostPublicity: false
    };
    this.unsubscribe = () => {};
  }

  @autobind
  handleEndReached() {
    if (this.props.posts.length && this.state.currentPostLength !== this.props.posts.length) {
      this.props.updateFeed();
      this.setState({ currentPostLength: this.props.posts.length });
    }
  }

  @autobind
  handleCreatePostPublicityChange() {
    debugger;
    this.setState((prevState) => {
      return {createPostPublicity: !prevState.createPostPublicity}
    })
  }

  @autobind
  handlePostVisibilityChange(id) {
    return (isVisible) => {
      if (isVisible) {
        this.setState((prevState) => {
          this.unsubscribe();
          this.unsubscribe = this.props.subscribeToPostChanges({
            postIds: [...prevState.visiblePostIds, id],
            me: this.props.me
          });
          return {
            visiblePostIds: [...prevState.visiblePostIds, id]
          };
        });
      } else {
        this.setState((prevState) => {
          const { visiblePostIds } = prevState;
          const index = visiblePostIds.indexOf(id);
          if (index !== -1) {
            visiblePostIds.splice(index, 1);
          }
          this.unsubscribe();
          this.unsubscribe = this.props.subscribeToPostChanges({ postIds: visiblePostIds, me: this.props.me });
          return {
            visiblePostIds
          };
        });
      }
    };
  }

  @autobind
  likePost(postId, postLikeCount, me) {
    const nextPostLikeCount = postLikeCount + 1;
    this.props.likePost({
      variables: { postId },
      update: (store, { data: { likePost: { id, likeCount, iLike } } }) => {
        const { posts } = store.readQuery({
          query: POST_UPDATE_QUERY_TAG,
        });
        const changedPostIndex = posts.findIndex(post => post.id === id);
        posts[changedPostIndex].likeCount = likeCount;
        posts[changedPostIndex].iLike = iLike;
        store.writeQuery({
          query: POST_UPDATE_QUERY_TAG,
          data: { posts }
        });
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likePost: {
          id: postId,
          likeCount: nextPostLikeCount,
          iLike: true,
          __typename: 'Post',
        }
      }
    });
  }

  @autobind
  unlikePost(postId, postLikeCount, me) {
    const nextPostLikeCount = postLikeCount - 1;
    this.props.unlikePost({
      variables: { postId },
      update: (store, { data: { unlikePost: { id, likeCount, iLike } } }) => {
        const { posts } = store.readQuery({
          query: POST_UPDATE_QUERY_TAG,
        });
        const changedPostIndex = posts.findIndex(post => post.id === id);
        posts[changedPostIndex].likeCount = likeCount;
        posts[changedPostIndex].iLike = iLike;

        store.writeQuery({
          query: POST_UPDATE_QUERY_TAG,
          data: { posts }
        });
      },
      optimisticResponse: {
        __typename: 'Mutation',
        unlikePost: {
          id: postId,
          likeCount: nextPostLikeCount,
          iLike: false,
          __typename: 'Post',
        }
      }
    });
  }

  @autobind
  handleCreatePostTextChange({ target: { value } }) {
    this.setState({ createPostText: value });
  }

  @autobind
  handleCreatePost() {
    if(this.state.createPostText) {
      this.setState(() => ({
        createPostLoading: true
      }));
      debugger;
      this.props.createPost({
        variables: { text: this.state.createPostText, isPublic: this.state.createPostPublicity},
        update: (store, { data: { createPost: {optimisticResponse, ...newPost} } }) => {
          const { posts } = store.readQuery({
            query: POST_UPDATE_QUERY_TAG
          });
          posts.unshift(newPost);
          store.writeQuery({
            query: POST_UPDATE_QUERY_TAG,
            data: { posts }
          });
          !optimisticResponse && this.setState(() => ({
            createPostLoading: false,
            createPostText: '',
            createPostPublicity: false
          }));
        },
        optimisticResponse: {
          __typename: 'Mutation',
          createPost: {
            id: "newPost",
            likeCount: 0,
            iLike: false,
            text: this.state.createPostText,
            user: this.props.me,
            loading: true,
            optimisticResponse: true,
            __typename: 'Post',
          }
        }
      })
    }
  }

  render() {
    const { posts, me } = this.props;
    return (
      <div className={style.pageWrap}>
        <div className={style.feedWrap}>
          <InfiniteScroll
            loadMore={this.handleEndReached}
            threshold={10}
            hasMore
            loader={
              <div className={style.spinner} key="spinner">
                <Spinner size="large" />
              </div>
            }
          >
            {me && 
            <Create 
              user={me} 
              text={this.state.createPostText} 
              onChange={this.handleCreatePostTextChange} 
              onCreate={this.handleCreatePost} 
              hashtag={{ id: '123', name: 'NPMG' }} 
              loading={this.state.createPostLoading}
              onPostPublicityChange={this.handleCreatePostPublicityChange}
              isPublicityChecked={this.state.createPostPublicity}
            />}
            {posts && me && posts.map((post, i) => {
              const isPostLoading = i === 0 && this.state.createPostLoading;
              return (
              <VisibilitySensor
                scrollCheck
                onChange={this.handlePostVisibilityChange(post.id)}
                key={post.id}
              >
                <Post
                  {...post}
                  isLiked={post.iLike}
                  loading={isPostLoading}
                  onLikeClick={() => (this.likePost(post.id, post.likeCount, me))}
                  onUnlikeClick={() => (this.unlikePost(post.id, post.likeCount, me))}
                />
              </VisibilitySensor>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

Feed.defaultProps = defaultProps;

export default compose(
  meQuery,
  postQuery,
  likePost,
  unlikePost,
  createPost
)(Feed);

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const POSTS_PER_FETCH = 6;
export const INITIAL_SKIP = 0;

const POST_SUBSCRIPTIONS_TAG = gql`
  subscription onPostChanged($postIds: [String]){
    postChanged(postIds: $postIds){
      id
      likeCount
      user {
        id
      }
    }
  }
`;

const ME_QUERY_TAG = gql`
  query {
    me {
      id
      firstName
      lastName
      avatarURL
    }
  }
`;


export const POST_QUERY_TAG = gql`
  query getFeed($skip: Int, $limit: Int){
    posts(skip: $skip, limit: $limit) {
      id
      user {
        id
        firstName
        lastName
        avatarURL
      }
      text
      likeCount
      iLike
    }
  }
`;

/**
 * This is user only when a mutation UPDATE is made
 * in order to fetch the results and it will fetch all
 * the results
 */
export const POST_UPDATE_QUERY_TAG = gql`
query {
  posts(skip: ${INITIAL_SKIP}, limit: ${POSTS_PER_FETCH}) {
    id
    user {
      id
      firstName
      lastName
      avatarURL
    }
    text
    likeCount
    iLike
  }
}
`;

export const meQuery = graphql(ME_QUERY_TAG, {
  name: 'meQuery',
  props: ({ ownProps, meQuery: data }) => {
    return {
      ...ownProps,
      ...data
    };
  }
});

export const postQuery = graphql(POST_QUERY_TAG, {
  name: 'postQuery',
  props: ({ ownProps, postQuery: { fetchMore, subscribeToMore, ...data } }) => ({
    ...ownProps,
    updateFeed: () => {
      const skipOnFetchMore = 'posts' in data ? data.posts.length : POSTS_PER_FETCH;
      return fetchMore({
        variables: { skip: skipOnFetchMore, limit: POSTS_PER_FETCH },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          return Object.assign({}, previousResult, {
            posts: [...previousResult.posts, ...fetchMoreResult.posts],
          });
        }
      });
    },
    subscribeToPostChanges: params => subscribeToMore({
      document: POST_SUBSCRIPTIONS_TAG,
      variables: {
        postIds: params.postIds,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (params.me.id === subscriptionData.data.postChanged.user.id) return prev;
        console.log(prev, subscriptionData);
        const next = Object.assign({}, prev);
        next.posts = next.posts.map((post) => {
          const nextPost = Object.assign({}, post);
          if (nextPost.id === subscriptionData.data.postChanged.id) {
            nextPost.likeCount = subscriptionData.data.postChanged.likeCount;
          }
          return nextPost;
        });
        return next;
      }
    }),
    ...data
  }),
  options: { variables: { skip: INITIAL_SKIP, limit: POSTS_PER_FETCH } },
});


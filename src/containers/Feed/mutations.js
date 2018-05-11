import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const LIKE_POST_MUTAITON_TAG = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId) {
      id
      likeCount
      iLike
    } 
  }
`;

const UNLIKE_POST_MUTAITON_TAG = gql`
  mutation unlikePost($postId: String!) {
    unlikePost(postId: $postId) {
      id
      likeCount
      iLike
    } 
  }
`;

const CREATE_POST_MUTATION_TAG = gql`
  mutation createPost($text: String!, $isPublic: Boolean) {
    createPost(text: $text, isPublic: $isPublic) {
      id
      text
      likeCount
      iLike
      user {
        id
        firstName
        lastName
        avatarURL
      }
    } 
  }
`;

export const likePost = graphql(LIKE_POST_MUTAITON_TAG, { name: 'likePost' });
export const unlikePost = graphql(UNLIKE_POST_MUTAITON_TAG, { name: 'unlikePost' });
export const createPost = graphql(CREATE_POST_MUTATION_TAG, { name: 'createPost' });
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const ME_QUERY_TAG = gql`
  query {
    me {
      id
      firstName
      lastName
      avatarURL
      type
      friends {
        id
        firstName
        lastName
        avatarURL
      }
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

export default meQuery;
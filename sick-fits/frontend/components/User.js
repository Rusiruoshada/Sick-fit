import { gql, useQuery } from '@apollo/client';

export const CREATE_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO: add cart
      }
    }
  }
`;

export function useUser() {
  const { data } = useQuery(CREATE_USER_QUERY);
  return data?.authenticatedItem;
}

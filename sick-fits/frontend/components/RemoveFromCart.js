import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';

const REMOVE_CART_ITEM = gql`
  mutation REMOVE_CART_ITEM($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;
const RemoveButton = styled.button`
  font-size: 2rem;
  font-weight: 600;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;
export default function RemoveFromCart({ id }) {
  const [removeItem, { loading, error }] = useMutation(REMOVE_CART_ITEM, {
    variables: { id },
  });
  if (error) {
    return alert('Something went wrong, try again!');
  }
  return (
    <RemoveButton
      title="remove this item form cart"
      type="button"
      onClick={removeItem}
      disabled={loading}
    >
      &times;
    </RemoveButton>
  );
}

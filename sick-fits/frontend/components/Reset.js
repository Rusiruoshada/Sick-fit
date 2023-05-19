import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { input, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: input,
  });
  const successError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await reset();
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h3>Reset Your Password</h3>
      <Error error={successError || error} />
      <fieldset aria-busy={loading} disabled={loading}>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can now sign in</p>
        )}

        <label htmlFor="email">
          Email:{' '}
          <input
            name="email"
            type="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={input.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password:{' '}
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="password"
            value={input.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Reset Password</button>
      </fieldset>
    </Form>
  );
}

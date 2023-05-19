import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import Error from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { input, handleChange, resetForm } = useForm({
    email: '',
    name: '',
    password: '',
  });

  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: input,
    // sign in a user in below code
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await signup();
    resetForm();
  };

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h3>Create a new Account</h3>
      <Error error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        {data?.createUser && (
          <p>
            Signed up with {data.createUser.email}- Please go head and Sign In!
          </p>
        )}
        <label htmlFor="name">
          Name:{' '}
          <input
            name="name"
            type="name"
            placeholder="Enter your name"
            autoComplete="name"
            value={input.name}
            onChange={handleChange}
            required
          />
        </label>
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
        <button type="submit">Sign Up</button>
      </fieldset>
    </Form>
  );
}

import Form from './styles/Form';

export default function SignIn() {
  return (
    <Form method="POST">
      <fieldset>
        <label htmlFor="username">
          Username:{' '}
          <input
            name="username"
            type="email"
            placeholder="Username"
            autoComplete="email"
            // value
            // onChange
          />
        </label>
        <label htmlFor="password">
          Password:{' '}
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="password"
            // value
            // onChange
          />
        </label>
        <button type="submit">Sign In</button>
      </fieldset>
    </Form>
  );
}

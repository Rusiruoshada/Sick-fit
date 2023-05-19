import RequestRest from '../components/RequestRest';
import Reset from '../components/Reset';

export default function reset({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>Sorry you must supply a token</p>
        <RequestRest />
      </div>
    );
  }
  return (
    <div>
      <p>RESET YOUR PASSWORD {query.token}</p>
      <Reset token={query.token} />
    </div>
  );
}

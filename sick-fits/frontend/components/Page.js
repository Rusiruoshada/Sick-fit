import Header from './Header';

export default function page({ children }) {
  return (
    <div>
      <Header />
      <h1>Hello I am the page</h1>
      {children}
    </div>
  );
}

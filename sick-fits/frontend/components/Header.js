import Link from 'next/link';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">
          <h1>Sick Fits</h1>
        </Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}

export default Header;

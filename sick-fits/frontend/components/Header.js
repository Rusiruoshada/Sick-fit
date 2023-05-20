import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Cart from './Cart';

const Logo = styled.h1`
  background-color: red;
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  position: relative;
  transform: skew(-20deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
  a:hover {
    text-decoration: none;
  }
`;

const HeaderStyle = styled.header`
  .bar {
    border-bottom: 1px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Cart />
    </HeaderStyle>
  );
}

export default Header;

import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <img src="https://cdn-images-1.medium.com/max/1200/1*v5SYqjYEdQMPIwNduRrnCw.png" />
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </nav>
    </>
  );
};
export default Header;

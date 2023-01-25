import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar container mx-auto flex justify-between items-center h-20 border-b">
      <Link
        to="/"
        className="logo text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700"
      >
        Lush Beauty Oasis
      </Link>
      <ul className="links flex gap-10">
        <li>
          <Link to="/" className="link-item hover:text-teal-500 duration-300">
            Section 1
          </Link>
        </li>
        <li>
          <Link to="/" className="link-item hover:text-teal-500 duration-300">
            Section 2
          </Link>
        </li>
        <li>
          <Link to="/" className="link-item hover:text-teal-500 duration-300">
            Section 3
          </Link>
        </li>
        <li>
          <Link to="/" className="link-item hover:text-teal-500 duration-300">
            Section 4
          </Link>
        </li>
        <li>
          <Link to="/" className="link-item hover:text-teal-500 duration-300">
            Section 5
          </Link>
        </li>
      </ul>
      <Link
        to="/sign-in"
        className="sign-in-btn bg-teal-500 text-teal-50 py-3 px-8 rounded-full shadow-lg shadow-teal-100 hover:bg-teal-600 hover:shadow-teal-200 duration-300"
      >
        Sign in
      </Link>
    </nav>
  );
};

export default Navbar;

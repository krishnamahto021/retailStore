import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
        alt="logo"
      />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/list'>List</Link>
        <Link to='/contact'>Contact</Link>
        {/* <a href="/">Home</a>
        <a href="/list">List</a> */}
      </nav>
    </div>
  );
};

import { NavLink, Outlet } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
        alt="logo"
      />
      <nav>
        <NavLink to='/' style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            }>Home</NavLink>
        <NavLink to='/list' style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            } >List</NavLink>
        <NavLink to='/contact' style={({ isActive }) =>
              isActive
                ? {
                    border: "2px solid #fff",
                    backgroundColor: "#e1d1f976"
                  }
                : null
            } >Contact</NavLink>
      </nav>
    </div>
    <Outlet/>
    </>
  );
};

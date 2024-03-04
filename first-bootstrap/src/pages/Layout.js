import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link  " >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link  ">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link to="/themeswitcher" className="nav-link  ">Theme switcher</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link  ">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/survey" className="nav-link  ">Survey</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

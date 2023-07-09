import { Link, Outlet } from "react-router-dom";
import "../scss/navbar.scss";
import "../scss/footer.scss";
const Layout = () => {
  return (
    <>
      <div className="parentContainer">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <p className="navbar-brand">DAILY JOURNAL</p>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li id="home">
                <Link to="/">HOME</Link>
              </li>
              {/* <li id="about">
                <Link to="/about">ABOUT ME</Link>
              </li> */}
              <li id="compose">
                <Link to="/compose">COMPOSE</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="outlet">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;

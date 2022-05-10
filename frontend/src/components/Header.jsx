import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./header.css";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand mt-2 mb-2 ps-4 pe-4" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto me-auto my-2 my-lg-0 navbar-nav-scroll ">
              <li className="nav-item hoverCustom">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item hoverCustom">
                <Link className="nav-link " to="/welcome">
                  Link
                </Link>
              </li>

              <li className="nav-item dropdown hoverCustom">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex ps-4 pe-4">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

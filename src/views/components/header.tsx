import {NavLink} from 'react-router-dom';

function Header()
{
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink to={"/home"} className="navbar-brand">Final Exam</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={"/home"} className="nav-link" id="Home" aria-current="page" ><i className="fa-solid fa-house-chimney fa-lg"></i> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} className="nav-link" id="About"  aria-current="page" ><i className="fa-solid fa-circle-info fa-lg"></i> About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className="nav-link" id="Contact"  aria-current="page" ><i className="fa-solid fa-envelope fa-lg"></i> Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}

export default Header;
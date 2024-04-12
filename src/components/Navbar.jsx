import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/TRAVHOOD/">TRAVHOOD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/TRAVHOOD/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TRAVHOOD/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TRAVHOOD/touristguides">Tourist Guides</Link>
        </li>
      </ul>
      <form className="d-flex Search-box " role="search">
        <input className="form-control me-2 search-type" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn  w-25" type="submit">Search</button>
      </form>
      {/* <div className="btn">Log In</div> */}
      {/* <div className="btn mx-2">Sign Up</div> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

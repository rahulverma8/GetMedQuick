import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
// import SearchBar from "./SearchBar";

const Navbar = () => {

  const navRef = useRef();
  const [nav, setNav] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const reduxState = useSelector((state) => state);
  const auth = reduxState.hospitalAuth.value;

  console.log("auth = ",auth);

  const changeNavBg = () => {
    if (window.scrollY >= 90) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  }
  window.addEventListener("scroll", changeNavBg);

  return (
    <>
      <header className={nav ? "nav-act" : "nav"}>
        <h3>HCMS</h3>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#About">About</a>
          <a href="/#Service">Service</a>
          <a href="/#Contact">Contact us</a>
          {
            (auth) ? <Link to='/hospital' >
              <button className="signup-btn">Hospital</button>
              <button
                className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </Link> : <>
              <Link to='/login' >
                <button className="signup-btn">Login</button>
                <button
                  className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes />
                </button>
              </Link>
              <Link to='/signup' >
                <button className="signup-btn">Signup</button>
                <button
                  className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes />
                </button>
                {/* <button  className="signup-btn">Logout</button>  */} 
                </Link></> 
          }
        </nav>
        <button
          className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      {/* <SearchBar/> */}
    </>

  );
};

export default Navbar;

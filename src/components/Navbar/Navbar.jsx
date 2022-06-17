
import "./navbar.css";
import {

  FaEnvelopeSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import HamburgerMenu from "react-hamburger-menu";
import { NavLink } from "react-router-dom";




const Navbar = () => {

  window.onload = function () {


    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');
    });

  }


  // const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>R</span>ohit
            <span>J</span>indamwar
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/portfolio/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/resume">resume</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/contact">contact</NavLink>
            </li>
          </ul>







        </div>

        <nav class="mobile-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/resume">resume</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="mailto:rohitjindamwar123@gmail.com"
                target="_rohit">
                <FaEnvelopeSquare className="email" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_rohitnj2k1/"
                target="_rohit">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/RJindamwar"
                target="_rohit">
                <FaTwitterSquare className="twitter" />
              </a>
            </li>
          </ul>






          {/* hamburget menu start 
          <div className="hamburger-menu">
            <a href="/#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            
            </a>
          </div> */}


          <button className="hamburger ">
            <div className="bar"></div>
          </button>



        </div>
      </nav>


      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
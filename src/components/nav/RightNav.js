import React, {useState} from 'react';
import { Link } from "react-scroll";

function RightNav() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (

                  <div id="home">
                  <div className="hamburger-flex">
                  <h1>REACTWEB</h1>
                  <button onClick={toggleTrueFalse} className="menu-hamburger">{isToggled ? "close" : "menu"}</button>
                  </div>
                  
                  <div  className={isToggled ? "hamburger-nav-styles" : "hide-hamburger"}>
                   <ul onClick={toggleTrueFalse}>
           <li>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true}>
          About
        </Link>
      </li>
      <li>
        <Link to="services" spy={true} smooth={true}>
          Services
        </Link>
      </li>
      <li>
        <Link to="works" spy={true} smooth={true}>
         Works
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true}>
          Contact
        </Link>
      </li>
                 </ul>
              </div>
              <div className={isToggled ? "hidden" : "title-nav"}>
              <h3 data-text="Welcome"><span>Welcome to our website</span></h3>
              <p>we design and Build user interfaces</p>
              <button>Read more</button>
              </div>
              </div>
          
    )
}

export default RightNav

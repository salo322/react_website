import React, {useState} from 'react';
import { Link } from "react-scroll";

function RightNav() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (

                  <div id="home">
                  <div className="hamburger-flex">
                  <h1>REACTWEB</h1>
                  <button onClick={toggleTrueFalse} className="menu-hamburger">{isToggled ? <img src="https://img.icons8.com/ios-glyphs/35/ffffff/xbox-x.png"/> : <img src="https://img.icons8.com/android/35/ffffff/menu.png"/>}</button>
                  </div>
                  
                  <div onClick={toggleTrueFalse}  className={isToggled ? "hamburger-nav-styles" : "hide-hamburger"}>
                   <ul>
           <li>
        <Link activeClass="active" to="home" spy={true} smooth={true}>
        <a onClick={toggleTrueFalse}>Home</a>
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true}>
          <a onClick={toggleTrueFalse}>About</a>
        </Link>
      </li>
      <li>
        <Link to="services" spy={true} smooth={true}>
        <a onClick={toggleTrueFalse}>Services</a>
        </Link>
      </li>
      <li>
        <Link to="works" spy={true} smooth={true}>
        <a onClick={toggleTrueFalse}>Works</a>
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true}>
        <a onClick={toggleTrueFalse}>contact</a>
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

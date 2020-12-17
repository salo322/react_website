import React, {useEffect, useRef, useState}  from "react";
import { throttle } from "lodash";
import RightNav from './RightNav';
import { Link } from "react-scroll";

 
 const Navbar = () => {
      const [pageUp, setPageUp] = useState(false);
      const lastScroll = useRef(0);
      const checkScrollDown = () => {
      const currentScroll = window.pageYOffset;
      setPageUp(lastScroll.current = currentScroll);
      lastScroll.current = currentScroll;
    };
      const throttledFunc = throttle(checkScrollDown, 200, { leading: true });

  useEffect(() => {
      window.addEventListener("scroll", throttledFunc, false);
       return () => {
      window.removeEventListener("scroll", throttledFunc);
    };
  }, []);

        return (

           <div id="home"> 
            <div className="navbar-container">
             <nav>
            <div className="header-nav-styles">
                <div className={pageUp ? "navbar-fixed" : "navbar-fixed-up"}>
                <h1 class="neon">ReactWeb</h1>
           <ul>
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
              
            </div>

            <RightNav />
        </nav>
       
         </div>

     
      </div>
         
        
        );
 } 
 


export default Navbar;
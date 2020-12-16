import React, {useState} from 'react';
import { ScrollTo } from "react-scroll-to";
import useWindowSize from './use-window-size';

function RightNav() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    const size = useWindowSize();
    return (
        <ScrollTo>

            {({ scroll }) => (
                  <div>
                  <div className="hamburger-flex">
                  <h1>REACTWEB</h1>
                  <button onClick={toggleTrueFalse} className="menu-hamburger">{isToggled ? "close" : "menu"}</button>
                  </div>
                  
                  <div className={isToggled ? "hamburger-nav-styles" : "hide-hamburger"}>
                   <ul onClick={toggleTrueFalse}>
                   <li><a onClick={() => scroll({ x: 20, y: 0})}>HOME</a></li>
                     <li><a onClick={() => scroll({ x: 20, y: size.height })} >SERVICES</a></li>
                     <li><a onClick={() => scroll({ x: 20, y: size.height * 2.6 })} >WORKS</a></li>
                     <li><a onClick={() => scroll({ x: 20, y: size.height * 4.05})}>CONTACT</a></li>
                 </ul>
              </div>
              <div className={isToggled ? "hidden" : "title-nav"}>
              <h3 data-text="Welcome"><span>Welcome to our website</span></h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typeseatting industry. Lorem Ipsum has been the industry's</p>
              <button>Read more</button>
              </div>
              </div>
            )}
       </ScrollTo>
    )
}

export default RightNav

import React, {useState, useEffect}  from "react";
import { ScrollTo } from "react-scroll-to";
import RightNav from './RightNav';
import useWindowSize from './use-window-size';
 
 const Navbar = () => {
    const size = useWindowSize();
    
        return (
          <ScrollTo>

            {({ scroll }) => (
           <div> 
            <div className="navbar-container">
             <nav>
            <div className="header-nav-styles">
                <div className="navbar-fixed">
                <h1 class="neon">ReactWeb</h1>
           <ul>
           {/* {size.width}px / {size.height}px */}
               <li><a onClick={() => scroll({ x: 20, y: 0})}>HOME</a></li>
               <li><a onClick={() => scroll({ x: 20, y: size.height })} >SERVICES</a></li>
               <li><a onClick={() => scroll({ x: 20, y: size.height * 2.1 })} >WORKS</a></li>
               <li><a onClick={() => scroll({ x: 20, y: size.height * 3.3})}>CONTACT</a></li>
           </ul>
                </div>
              
            </div>

            <RightNav />
        </nav>
       
         </div>

     
      </div>
         
         
            )}

          </ScrollTo>
        );
 } 
 


export default Navbar;
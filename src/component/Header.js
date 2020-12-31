import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header  extends React.Component{
    render(){

        return(
             <div><header class="header-area header-sticky">
             <div class="container">
                 <div class="row">
                     <div class="col-12">
                         <nav class="main-nav">
                             
                             <Link to="/" class="scroll-to-section logo">BUNDES<em>LIGA</em></Link>
                             <img className="logoheader"src="./../images/bundesliga.png" ></img>
                             <ul class="nav">
                                 <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                                 <li class="scroll-to-section"><a href="#features">Club</a></li>
                                 <li class="scroll-to-section"><a href="#score">Top Score</a></li>
                                 <li class="scroll-to-section"><a href="#schedule">Fixture</a></li>
                                 <li class="scroll-to-section"><a href="#trainers">Best Goal</a></li>
                                 <li class="scroll-to-section"><a href="#call-to-action">Rank</a></li> 
                                 
                             </ul>      
                             <a class='menu-trigger'>
                                 <span>Menu</span>
                             </a>
                             
                         </nav>
                     </div>
                 </div>
             </div>
         </header></div>
        );
        }
}
export default Header;

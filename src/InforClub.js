import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from '././component/Header';
import AvtClub from '././component/AvtClub';
import InforPlayer from '././component/InforPlayer';
import Footer from '././component/Footer';
import  InforPL from '././InforPL';
import db from '././DB/firebaseConnect';
import  firebase from 'firebase';
import {Home} from './Home' ;



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,withRouter
  } from "react-router-dom";
  class InforClub extends React.Component{
    constructor(props){
        super(props)
        this.state={
            club:[],
            background:''
        }
    }
    componentDidMount(){
        console.log(db)

        firebase.database().ref(`/Club/${this.props.match.params.id}`).on("value", snapshot => {
            let Club = [];
            
                Club.push(snapshot.val());
              
              

            this.setState({ club: Club,background:snapshot.val().background });
          });
    
    }
    render(){
        console.log(db)
        console.log("state",this.state.club)
        console.log("backgr",this.state.background)

       var id= this.props.match.params.id;
       console.log("concac",id)
          var elem= this.state.club.map(data=>{
            

          })
  return (
    
    <div className="InforClub" id="ifclub">
      
    
      <div><header class="header-area header-sticky">
             <div class="container">
                 <div class="row">
                     <div class="col-12">
                         <nav class="main-nav">
                             
                             <Link to="/quan-ly-bong-da/" class="logo">BUNDES<em>LIGA</em></Link>
                             <img className="logoheader"src="./../images/bundesliga.png" ></img>
                             
                             <a class='menu-trigger'>
                                 <span>Menu</span>
                             </a>
                             
                         </nav>
                     </div>
                 </div>
             </div>
         </header></div>
       <Router>
    <AvtClub background={this.state.background}/>
    <div className="navbar navbar-inverse" >
           <ul className="nav navbar-nav ">
 


  <li className="con"><Link to ={`/quan-ly-bong-da/InforPL/${this.props.match.params.id}`} href="#about">Player</Link>
  
  
  </li>
</ul>

        </div>   


    <Route path="/quan-ly-bong-da/InforPL/:id" exact component={InforPL}></Route>
    <Route path="/quan-ly-bong-da/inforclub" exact component={InforPlayer}></Route>
   


    <div class="row">
     
                <div class="col-lg-2">
                    
                </div>
                <div class="col-lg-8">
                   
                    <div class="embed-responsive embed-responsive-16by9" >
                       <video loop muted autoPlay class="embed-responsive-item  top5" src="./../images/bundes.mp4" allowfullscreen></video>
                  </div>
                    
                        
                    </div>
                
                <div class="col-lg-2">
                    
                </div>
            </div>
    
    
    <Footer/>
    </Router>  
    </div>

  );
    
  }
}
 
export default withRouter(InforClub);

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import db from './../DB/firebaseConnect';
  import  firebase from 'firebase';


class Club  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            club:[]
        }
    }
    componentDidMount(){
        console.log(db)

        firebase.database().ref("Club/").on("value", snapshot => {
            let Club = [];
               snapshot.forEach(snap=>{
                Club.push(snap.val());
               })
              

            this.setState({ club: Club });
          });
    
    }
    Changeid=(id)=>{
        return id+2;
    }
    render(){
        console.log(db)
        console.log("state",this.state.club)
       
          var elem= this.state.club.map((data,index)=>{
              console.log(data.logo)
              return(
                <div class="col-lg-6">
                <ul class="features-items">
                <li class="feature-item" >
                <div class="left-icon">
                    <img  src={data.logo} alt="first one "></img>
                </div>
                <div class="right-content">
                    <h4>{data.name}</h4>
                    <p>{data.detail} <Link to={'/quan-ly-bong-da/inforclub/'+this.Changeid(index)} class="text-button">More</Link></p>
                   
                </div>
            </li>
            </ul>
                    </div>
              )
          })
        return(
            <section class="section" id="features">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="section-heading">
                            <h2> <em>CLUB</em></h2>
                        
                        </div>
                    </div>
                   
                           {elem}
                           
                       
                </div>
            </div>
        </section>
        
        );
        }
}
export default Club;

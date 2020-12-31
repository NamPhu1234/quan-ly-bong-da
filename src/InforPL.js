import InforPlayer from './component/InforPlayer';
import React from 'react';
import Footer from './component/Footer';
import db from '././DB/firebaseConnect';
import  firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
  class InforPL extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:[]
        }
    }
    componentDidMount(){
        console.log(db)

        firebase.database().ref(`/Club/${this.props.match.params.id}/player/`).on("value", snapshot => {
            let Player = [];
               snapshot.forEach(snap=>{
                Player.push(snap.val());
               })
              

            this.setState({ player: Player });
          });
    
    }
    render(){
        console.log(db)
        console.log("ssssssssss",this.state.player)
       
          var elem= this.state.player.map(data=>{
            return(
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3  pt-3 pr-2 pl-2 pb-3">
<div className="frame-inf">
<div className="img-avt"><img src={data.avt}></img></div>
<div className="name-player"><h4>{data.name}</h4></div>
<div className="country-player"><h4>Country:{data.country} <img className="avt-country" src=""></img></h4></div>
<div className="weight-player"><h4>Weight:{data.weight}</h4></div>
<div className="height-player"><h4>Height:{data.height}</h4></div>
<div className="birth-player"><h4>Birth:{data.birth}</h4></div>
</div>
</div>
            )

          })
    return (
      <div className="container-fluid cau" > 
        
      
       
      
        <div className="row">   

       {elem}

      
   </div>   
      
     
      </div>
    );
  }
}
  export default withRouter(InforPL);
  
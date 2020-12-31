import React from 'react';
class AvtClub  extends React.Component{
    render(){

        return(
            <div class="main-banner" id="top">
           <div className="container-fluid avt-club">
            <div className="row">
                <img src={this.props.background}></img>
             
            </div>
           </div>
        </div>   
        );
        }
}
export default AvtClub;

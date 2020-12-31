import React from 'react';
class Topscore  extends React.Component{
    render(){

        return(
            <section class="section topscore" id="score">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2><em>Bundesliga Top Score 2020-2021</em></h2>
                    </div>
                </div>
            </div>     
        </div>
		
        <div className="card-deck">
        <div className="card score1">
          <img className="card-img-top" src="./../images/lewan1.png" ></img>
          
          <div className="card-body">
            <h5 className="card-title">Robert Lewandowski<span class="gol"> 18 Goals</span> </h5>
            
            <h6 className="card-title"> Bayern Munich<img class="bayern"  src="./../images/bayern.png" alt="first one "></img></h6>
            
           
          </div>
          
        </div>
        <div className="card">
          <img className="card-img-top-1" src="./../images/haaland.png" ></img>
          
          <div className="card-body">
            <h5 className="card-title">Erling Haaland <span class="gol"> 10 Goals</span></h5>
            
            <h6 className="card-title"> Borussia Dortmund<img class="bayern"  src="./../images/dortmund.png" alt="first one "></img></h6>
            
           
          </div>
        </div>
        <div className="card">
          <img className="card-img-top-2" src="./../images/Wout.png" ></img>
          
          <div className="card-body">
            <h5 className="card-title">Wout Weghorst <span class="gol"> 9 Goals</span></h5>
            
            <h6 className="card-title"> VfL Wolfsburg<img class="bayern"  src="./../images/Wolfsburg.png" alt="first one "></img></h6>
            
           
          </div>
          
        </div>
      </div>
                
    </section>
        
        );
        }
}
export default Topscore;

import React from 'react';
class Ltd  extends React.Component{
    render(){

        return(
            <section class="section" id="schedule">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="section-heading dark-bg">
                            <h2> <em>Fixture</em></h2>
                            <img src="assets/images/line-dec.png" alt=""></img>
                            <p>The schedule updates itself automatically in your calendar.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="filters">
                            <ul class="schedule-filter">
                                <li class="active" data-tsfilter="monday">Monday</li>
                                <li data-tsfilter="tuesday">Tuesday</li>
                                <li data-tsfilter="wednesday">Wednesday</li>
                                <li data-tsfilter="thursday">Thursday</li>
                                <li data-tsfilter="friday">Friday</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-10 offset-lg-1">
                        <div class="schedule-table filtering">
                            <table >
                                <tbody>
                                    <tr>
                                        
                                        <img src="./../images/Stuttgart.png" ></img>
                                        <td class="monday ts-item show" data-tsmeta="monday">5:00PM - 7:00PM</td>
                                        <td class="tuesday ts-item" data-tsmeta="tuesday"></td>
                                        <img  src="./../images/bayern.png" alt="first one "></img>
                                    </tr>
                                    <tr>
                                    <img  src="./../images/dortmund.png" alt="second one"></img>
                                        <td class="friday ts-item" data-tsmeta="friday"></td>
                                        <td class="thursday ts-item" data-tsmeta="thursday" data-tsmeta="thursday">4:30PM - 6:30PM</td>

                                        <img src="./../images/rb-leipzig-logo.png" alt="third gym training"></img>
                                    </tr>
                                    <tr>
                                    <img src="./../images/Wolfsburg.png" alt="training fifth"></img>
                                        <td class="wednesday ts-item" data-tsmeta="wednesday">7:30PM - 9:30 PM</td>
                                        <td class="monday ts-item show" data-tsmeta="monday"></td>
                                        <img src="./../images/lever.png" alt="gym training"></img>
                                    </tr>
                                <tr>
                                <img src="./../images/bremen.png" alt="training fifth"></img>
                                        <td class="friday ts-item" data-tsmeta="friday"></td>
                                        <td class="tuesday ts-item" data-tsmeta="tuesday">6:30PM - 8:30PM</td>
                
                                        <img src="./../images/Hoffenheim.png" ></img>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
        }
}
export default Ltd;

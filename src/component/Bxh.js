import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Bxh  extends React.Component{
    render(){

        return(
            <section class="section" id="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="cta-content">
                        <h2> <em></em><em>Rank</em></h2>
                    </div>
                </div>
            </div>
            <div class="schedule-table">
                            <table class="filtering">
                                <thead>
                                    
                                    <tr> 
                                        <td>No</td>
                                        <td>Club</td>
                                        <td>Played</td>
                                        <td>Points</td>
                                        <td>W</td>
                                        <td>D</td>
                                        <td>L</td>

                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>1</td>
                                        <td><img src="./../images/bayern.png" ></img><Link to ="/quan-ly-bong-da/inforclub/9">Bayern Munich</Link></td>
                                        <td>13</td>
                                        <td>30</td>
                                        <td>9</td>
                                        <td>3</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><img src="./../images/lever.png" ></img><Link to ="/quan-ly-bong-da/inforclub/7">Leverkusen</Link></td>
                                        <td>13</td>
                                        <td>28</td>
                                        <td>8</td>
                                        <td>4</td>
                                        <td>1</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>3</td>
                                        <td><img src="./../images/rb-leipzig-logo.png" ></img><Link to ="/quan-ly-bong-da/inforclub/5">RB Leipzig</Link></td>
                                        <td>13</td>
                                        <td>28</td>
                                        <td>8</td>
                                        <td>4</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td><img src="./../images/Wolfsburg.png" ></img><Link to ="/quan-ly-bong-da/inforclub/6">VfL Wolfsburg</Link></td>
                                        <td>13</td>
                                        <td>24</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>1</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>5</td>
                                        <td><img src="./../images/dortmund.png" ></img><Link to ="/quan-ly-bong-da/inforclub/2">Dortmund</Link></td>
                                        <td>13</td>
                                        <td>22</td>
                                        <td>7</td>
                                        <td>1</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td><img src="./../images/bremen.png" ></img><Link to ="/quan-ly-bong-da/inforclub/8">Wender Bremen</Link></td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>3</td>
                                        <td>5</td>
                                        <td>5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>7</td>
                                        <td><img src="./../images/Hoffenheim.png" ></img><Link to ="/quan-ly-bong-da/inforclub/3">Hoffenheim</Link></td>
                                        <td>13</td>
                                        <td>18</td>
                                        <td>4</td>
                                        <td>6</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td><img src="./../images/Stuttgart.png" ></img><Link to ="/quan-ly-bong-da/inforclub/4">VfB Stuttgart</Link></td>
                                        <td>13</td>
                                        <td>15</td>
                                        <td>4</td>
                                        <td>3</td>
                                        <td>6</td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>
                        </div>
        </div>
    </section>
        
        );
        }
}
export default Bxh;

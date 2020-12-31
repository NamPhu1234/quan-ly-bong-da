import React from 'react';
class Slide  extends React.Component{
    render(){

        return(
            <div class="main-banner" id="top">
            <video autoPlay muted loop id="bg-video">
                <source src="./../images/video.mp4" type="video/mp4" />
            </video>
    
            <div class="video-overlay header-text">
                <div class="caption">
                    
                    <h2>Football is my  <em>life</em></h2>
                    <div class="main-button scroll-to-section">
                        <a href="#features">Go to</a>
                    </div>
                </div>
            </div>
        </div>   
        );
        }
}
export default Slide;

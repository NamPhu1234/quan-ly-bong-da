import logo from './logo.svg';
import './App.css';
import Header from '././component/Header';
import Slide from '././component/Slide';
import Club from '././component/Club';
import Bxh from '././component/Bxh';
import Topscore from '././component/Topscore';
import Ltd from '././component/Ltd';
import Footer from '././component/Footer';
import * as Config from '././constants/Config'

function Home() {
  console.log(Config.CHANGE_PAGE)
  return (
    <div className="App">
      
    
    <Header/>
    <Slide/>
    <Club/>
    <Bxh/>
    <Topscore/>
    <Ltd/>
    

    
    
    
    
    
    

    
    <section class="section" id="trainers">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2> <em>TOP 5 GOALS OF THE WEEK !!!</em></h2>
                        <img src="assets/images/line-dec.png" alt=""></img>
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                    
                </div>
                <div class="col-lg-8">
                   
                    <div class="embed-responsive embed-responsive-16by9" >
                       <video loop controls class="embed-responsive-item  top5" src="./../images/top5.mp4" allowfullscreen></video>
                  </div>
                    
                        
                    </div>
                
                <div class="col-lg-2">
                    
                </div>
            </div>
        </div>
    </section>
    
    
    
    <Footer/>
    </div>
  );
}

export default Home;

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import InforClub from './InforClub';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InforPL from './InforPL';

function App() {
  return(
  <Router>
    <Route path="/quan-ly-bong-da/" exact component={Home}></Route>
    <Route path="/quan-ly-bong-da/inforclub/:id" exact component={InforClub}></Route>
  </Router>
 );
}

export default App;

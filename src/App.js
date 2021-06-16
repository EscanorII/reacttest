import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/navbar/Navigation";
import {Switch, Route} from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Favorite from "./components/Pages/Favorite/Favorite";
import Info from "./components/Pages/Info/Info";
import Add from "./components/Pages/Add/Add";


function App() {
  return (
      <>
        <Navigation/>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/favorite' component = {Favorite}/>
          <Route path = '/add' component = {Add}/>
          <Route path = '/info' component = {Info}/>
        </Switch>
      </>
  );

}

export default App;

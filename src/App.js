import './App.css';
import {HashRouter as Router,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Router>
      <Route exact path="/">
      <Home/>
      </Route>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

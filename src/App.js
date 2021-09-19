import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png'
import Checker from './components/checker';


function App() {
  const history = useHistory()
  
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <center>
              <img src={logo} height="170" margin-top="50px"/>
            </center>
            <div className="quote">
              We make it easy for your organization to enforce its vaccine regulations
            </div>
            <center>
              <button className="try" type="button" onClick={() => history.push('./checker')}>Try the App!</button>
            </center>
          </Route>
          <Route exact path="/checker">
            <Checker />
          </Route>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;

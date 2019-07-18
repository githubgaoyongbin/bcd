import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import WrappedNormalLoginForm  from './components/login/Login'
import Home from './components/home/Home'
import NotFound from './components/404/404'
function App() {
  return (
    <Router>
        <Switch>
          {/* 登陆 */}
          <Route path="/login" component={WrappedNormalLoginForm }/>
          <Route path="/home" component={Home}/>
          {/* <Route path="/list" component={List}/> */}
          {/* <Route path="/list/:house_type/:name" component={List}/> */}
          <Redirect exact from="/" to="/login"/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
  );
}

export default App;

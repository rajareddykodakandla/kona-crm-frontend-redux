import React from 'react';
import { useSelector } from 'react-redux'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import Createlead from '../containers/dashboardContainer/createlead';
import Dashboard from '../containers/dashboardContainer/Dashboard';
import Editlead from '../containers/dashboardContainer/editlead';
import Lead from '../containers/dashboardContainer/lead';
import Leads from '../containers/dashboardContainer/leads';
import SideNav from '../containers/dashboardContainer/Sidenav';
import TopNav from '../containers/dashboardContainer/Topnav';
import Login from '../containers/userContainers/Login';
import Register from '../containers/userContainers/Register';
import "./app.css"
import Home from './Home';

function App() {
  const isUserLoggedIn = useSelector(appState => appState.isUserLoggedIn);
  console.log(isUserLoggedIn);
  return (
    <React.Fragment>
      <BrowserRouter>
      {isUserLoggedIn ? <div className="row">
          <div className="col-2 px-0">
            <SideNav />
          </div>
          <div className="col-10 px-0">
              <TopNav />
          </div>
        </div> : null}
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/leads" component={Leads}></Route>
        <Route path="/lead/:id" component={Lead}></Route>
        <Route path="/createlead" component={Createlead}></Route>
        <Route path="/editlead/:id" component={Editlead}></Route>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
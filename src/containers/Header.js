import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../components/Home'
import Createlead from './dashboardContainer/createlead'
import Dashboard from './dashboardContainer/Dashboard'
import ChangePassword from './userContainers/ChangePassword'
import Login from './userContainers/Login'
import Register from './userContainers/Register'
function Header() {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={Home}></Route>
                <Route path="/register" exact component={Register}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/dashboard" exact component={Dashboard}></Route>
                <Route path="/changepassword" exact component={ChangePassword}></Route>
                
            </BrowserRouter>
        </div>
    )
}

export default Header

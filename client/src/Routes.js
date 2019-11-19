import React from 'react'
import {Route ,Switch} from 'react-router-dom'
import RegisterContainer from './containers/Register'
import HomeContainer from './containers/Home'
import loginContainer from './containers/Login'
import NotFoundPage from './containers/NotFoundPage'
import forgotPasswordContainer from './containers/ForgotPassword'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route
                    path="/register"
                    component = {RegisterContainer}
                />
                <Route
                    component = {HomeContainer}
                    path="/"
                    exact
                />
                <Route
                    component = {loginContainer}
                    path="/login"
                />
                <Route
                    component = {forgotPasswordContainer}
                    path="/forgotPassword"
                />
                <Route  
                path="*"
                component = {NotFoundPage}
                />
            </Switch> 
        </div>      
    )
}
export default Routes
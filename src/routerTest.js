import React,{
    useContext
} from "react";

import {
    // as means  Router  =  BrowserRouter
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { AuthContext } from "auth/authContext";

import { LandingPage } from "publicRoute/landingPage"
import { Profile } from "privateRoute/profile"
import { StaffDetail } from "privateRoute/staffDetail"


// ROUTE would render when centain condition met
// ...rest => props => match location ... 
const PrivateRoute = ({ component: Component, ...rest }) => {

    const {currentUser} = useContext(AuthContext);
  
    return (
      <Route
        {...rest}
        
        render={routeProps =>
          !!currentUser ? (
            <Component {...routeProps} />
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    );
};
  
  
const RedirectFromLadningToLogin = ({component: Component, ...rest}) => {

    const {currentUser} = useContext(AuthContext);
  
    return (
      <Route
        {...rest}
        
        render={routeProps =>
          !!currentUser ? (
            <Component {...routeProps} />
          ) : (
            <Redirect to={"/login"} />
          )
        }
      />
    );

}

  


export default function RouterTest() {

  return (
    <Router>

        <Switch>
            <PrivateRoute  path="/profile"  component={Profile} />
            <PrivateRoute path="/staffdetail"  component={StaffDetail} />
            <RedirectFromLadningToLogin  path="/" component={LandingPage} />
        </Switch>
      
    </Router>
  );
}


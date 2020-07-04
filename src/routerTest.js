import React,{
    useContext
} from "react";

import {
    // as means  Router  =  BrowserRouter
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import { 
  AuthContext,
  AuthProvider 
} from "./auth/authContext";


import {Login} from './publicRoute/login'
import { LandingPage } from "./publicRoute/landingPage"
import { Profile } from "./privateRoute/profile"
import { StaffDetail } from "./privateRoute/staffDetail"


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
  
  
// When I set up a route for Redirect, it won't render  
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

const PrivateHeader = () => {
  const {currentUser} = useContext(AuthContext);

  return currentUser && <> 
                                  <div style={{display:'flex', margin : 20}}>  

                                  <Link to="/profile" style={{color : 'orangered ', margin : 20 }}>Profile</Link>

                                  <Link to="/staffdetail" style={{color : 'orangered', margin : 20}}>StaffDetail</Link>

                                  <Link to="/" style={{color : 'orangered', margin : 20}}>Landing Page</Link>
                                  </div> 
                                 </>


}  


export default function RouterTest() {


  return (
    <AuthProvider>
      <Router>
          <PrivateHeader />
          <Switch>
              <PrivateRoute exact path="/profile"  component={Profile} />
              <PrivateRoute exact path="/staffdetail"  component={StaffDetail} />
              <PrivateRoute exact  path="/" component={LandingPage} />
              <Route path="/login" component={Login} />
          </Switch>
      </Router>
  </AuthProvider> 
  );
}


import React, {useState} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Home from "./Clients/Home";

//import Home from './Home';
import HomeLogin  from './Login/LoginHome';
import Loading from './user_profile/Loading';
import LoginForm from "./Login/LoginForm"
import SignIn from "./Login/signinForm"
import {auth} from "./firebase/firebase.config"
import {onAuthStateChanged} from "firebase/auth"
import { result } from 'lodash';

const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName:'NoMatch' */ './user_profile/NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
const [isUserSignedIn, SetIsUserSignedIn] = useState(true);

  onAuthStateChanged(auth,  (user)=>{
    if (user){
      SetIsUserSignedIn(true)
    } else {
      SetIsUserSignedIn(false)
    }
    
  })

  try {
    console.log(isUserSignedIn)
    if (isUserSignedIn==true){
      return (
        <Router>
          <div>
          <Switch>
            <Route component={Home} />
          </Switch>
          </div>
         </Router>
        )
     }else{
          return (
            <Router>
                <div>
                <Switch>
                  <Route exact path="/" component={HomeLogin} />
                  <Route exact path="/login" component={LoginForm} />
                  <Route exact path="/signin" component={SignIn} />
                  <Route component={AsyncNoMatch} />
                </Switch>
                </div>  
              </Router>
        )
      }
  } catch (error) {
    if (error){
      return (
        <Router>
        <div>
        <Switch>
        <Route exact path="/" component={HomeLogin} />
          <Route component={AsyncNoMatch} />
        </Switch>
        </div>
    </Router>
      
      )
     

    }
  }
   

};

export default App;

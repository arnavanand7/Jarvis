import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import SignInHosp from './component/hospital/SignInDoc/signIn';
import SignUpDoc from './component/hospital/SignUpDoc/SignUpDoc';
import SignIn from './component/user/signInUser/signIn';
import SignUpUser from './component/user/signUpUser/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/user" component={SignUpUser} />
          <Route exact path="/hosp" component={SignInHosp} />
          <Route exact path="/hospUp" component={SignUpDoc} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

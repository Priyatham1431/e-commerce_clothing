import React, {useState, useEffect} from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Hats from "./pages/Hats/Hats";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./components/SignIn/SignIn";
import {auth} from './Firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

useEffect(() => {
  var unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
    console.log(user);
    return () =>{
      unsubscribeFromAuth();
    }
  });
},[currentUser])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;

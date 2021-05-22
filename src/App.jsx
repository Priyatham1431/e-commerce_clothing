import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Hats from "./pages/Hats/Hats";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/header/Header";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <div>
      <Header />
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

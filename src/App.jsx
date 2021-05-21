import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Hats from './pages/Hats/Hats'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

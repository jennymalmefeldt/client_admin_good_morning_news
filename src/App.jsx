import React from "react";
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Switch } from "react-router-dom";
import Authenticate from "./components/Authenticate";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Authenticate} />
        <ProtectedRoute path="/">
          <Home />
        </ProtectedRoute>
      </Switch>
    </>
  );
};

export default App;
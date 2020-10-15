import React from "react";
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Switch } from "react-router-dom";
import Authenticate from "./components/Authenticate";
import Home from "./components/Home";
import ArticleForm from "./components/ArticleForm";
import Test from "./components/Test";



const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Authenticate} />
        <ProtectedRoute path="/">
          <Home />
        </ProtectedRoute>
        {/* <Route exact path="/article_form" component={ArticleForm} />
        <Route exact path="/test" component={Test} ></Route> */}


        <ProtectedRoute path="/article_form">
          <ArticleForm />
        </ProtectedRoute>

      </Switch>
    </>
  );
};

export default App;
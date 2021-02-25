import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/Header/Header";
import "./index.css";
import Preloader from "./components/Preloader/Preloader";

const Home = lazy(() => import("./pages/Home/index"));
const Editor = lazy(() => import("./pages/Editor/index"));
const Sketch = lazy(() => import("./pages/Sketch/Sketch"));
const NotFound = lazy(() => import("./pages/404/notFound"));

function App({ location }) {
  
  return (
    <Suspense fallback={<Preloader />}>
      {location.pathname !== "/404" && <Header />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editor" exact component={Editor} />
        <Route path="/sketch" exact component={Sketch} />
        <Route path="/404" exact component={NotFound}/>
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);

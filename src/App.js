import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Preloader from "./components/Preloader/Preloader";

import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

const Home = lazy(() => import("./pages/Home/index"));
const Editor = lazy(() => import("./pages/Editor/index"));
const Sketch = lazy(() => import("./pages/Sketch/Sketch"));
const MediaManip = lazy(() => import("./pages/MediaManip/MediaManip"));
const NotFound = lazy(() => import("./pages/404/notFound"));

function App({ location }) {
  
  return (
    <Suspense fallback={<Preloader />}>
      {location.pathname !== "/404"} 
      <Router>
        <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editor" exact component={Editor} />
        <Route path="/sketch" exact component={Sketch} />
        <Route path="/mediamanip" exact component={MediaManip} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      {location.pathname !== "/404" && location.pathname !== '/sketch' && <Footer />}
      </Router>
    </Suspense>
  );
}

export default withRouter(App);

import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/404/NotFound";
import "./index.scss";
import Preloader from "./components/Preloader/Preloader";

const Home = lazy(() => import("./pages/Home/Home"));
const Editor = lazy(() => import("./pages/Editor/Editor"));
const Sketch = lazy(() => import("./pages/Sketch/Sketch"));
const MediaManip = lazy(() => import("./pages/MediaManip/MediaManip"));

window.isHome = true;

function App({ location }) {
  return (
    <Suspense fallback={<Preloader />}>
      {location.pathname !== "/404" && <Header />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/editor" exact component={Editor} />
        <Route path="/sketch" exact component={Sketch} />
        <Route path="/mediamanip" exact component={MediaManip} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      {location.pathname !== "/404" && location.pathname !== "/sketch" && <Footer />}
    </Suspense>
  );
}

export default withRouter(App);

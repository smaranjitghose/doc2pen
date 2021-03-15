import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";
import Preloader from "./components/Preloader/Preloader";

const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/Contact/ContactUs"));
const Editor = lazy(() => import("./pages/Editor"));
const Sketch = lazy(() => import("./pages/Sketch/Sketch"));
const NotFound = lazy(() => import("./pages/404/notFound"));

function App({ location }) {
  app.use(express.static(__dirname + '/public'));
  return (
    <Suspense fallback={<Preloader />}>
      {location.pathname !== "/404" && <Header />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/editor" exact component={Editor} />
        <Route path="/sketch" exact component={Sketch} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      {location.pathname !== "/404" && location.pathname !== '/sketch' && <Footer />}
    </Suspense>
  );
}

export default withRouter(App);

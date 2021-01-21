import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";

const Home = lazy(() => import("./pages/Home/index"));
const Editor = lazy(() => import("./pages/Editor/index"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading Page...</div>}>
          {/*put a nice preloader here in fallback*/}
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/editor" exact component={Editor}></Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

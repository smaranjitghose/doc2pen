import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";

const Home = lazy(() => import("./pages/Home/index"));
const Editor = lazy(() => import("./pages/Editor/index"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading Page...</div>}>
          {/*put a nice preloader here in fallback*/}
          <Route path="/home" component={Home}></Route>
          <Route path="/editor" component={Editor}></Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

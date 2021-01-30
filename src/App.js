import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import Preloader from './components/Preloader/Preloader'

const Home = lazy(() => import("./pages/Home/index"));
const Editor = lazy(() => import("./pages/Editor/index"));
const Sketch = lazy(() => import("./pages/Sketch/Sketch"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Preloader/>}>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/editor" exact component={Editor}></Route>
          <Route path="/sketch" exact component={Sketch}></Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

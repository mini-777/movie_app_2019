import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Search from "./routes/Search";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Search} />
      <Route path="/about" component={About} />
      <Route path="/music/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Movielist from "./components/Movielist/Movielist";
import Genres from "./components/Genres/Genres";

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="App">
      <Header />
      <Navbar active={active} setActive={setActive} />
      <div className="main-content">
        {active === "" && <Home />}
        {active === "Movielist" && <Movielist />}
        {active === "Genres" && <Genres />}
        {/* <Switch> */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/movielist" component={Movielist} />
        {/* <Movielist /> */}
        {/* </Route> */}
        {/* <Route path="/genres" component={Genres} /> */}
        {/* <Genres /> */}
        {/* </Switch> */}
      </div>
    </div>
  );
}

export default App;

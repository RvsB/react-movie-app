import Navbar from "./components/Navbar/Navbar";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/Home/Home";
import Movielist from "./components/Movielist/Movielist";
import Genres from "./components/Genres/Genres";

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  const [active, setActive] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeaderBar active={active} setActive={setActive} />
        <div className="main-content">
          {active === "" && <Home />}
          {active === "Movielist" && <Movielist />}
          {active === "Genres" && <Genres />}

          {/* <Switch>
            <Route path="/" component={Home} />
            <Route exact path="/movielist" component={Movielist} />
            {/* <Movielist /> */}
          {/* </Route> */}
          {/* <Route exact path="/genres" component={Genres} /> */}
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

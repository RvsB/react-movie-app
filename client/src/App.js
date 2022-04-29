import Navbar from "./components/Navbar/Navbar";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Home from "./components/Home/Home";
import Movielist from "./components/Movielist/Movielist";
import Genres from "./components/Genres/Genres";
// import NotFound from "./components/NotFound/NotFound";

import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  const [active, setActive] = useState("");

  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeaderBar setActive={setActive} />
        <div className="main-content">
          {active === "" && <Home />}
          {active === "Movielist" && <Movielist />}
          {active === "Genres" && <Genres />}

          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movielist" component={Movielist} />
          {/* <Route exact path="/genres" component={Genres} /> 
              <Route path="*" component={NotFound} />*/}
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

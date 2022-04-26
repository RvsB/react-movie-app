import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.scss";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [active, setActive] = useState("null");

  return (
    <div className="App">
      <Header />
      <Navbar />

      <Home />
      {/* <div className="content">
        <Switch>
          <Route exact path="/">

          </Route>
        </Switch>
      </div> */}
    </div>
  );
}

export default App;

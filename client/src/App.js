import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { DatabaseState } from "./context/database/DatabaseState";

function App() {
  return (
    <DatabaseState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
    </DatabaseState>
  );
}

export default App;

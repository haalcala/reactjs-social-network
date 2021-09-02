import React from "react";

import Home from "./pages/home/Home";

import { HashRouter, Route, Switch } from "react-router-dom";
import LoginOrRegister from "./pages/LoginOrRegister";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <LoginOrRegister />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;

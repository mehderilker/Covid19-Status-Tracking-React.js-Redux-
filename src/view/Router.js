import React,{Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CoronaPage from "./Main/CoronaPage";
import CoronaCountryPage from "./Main/CoronaCountryPage";

const RouterComp = () => {
    return (
        <Router>
                <Switch>
                    <Suspense fallback="Loading....">
                    <Route exact path="/" component={CoronaPage} />
                    <Route path="/country" component={CoronaCountryPage} />
                    </Suspense>
                    </Switch>
        </Router>
    )
}

export {RouterComp}
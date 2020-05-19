import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Main from './pages/Main'
import HeroesPage from './pages/HeroesPage'
import HeroPage from "./pages/HeroPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Main} />
                <Route exact path="/heroes" component={HeroesPage} />
                <Route path="/heroes/:heroId" component={HeroPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default App
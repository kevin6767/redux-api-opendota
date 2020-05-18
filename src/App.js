import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Main from './pages/Main'
import HeroesPage from './pages/HeroesPage'
import HeroDetail from './pages/HeroDetail'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/heroes" component={HeroesPage} />
                <Route path="/heroes/:heroId" component={HeroDetail} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default App
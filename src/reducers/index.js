import { combineReducers } from 'redux'

import heroesReducer from './heroesReducer'
import heroReducer from './heroReducer'

const rootReducer = combineReducers({
    heroes: heroesReducer,
    hero: heroReducer
})

export default rootReducer
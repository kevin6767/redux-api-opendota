// External imports
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import 'bootstrap/dist/css/bootstrap.min.css';


// Local imports
import App from './App'
import rootReducer from './reducers'


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


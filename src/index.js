// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import App from './components/app'
import reducer from './redux'
import watcherSaga from './redux/sagas'

// create the saga middleware
const sagaMiddleware: Function = createSagaMiddleware()

// create a redux store with our reducer above and middleware
const store: Object = createStore(reducer, compose(applyMiddleware(sagaMiddleware)))

// run the saga
sagaMiddleware.run(watcherSaga)

const element: any = document.getElementById('root')
const markup: React$Element<*> = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(markup, element)

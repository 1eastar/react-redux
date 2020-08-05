import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import First from './page/First';
import Firstfirst from './page/Firstfirst';
import Firstsecond from './page/Firstsecond';
import Second from './page/Second';
import Third from './page/Third';

import reducers from './redux/redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact={true} path='/' component={Main} /> */}
          <Route exact={true} path='/' component={First} />
          <Route path='/first1' component={Firstfirst} />
          <Route path='/first2' component={Firstsecond} />
          <Route path='/second' component={Second} />
          <Route path='/third' component={Third} />
          {/* Not Found */}
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

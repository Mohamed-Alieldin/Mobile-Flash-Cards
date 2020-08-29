import  React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import decks from './reducers';
import middleware from './middlewares'
import Nav from './components/Nav'
import {combineReducers} from 'redux'

export default function App() {
  const store = createStore(combineReducers({decks}), middleware)
  return (
    <Provider store={store}>
      <Nav/>
    </Provider>
  );
}



import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import App from './app';

let store = createStore(counterApp);

export default class extends Component {
  render () {
    return (
      <div>
        <p>テスト</p>
        <Provider store={store}>
          <App />
        </Provider>
      </div>

    );
  }
}
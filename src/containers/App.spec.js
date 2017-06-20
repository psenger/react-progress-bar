import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockResponseHelper } from '../../test/mocks';
import { App } from './App'; // Note: by using connect on the default export, I can pry open the class and wire it up by hand

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  const middleWares = []
  const store = configureStore(middleWares);

  window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponseHelper(200, null, JSON.stringify({ 'buttons': [32], 'bars': [50] }))));

  ReactDOM.render(<Provider store={store}>
                    <App />
                  </Provider>, div);
});

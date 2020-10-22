import React from 'react';
import { Provider } from 'react-redux';
import NewsApp from './containers/NewsApp';
import { configureStore } from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NewsApp />
    </Provider>
  );
}

export default App;

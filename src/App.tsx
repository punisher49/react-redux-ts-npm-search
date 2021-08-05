import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import RepositoriesList from './components/RepositoriesList';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Search for a package</h1>
      <RepositoriesList />
    </div>
  </Provider>
);

export default App;

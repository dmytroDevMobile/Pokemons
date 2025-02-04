import { AppNavigation } from '@/navigation/AppNavigation';
import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;

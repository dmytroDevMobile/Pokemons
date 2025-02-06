import { AppNavigation } from '@/navigation/AppNavigation';
import { store } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';

const App = () => {

  return (
    <PaperProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </PaperProvider>
  );
};

export default App;

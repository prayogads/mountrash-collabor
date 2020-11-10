import React from 'react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

import Private from './src/routes/';
import {StatusBar} from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Private />
      </PersistGate>
    </Provider>
  );
}

export default App;

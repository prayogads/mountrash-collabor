import {createStore, applyMiddleware, combineReducers} from 'redux';

import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';

import auth from './reducer/auth';
import splash from './reducer/splash';

const reducers = combineReducers({
  auth,
  splash,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);
export {store, persistor};

export default store;

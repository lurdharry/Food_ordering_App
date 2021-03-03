import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistReducer, persistStore, PersistConfig} from 'redux-persist';
import logger from 'redux-logger';
import {rootReducer, RootState} from './reducers';
import {RootStateOrAny} from 'react-redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['cart', 'cartTotal', 'currencyTotal', 'finshedOnboarding'],
};

const middleware = [ReduxThunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(...middleware));

const persistor = persistStore(store);

export {persistor, store};

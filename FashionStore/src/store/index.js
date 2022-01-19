import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from '../reducer/cartReducer'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers(
  {
    cart:cartReducer
  });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configstore=() =>createStore(
  persistedReducer,applyMiddleware()
);
const store =  configstore({
    reducer : persistedReducer
});
export const persistor = persistStore(store);
export default store;

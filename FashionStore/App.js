import "react-native-gesture-handler";
import  React,{useState,useEffect} from "react";
import {RootNavigator} from './src/navigation/index';
import {Provider} from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
import store from './src/store/index'
import Toast from 'react-native-toast-message';

function App () {
 
   const persistor = persistStore(store);
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
         <RootNavigator/>
      </PersistGate>
    </Provider>
    
    <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;

import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Home from '../screen/HomeScreen'
import Cart from '../screen/Cart'

const Stack = createNativeStackNavigator();

export function AppNavigation() {
 
  return (

    <Stack.Navigator>
      <Stack.Screen component={Home} name="Home" options={{ headerShown: false }} />
      <Stack.Screen component={Cart} name={'Cart'} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

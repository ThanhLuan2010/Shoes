import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {AppNavigation} from './AppNavigation';
export function RootNavigator() {
    return(
    <NavigationContainer>
        <AppNavigation/>
    </NavigationContainer>
    )
}

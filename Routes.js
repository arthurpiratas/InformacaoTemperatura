import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'

import Home from './pages/Home'
import Page2 from './pages/Page2'

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="nome" initialRouteName="Home">
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Page2" component={Page2} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}



export default Routes



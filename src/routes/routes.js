import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import FeatherIcon from "react-native-vector-icons/Feather"

import Catalog from '../pages/Catalog'
import Header from '../components/Header'
import Cart from '../pages/Cart';

const Stack = createStackNavigator();

const Routes = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions ={{
          headerShown: true,
          cardStyle: {backgroundColor: '#313746'}
        }}
        initialRouteName = "Catalog"
      >
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown:true,
            headerTransparent: true,
            headerTitle: () =><Header/>,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown:true,
            headerTransparent: true,
            headerTitle: () =><Header/>,
            headerBackTitle: false,
            headerLeftContainerStyle: {
              margin: 20,
            },
            headerBackImage: () =>(
              <FeatherIcon name="chevron-left" size={24} color="#F3F9FF" />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes

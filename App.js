import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import Locations from './Locations';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="analytics" component={SecondScreen} />
        <Stack.Screen name="Locations" component={Locations} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../views/Home';
import { Header } from '../components';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

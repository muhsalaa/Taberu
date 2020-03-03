import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Shop } from '../views/Shop';
import { Header } from '../components';

const Stack = createStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  );
};

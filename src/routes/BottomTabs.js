import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ms, vs } from '../helpers';

import { HomeStack } from './HomeStack';
import { ShopStack } from './ShopStack';
import { Favorites } from '../views/Favorites';
import { Profile } from '../views/Profile';
import { colors } from '../assets/styles';
import { layout, Typography } from '../assets/styles';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        let iconName;

        if (route.name === 'Home') {
          iconName = isFocused ? 'home' : 'home-outline';
        } else if (route.name === 'Shop') {
          iconName = isFocused ? 'cart' : 'cart-outline';
        } else if (route.name === 'Favorites') {
          iconName = isFocused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Profile') {
          iconName = isFocused ? 'account-circle' : 'account-circle-outline';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}>
            <MaterialCommunityIcons
              name={iconName}
              size={ms(37)}
              color={isFocused ? colors.white : colors.gray}
              style={styles.icon}
            />
            <Text
              style={[
                styles.label,
                { color: isFocused ? colors.white : colors.gray },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const BottomTabs = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Shop" component={ShopStack} />
      <Tabs.Screen name="Favorites" component={Favorites} />
      <Tabs.Screen name="Profile" component={Profile} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ms(60),
    backgroundColor: colors.primary,
    borderTopLeftRadius: ms(15),
    borderTopRightRadius: ms(15),
    flexDirection: 'row',
  },
  tabButton: {
    ...layout.center,
  },
  icon: {
    margin: -3,
  },
  label: {
    ...Typography.xs,
  },
});

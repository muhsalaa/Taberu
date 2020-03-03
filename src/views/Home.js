import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { FoodTypesCard } from '../components';
import { colors, Typography } from '../assets/styles';
import { ms } from '../helpers';

const dummyFoodTypes = [
  {
    id: '12',
    name: 'Fast food',
    image: require('../assets/images/hamburger.png'),
    new: 6,
  },
  {
    id: '23s',
    name: 'Cakes',
    image: require('../assets/images/cakes.png'),
    new: 0,
  },
  {
    id: '534',
    name: 'Chicken',
    image: require('../assets/images/chicken.png'),
    new: 0,
  },
  {
    id: '34',
    name: 'Beverage',
    image: require('../assets/images/ice.png'),
    new: 0,
  },
  {
    id: 'x2',
    name: 'Fast food',
    image: require('../assets/images/hamburger.png'),
    new: 6,
  },
  {
    id: '2x3s',
    name: 'Cakess',
    image: require('../assets/images/cakes.png'),
    new: 0,
  },
  {
    id: '5x34',
    name: 'Chicken',
    image: require('../assets/images/chicken.png'),
    new: 0,
  },
  {
    id: '3x4',
    name: 'Beverage',
    image: require('../assets/images/ice.png'),
    new: 0,
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={dummyFoodTypes}
          keyExtractor={item => item.id}
          horizontal
          contentContainerStyle={{ paddingLeft: ms(10), paddingTop: ms(15) }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <FoodTypesCard food={item} />;
          }}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.snow,
  },
  sectionHeader: {
    padding: ms(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    ...Typography.xl_b,
    color: colors.primary,
  },
});

export { Home };

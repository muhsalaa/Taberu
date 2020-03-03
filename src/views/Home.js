import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import { FoodTypesCard, PopularFoodCard, LikeStack } from '../components';
import {
  colors,
  pt2,
  pl2,
  font_bold,
  text_xl,
  rowFullCenter,
  justify_between,
  p2,
} from '../assets/styles';
import { dummyFoodTypes, dummyPopularFood } from '../dummies';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={dummyFoodTypes}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ ...pl2, ...pt2 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <FoodTypesCard food={item} />;
          }}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Recipe</Text>
          <LikeStack likes={3} big normalize />
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
        </View>
        <FlatList
          data={dummyPopularFood}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={{ ...pl2 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PopularFoodCard food={item} />;
          }}
        />
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
    ...p2,
    ...rowFullCenter,
    ...justify_between,
  },
  sectionTitle: {
    ...text_xl,
    ...font_bold,
    color: colors.primary,
  },
});

export { Home };

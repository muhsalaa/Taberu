import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';

import {
  FoodTypesCard,
  PopularFoodCard,
  LikeStack,
  PopularFoodCardLong,
  CarouselItem,
} from '../components';
import {
  colors,
  pt2,
  pl2,
  font_bold,
  text_xl,
  rowFullCenter,
  justify_between,
  p2,
  justify_around,
  text_sm,
  ml2,
  mr2,
  pv1,
  rowFlex,
  mt4,
  ph3,
  mb4,
} from '../assets/styles';
import { ms } from '../helpers';
import { dummyFoodTypes, dummyPopularFood } from '../dummies';

const popularFoodTabs = ['Info', 'Lorem', 'Menu', 'Reviews'];
const { width } = Dimensions.get('window');

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Food Types */}
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

        {/* My Recipe */}
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>My Recipe</Text>
          <LikeStack likes={3} big normalize />
        </View>
        <Carousel
          data={dummyPopularFood}
          renderItem={CarouselItem}
          sliderWidth={width + ms(50)}
          itemWidth={ms(200)}
          layout="stack"
          loop
          inactiveSlideScale={0.7}
          layoutCardOffset={50}
          containerCustomStyle={{
            transform: [{ scaleX: -1 }, { translateX: ms(80) }],
          }}
          firstItem={dummyPopularFood.length - 1}
          inactiveSlideOpacity={1}
        />

        {/* Popular food comment and likes */}
        <View style={styles.sectionTitleContainer}>
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

        {/* Popular food list */}
        <View style={styles.popularFoodTabsContainer}>
          {popularFoodTabs.map((tab, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tabButton,
                  activeIndex === index && {
                    borderBottomColor: colors.primary,
                  },
                ]}
                onPress={() => setActiveIndex(index)}>
                <Text style={styles.tabText}>{tab}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <FlatList
          data={dummyPopularFood}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ ...ph3 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <PopularFoodCardLong food={item} />;
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
  sectionTitleContainer: {
    ...p2,
    ...rowFullCenter,
    ...justify_between,
  },
  sectionTitle: {
    ...text_xl,
    ...font_bold,
    color: colors.primary,
  },
  popularFoodTabsContainer: {
    ...rowFlex,
    ...justify_around,
    ...pv1,
    ...ph3,
    ...ml2,
    ...mr2,
    ...mt4,
    ...mb4,
    borderTopWidth: 1,
    borderTopColor: colors.boldGray,
  },
  tabButton: {
    ...p2,
    borderBottomWidth: 1.5,
    borderBottomColor: 'transparent',
  },
  tabText: {
    ...text_sm,
    ...font_bold,
    color: colors.boldGray,
  },
});

export { Home };

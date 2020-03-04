import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { ms } from '../helpers';
import {
  text_sm,
  font_bold,
  shadow_md,
  rowFullCenter,
  mb2,
  rounded_md,
  mr2,
  mS,
  text_xs,
  mb1,
  p3,
  justify_center,
  colors,
} from '../assets/styles';

const PopularFoodCardLong = ({ food }) => {
  return (
    <View style={styles.container}>
      <View style={styles.foodImageContainer}>
        <Image source={food.image} style={styles.foodImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.foodName}>{food.name}</Text>
        <Text style={styles.descriptionText}>{food.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowFullCenter,
    ...mb2,
    overflow: 'hidden',
  },
  foodImageContainer: {
    ...shadow_md,
    ...mr2,
    ...rounded_md,
    ...mS,
    overflow: 'hidden',
  },
  foodImage: {
    height: ms(90),
    width: ms(90),
  },
  foodName: {
    ...text_sm,
    ...font_bold,
    ...mb1,
  },
  textContainer: {
    ...p3,
    ...rounded_md,
    ...shadow_md,
    ...mS,
    ...justify_center,
    backgroundColor: colors.white,
    flex: 1,
    height: ms(85),
  },
  descriptionText: {
    ...text_xs,
  },
});

export { PopularFoodCardLong };

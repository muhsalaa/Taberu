import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ms } from '../helpers';
import {
  centering,
  colors,
  text_sm,
  mb1,
  rounded_full,
  text_xs,
  mr2,
} from '../assets/styles';

const FoodTypesCard = ({ food }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {!!food.new && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{food.new}</Text>
        </View>
      )}
      <View
        style={[
          styles.imageContainer,
          !!food.new && { backgroundColor: colors.primary },
        ]}>
        <Image source={food.image} style={styles.foodImage} />
      </View>
      <Text style={styles.foodName}>{food.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...centering,
    ...mr2,
    height: ms(90),
    width: ms(90),
  },
  foodImage: {
    height: ms(50),
    width: ms(50),
  },
  imageContainer: {
    ...centering,
    ...rounded_full,
    ...mb1,
    width: ms(60),
    height: ms(60),
    backgroundColor: colors.snow,
    elevation: 3,
  },
  foodName: {
    ...text_sm,
  },
  badge: {
    ...centering,
    ...rounded_full,
    width: ms(20),
    height: ms(20),
    backgroundColor: colors.red,
    position: 'absolute',
    top: ms(7),
    right: ms(7),
    elevation: 4,
  },
  badgeText: {
    ...text_xs,
    color: colors.white,
  },
});

export { FoodTypesCard };

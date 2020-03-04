import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LikeStack } from './LikeStack';
import { ms } from '../helpers';
import {
  centering,
  colors,
  text_sm,
  mr2,
  rounded_sm,
  mS,
  font_bold,
  shadow_md,
  rounded_full,
  mb3,
  ml2,
} from '../assets/styles';

const PopularFoodCard = ({ food }) => {
  return (
    <View style={styles.container}>
      {!!food.new && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>NEW</Text>
        </View>
      )}
      <TouchableOpacity style={styles.likeButton}>
        <Ionicons size={ms(18)} color={colors.white} name="ios-heart" />
      </TouchableOpacity>
      <Image source={food.image} style={styles.foodImage} />
      <Text style={styles.foodName}>{food.comment}</Text>
      <LikeStack likes={food.likes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rounded_sm,
    ...mr2,
    ...mS,
    ...shadow_md,
    height: ms(200),
    width: ms(130),
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  foodImage: {
    ...mb3,
    height: ms(130),
    width: ms(130),
  },
  foodName: {
    ...text_sm,
    ...font_bold,
    ...ml2,
  },
  badge: {
    ...centering,
    width: '100%',
    height: ms(20),
    backgroundColor: colors.red,
    position: 'absolute',
    zIndex: 1,
    transform: [{ rotate: '45deg' }],
    right: -ms(45),
    top: ms(10),
  },
  badgeText: {
    ...text_sm,
    ...font_bold,
    color: colors.white,
  },
  likeButton: {
    ...centering,
    ...rounded_full,
    width: ms(30),
    height: ms(30),
    backgroundColor: colors.pink,
    ...centering,
    position: 'absolute',
    zIndex: 1,
    left: ms(5),
    bottom: ms(55),
  },
});

export { PopularFoodCard };

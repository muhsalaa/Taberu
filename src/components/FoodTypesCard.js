import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ms } from '../helpers';
import { colors, Typography, layout } from '../assets/styles';

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
    height: ms(90),
    width: ms(90),
    ...layout.centering,
    marginRight: ms(10),
  },
  foodImage: {
    height: ms(50),
    width: ms(50),
  },
  imageContainer: {
    width: ms(60),
    height: ms(60),
    ...layout.centering,
    backgroundColor: colors.snow,
    elevation: 3,
    borderRadius: 100,
    marginBottom: ms(5),
  },
  foodName: {
    ...Typography.sm,
  },
  badge: {
    width: ms(20),
    height: ms(20),
    ...layout.centering,
    backgroundColor: colors.red,
    borderRadius: 50,
    position: 'absolute',
    top: ms(7),
    right: ms(7),
    elevation: 4,
  },
  badgeText: {
    ...Typography.xs,
    color: colors.white,
  },
});

export { FoodTypesCard };

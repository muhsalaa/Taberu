import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ms } from '../../helpers';
import {
  colors,
  rounded_sm,
  p2,
  text_md,
  font_bold,
  text_xxs,
  shadow_md,
} from '../../assets/styles';

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.carouselImage} />
      <View style={styles.infoContainer}>
        <View style={styles.textContainerUp}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rounded_sm,
    ...shadow_md,
    borderColor: colors.gray,
    borderWidth: 1,
    height: ms(300),
    width: ms(200),
    backgroundColor: colors.white,
    overflow: 'hidden',
    transform: [{ scaleX: -1 }],
  },
  carouselImage: {
    width: '100%',
    height: ms(175),
  },
  infoContainer: {
    ...p2,
    flex: 1,
  },
  textContainerUp: {
    flexGrow: 1,
    justifyContent: 'center',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    ...text_md,
    ...font_bold,
  },
  content: {
    ...text_xxs,
  },
});

export { CarouselItem };

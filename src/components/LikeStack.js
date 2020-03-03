import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  row,
  text_sm,
  rounded_full,
  ml2,
  items_center,
  font_bold,
  colors,
} from '../assets/styles';
import { ms } from '../helpers';

const images = [
  require('../assets/images/man1.png'),
  require('../assets/images/man2.png'),
  require('../assets/images/man3.png'),
];

const LikeStack = ({ likes, big, normalize }) => {
  const offsetAdjustment = big ? 17 : 15;
  const imageSize = big ? 34 : 30;

  const likers = Array.from(images.slice(0, likes > 3 ? 3 : likes));

  return (
    <View
      style={[
        styles.container,
        // if true, will grab this component to right side, to normalize the balnk space created
        normalize && {
          transform: [
            { translateX: ms((likers.length - 1) * offsetAdjustment) },
          ],
        },
      ]}>
      <View style={styles.stackContainer}>
        {likers.map((liker, index) => {
          return (
            <View key={index}>
              <Image
                source={liker}
                style={[
                  styles.stackImage,
                  { width: ms(imageSize), height: ms(imageSize) },
                  // give minus left value to make photos stack, start from index 1
                  index > 0 && { left: -ms(index * offsetAdjustment) },
                ]}
              />
              {likers.length - 1 === index && (
                <Image
                  source={require('../assets/images/hearts.png')}
                  style={[
                    // adjust small heart icon placing, give absolute position and bottom 0
                    // then calculate the offset and add one offsetAdjustment to place icon on right side
                    styles.smallIconStyle,
                    {
                      left:
                        -ms((likers.length - 1) * offsetAdjustment) +
                        ms(offsetAdjustment),
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
      </View>
      <Text
        style={[
          styles.likesCount,
          // give left margin based on last image position, calculated from total index times adjusment value
          { left: -ms((likers.length - 1) * offsetAdjustment) },
        ]}>
        {' '}
        +{likes}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...row,
    ...ml2,
    ...items_center,
  },
  likesCount: {
    ...text_sm,
    ...font_bold,
    color: colors.boldGray,
  },
  stackImage: {
    ...rounded_full,
    borderWidth: 2,
    borderColor: colors.white,
  },
  stackContainer: {
    ...row,
  },
  smallIconStyle: {
    position: 'absolute',
    bottom: 0,
    width: ms(15),
    height: ms(15),
  },
});

export { LikeStack };

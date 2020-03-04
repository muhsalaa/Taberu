import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

import {
  rowFullCenter,
  p2,
  rounded_full,
  mr2,
  colors,
  font_bold,
  text_xs,
  ml2,
  text_sm,
  text_md,
  justify_between,
  pv1,
  ph2,
  mb2,
  row,
  items_center,
  mb1,
  rowFlexCenter,
  mr1,
} from '../assets/styles';
import { ms } from '../helpers';
import { ingredients } from '../dummies';
import { VideoPlayer } from '../components';

class Shop extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* Videos */}
          <VideoPlayer
            video={require('../assets/videos/vid.mp4')}
            thumbnail={require('../assets/images/food3.png')}
          />

          {/* User info */}
          <View style={styles.userContainer}>
            <Image
              style={styles.userImage}
              source={require('../assets/images/man1.png')}
            />
            <View>
              <Text style={styles.name}>Jane Doe</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((x, idx) => (
                  <AntDesign
                    key={idx}
                    name="star"
                    style={{ marginRight: 2 }}
                    color={colors.secondary}
                    size={ms(15)}
                  />
                ))}
                <Text style={styles.ratingCounts}>(10)</Text>
              </View>
            </View>
            <View style={styles.socmedContainer}>
              <Image
                source={require('../assets/images/icons8-instagram-80.png')}
                style={styles.socmed}
              />
              <Image
                source={require('../assets/images/fb.png')}
                style={styles.socmed}
              />
              <Image
                source={require('../assets/images/wa.png')}
                style={styles.socmed}
              />
            </View>
          </View>

          {/* Food Description */}
          <Text style={styles.description}>
            <Text style={{ ...font_bold, ...text_sm }}>Beef Patty </Text>- Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ultricies nisi, nec maximus purus. Sed eros eros, convallis quis
            elit id, suscipit sodales velit. Donec interdum pellentesque ipsum.
          </Text>

          {/* Ingredients */}
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Shopping List</Text>
          </View>
          {ingredients.map((item) => {
            return (
              <View style={styles.ingredientsContainer} key={item.id}>
                <Text style={styles.ingredientsText}>{item.name}</Text>
                <Text style={styles.ingredientsText}>{item.amount}</Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    ...rowFullCenter,
    ...p2,
  },
  userImage: {
    ...rounded_full,
    ...mr2,
    height: ms(60),
    width: ms(60),
  },
  name: {
    ...text_md,
    ...font_bold,
    ...mb1,
  },
  ratingContainer: {
    ...row,
    ...items_center,
  },
  ratingCounts: {
    ...text_xs,
    color: colors.boldGray,
  },
  socmedContainer: {
    ...rowFlexCenter,
    justifyContent: 'flex-end',
  },
  socmed: {
    ...rounded_full,
    ...mr1,
    width: ms(25),
    height: ms(25),
  },
  description: {
    ...text_xs,
    ...ml2,
    ...mr2,
    ...mb2,
  },
  sectionTitleContainer: {
    ...ph2,
    ...pv1,
    ...rowFullCenter,
  },
  sectionTitle: {
    ...text_md,
    ...font_bold,
    color: colors.primary,
  },
  ingredientsContainer: {
    ...rowFlexCenter,
    ...ml2,
    ...mr2,
    ...justify_between,
    height: ms(50),
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  ingredientsText: {
    ...text_sm,
  },
});

export { Shop };

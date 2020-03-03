import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { ms } from '../helpers';
import {
  colors,
  ph3,
  rowFullCenter,
  mr1,
  rounded_full,
  ml2,
  mr2,
  ph2,
  rowFlexCenter,
  text_sm,
  p0,
} from '../assets/styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/scan.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.iconSearch}
        />
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/bar.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowFullCenter,
    ...ph3,
    height: ms(70),
    backgroundColor: colors.dark,
  },
  icon: {
    height: ms(25),
    width: ms(25),
  },
  iconSearch: {
    ...mr1,
    height: ms(20),
    width: ms(20),
  },
  inputContainer: {
    ...rowFlexCenter,
    ...ml2,
    ...mr2,
    ...ph2,
    ...rounded_full,
    backgroundColor: colors.white,
    height: ms(35),
  },
  input: {
    ...text_sm,
    ...p0,
    flex: 1,
  },
});

export { Header };

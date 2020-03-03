import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { ms } from '../helpers';
import { colors } from '../assets/styles';

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
    height: ms(70),
    backgroundColor: colors.dark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(15),
    justifyContent: 'space-between',
  },
  icon: {
    height: ms(25),
    width: ms(25),
  },
  iconSearch: {
    height: ms(20),
    width: ms(20),
    marginRight: ms(5),
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 100,
    height: ms(35),
    alignItems: 'center',
    flex: 1,
    marginLeft: ms(10),
    marginRight: ms(10),
    paddingHorizontal: ms(10),
  },
  input: {
    fontSize: ms(12),
    padding: 0,
    flex: 1,
  },
});

export { Header };

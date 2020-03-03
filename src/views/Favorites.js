import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { center } from '../assets/styles';

const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
  },
});

export { Favorites };

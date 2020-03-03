import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { layout } from '../assets/styles';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layout.center,
  },
});

export { Profile };

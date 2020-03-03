import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { center } from '../assets/styles';

const Profile = () => {
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

export { Profile };

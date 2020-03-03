import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { center } from '../assets/styles';

const Shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
  },
});

export { Shop };

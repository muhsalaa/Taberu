import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { layout } from '../assets/styles';

const Shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layout.center,
  },
});

export { Shop };

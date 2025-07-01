import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
  <View style={styles.container}>
    <Text style={styles.text}>© 2025 Afzal Ali</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333',
  },
});

export default Footer;

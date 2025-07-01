import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostItem = ({ title, body }: Post) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});

export default PostItem;

import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import { fetchPosts } from '../services/api';
import { type Post } from '../types';
import { useFetch } from '../hooks';

const HomeScreen = () => {
  const { data: posts, loading, error } = useFetch<Post[]>(fetchPosts);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {loading ? (
          <ActivityIndicator size="large" color="#2196F3" />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          posts?.map((post) => (
            <PostItem key={post.id} {...post} />
          ))
        )}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;

import React from 'react';
import { View, ScrollView, ActivityIndicator, Text } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import { fetchPosts } from '../services/api';
import { type Post } from '../types';
import { useFetch } from '../hooks';

const HomeScreen = () => {
  const { data: posts, loading, error } = useFetch<Post[]>(fetchPosts);

  return (
    <View className="flex-1">
      <Header />
      <ScrollView contentContainerClassName="flex-grow p-4">
        {loading ? (
          <ActivityIndicator size="large" color="#2196F3" />
        ) : error ? (
          <Text className="text-red-500 text-lg text-center mt-5">{error}</Text>
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

export default HomeScreen;

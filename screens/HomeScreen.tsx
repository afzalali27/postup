import React from 'react';
import { View, ScrollView, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import { fetchPosts } from '../services/api';
import { type Post } from '../types';
import { useFetch } from '../hooks';

const HomeScreen = () => {
  const { data: posts, loading, error, refetch } = useFetch<Post[]>(fetchPosts);

  return (
    <View className="flex-1">
      <Header />
      <ScrollView contentContainerClassName="flex-grow p-4">
        {loading ? (
          <ActivityIndicator size="large" color="#2196F3" />
        ) : error ? (
          <View className="items-center mt-5">
            <Text className="text-red-500 text-lg mb-2 text-center">{error}</Text>
            <TouchableOpacity
              onPress={refetch}
              className="bg-blue-500 px-4 py-2 rounded"
            >
              <Text className="text-white font-medium">Retry</Text>
            </TouchableOpacity>
          </View>
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

import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostItem from '../components/PostItem';
import { fetchPosts } from '../services/api';

type Post = {
  id: number;
  title: string;
  body: string;
};

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadData = async () => {
        const data = await fetchPosts();
        setPosts(data);
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
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
});

export default HomeScreen;

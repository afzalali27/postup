import React from 'react';
import { View, Text } from 'react-native';
import { Post } from '../types';

const PostItem = ({ title, body }: Post) => (
  <View className="mb-4 p-3 bg-gray-100 rounded-lg shadow">
    <Text className="font-bold text-base mb-1">{title}</Text>
    <Text className="text-sm text-gray-600">{body}</Text>
  </View>
);

export default PostItem;

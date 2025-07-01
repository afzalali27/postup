import React, { useState, useCallback } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WelcomeMessage from '../components/WelcomeMessage';

const HomeScreen: React.FC = () => {
  const [refreshCount, setRefreshCount] = useState(0);

  const handleWelcomePress = useCallback(() => {
    setRefreshCount(prev => prev + 1);
    Alert.alert(
      'Welcome!', 
      `This is your ${refreshCount + 1} interaction with the welcome message.`
    );
  }, [refreshCount]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <WelcomeMessage 
          appName="PostUp" 
          onPress={handleWelcomePress}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen;


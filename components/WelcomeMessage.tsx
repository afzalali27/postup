import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface WelcomeMessageProps {
  appName?: string;
  onPress?: () => void;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ 
  appName = 'PostUp', 
  onPress 
}) => {
  const [pressCount, setPressCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePress = () => {
    setPressCount(prev => prev + 1);
    onPress?.();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>Welcome to {appName}!</Text>
      <Text style={styles.subtitle}>
        Time: {currentTime.toLocaleTimeString()}
      </Text>
      <Text style={styles.counter}>
        Pressed {pressCount} time{pressCount !== 1 ? 's' : ''}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 5,
  },
  counter: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
  },
});

export default WelcomeMessage;


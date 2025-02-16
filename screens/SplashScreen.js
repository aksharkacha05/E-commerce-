import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { FadeOut } from 'react-native-reanimated';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.View exiting={FadeOut}>
        <LottieView
          source={require('../assets/splash-animation.json')}
          autoPlay
          loop={false}
          style={styles.animation}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200ee', // Match your theme's primary color
  },
  animation: {
    width: 300,
    height: 300,
  },
});

export default SplashScreen;
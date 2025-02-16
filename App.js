import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, MD3LightTheme, configureFonts } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import SplashScreen from './screens/SplashScreen';
import { CartProvider } from './context/CartContext';

const Stack = createStackNavigator();

// Custom theme for React Native Paper
const customTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee', // Purple
    accent: '#03dac6', // Teal
    background: '#f5f5f5', // Light gray
    surface: '#ffffff', // White
    text: '#000000', // Black
  },
  fonts: configureFonts({
    config: {
      fontFamily: 'Roboto',
    },
  }),
};

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 5000); // Hide splash screen after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <PaperProvider theme={customTheme}>
      <CartProvider>
        <NavigationContainer theme={DefaultTheme}>
          {isSplashVisible ? (
            <SplashScreen />
          ) : (
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Ecommerce App', headerShown: false }}
              />
              <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{ title: 'Product Detail' }}
              />
              <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{ title: 'Cart' }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </CartProvider>
    </PaperProvider>
  );
} 
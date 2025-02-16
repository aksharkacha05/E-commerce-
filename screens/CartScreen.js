import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { CartContext } from '../context/CartContext';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </Card.Content>
              <Card.Actions>
                <Button onPress={() => removeFromCart(item.id)}>Remove</Button>
              </Card.Actions>
            </Card>
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  card: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default CartScreen;
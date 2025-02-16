import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { CartContext } from '../context/CartContext';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const DetailScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn} exiting={FadeOut}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: product.images[0] }} />
          <Card.Content>
            <Title style={styles.title}>{product.title}</Title>
            <Paragraph style={styles.price}>${product.price}</Paragraph>
            <Paragraph style={styles.description}>{product.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => addToCart(product)}>
              Add to Cart
            </Button>
            <Button mode="outlined" onPress={() => addToWishlist(product)}>
              Add to Wishlist
            </Button>
          </Card.Actions>
        </Card>
      </Animated.View>
    </ScrollView>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default DetailScreen;
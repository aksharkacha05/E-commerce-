import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme } from 'react-native-paper';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 20; // Two cards per row with margin

const ProductCard = ({ product, onPress, onAddToCart, onAddToWishlist }) => {
  const theme = useTheme();

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <TouchableOpacity onPress={onPress}>
        <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
          <Card.Cover source={{ uri: product.images[0] }} style={styles.image} />
          <Card.Content style={styles.content}>
            <Title style={[styles.title, { color: theme.colors.text }]}>
              {product.title}
            </Title>
            <Paragraph style={[styles.price, { color: theme.colors.accent }]}>
              ${product.price}
            </Paragraph>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            <Button
              mode="contained"
              onPress={onAddToCart}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              Add to Cart
            </Button>
            <Button
              mode="outlined"
              onPress={onAddToWishlist}
              style={styles.button}
              labelStyle={styles.buttonLabel}
            >
              Wishlist
            </Button>
          </Card.Actions>
        </Card>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonLabel: {
    fontSize: 12,
  },
});

export default ProductCard;
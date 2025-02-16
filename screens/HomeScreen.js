import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Appbar, Searchbar } from 'react-native-paper';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import { CartContext } from '../context/CartContext';
import { API_URL } from '../constants/config';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Ecommerce App" />
        <Appbar.Action icon="cart" onPress={() => navigation.navigate('Cart')} />
      </Appbar.Header>
      <Searchbar
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchBar}
      />
      <FlashList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        estimatedItemSize={200}
        renderItem={({ item }) => (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <ProductCard
              product={item}
              onAddToCart={() => addToCart(item)}
              onAddToWishlist={() => addToWishlist(item)}
              onPress={() => navigation.navigate('Detail', { product: item })}
            />
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    margin: 10,
  },
});

export default HomeScreen;
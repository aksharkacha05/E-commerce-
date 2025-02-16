import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

const CategoryFilter = ({ onSelectCategory }) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.category}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  category: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#6200ee',
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CategoryFilter;
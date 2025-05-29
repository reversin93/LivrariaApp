import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const livros = [
  { id: '1', titulo: 'Dom Casmurro' },
  { id: '2', titulo: 'Memórias Póstumas de Brás Cubas' },
  { id: '3', titulo: 'O Cortiço' },
];

export default function LivrosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Livros</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.titulo}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  item: { fontSize: 18, marginVertical: 5 },
});

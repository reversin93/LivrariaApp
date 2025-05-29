import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        Este aplicativo é uma demonstração de navegação e interface gráfica usando React Native.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10 },
  text: { fontSize: 16 },
});

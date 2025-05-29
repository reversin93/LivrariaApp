import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LivrosScreen from './screens/LivrosScreen';
import SobreScreen from './screens/SobreScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Livros" component={LivrosScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

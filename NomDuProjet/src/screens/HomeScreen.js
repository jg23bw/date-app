import * as React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        Bienvenue
      </Text>
      <Button mode="contained" onPress={() => navigation.navigate('SignUp')} style={{ marginBottom: 8 }}>
        Inscription
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Login')}>
        Connexion
      </Button>
    </View>
  );
}

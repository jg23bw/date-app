import * as React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

export default function PrivacyNoticeScreen() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        Confidentialité et traitement des données
      </Text>
      <Text style={{ marginBottom: 8 }}>
        Les informations collectées lors de votre inscription sont utilisées
        exclusivement pour la création de votre compte et la vérification de
        votre identité. L'avis d'imposition que vous téléversez est stocké de
        manière sécurisée et n'est accessible qu'au personnel autorisé.
      </Text>
      <Text>
        Conformément aux réglementations en vigueur, vous pouvez exercer vos
        droits d'accès, de rectification et de suppression de vos données en
        contactant notre support.
      </Text>
    </ScrollView>
  );
}

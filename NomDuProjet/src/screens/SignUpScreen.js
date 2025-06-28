import * as React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import { uploadFile } from '../services/FileUploadService';

export default function SignUpScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fileResponse, setFileResponse] = React.useState(null);

  const handleDocument = async () => {
    try {
      const res = await DocumentPicker.pickSingle({});
      setFileResponse(res);
      await uploadFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // user cancelled
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge" style={{ marginBottom: 16 }}>
        Inscription
      </Text>
      <TextInput
        label="Nom"
        value={name}
        onChangeText={setName}
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ marginBottom: 8 }}
      />
      <TextInput
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 16 }}
      />
      <Button mode="contained" onPress={handleDocument} style={{ marginBottom: 16 }}>
        Télécharger l'avis d'imposition
      </Button>
      {fileResponse && (
        <Text style={{ marginBottom: 16 }}>Fichier sélectionné : {fileResponse.name}</Text>
      )}
      <Button mode="contained">Valider</Button>
    </View>
  );
}

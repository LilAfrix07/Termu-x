import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddContentScreen({ isAdmin }) {
  const [content, setContent] = useState('');

  const handleAddContent = () => {
    if (isAdmin && content) {
      // Here you would typically send the new content to a backend
      alert('Content added successfully!');
      setContent('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Content</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter content here..."
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Add Content" onPress={handleAddContent} disabled={!isAdmin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    height: 100,
  },
});


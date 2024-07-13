import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './NavigationTs';
import { fetchPostById, updatePost } from '../services/Api';

type EditPostScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditPost'>;
type EditPostScreenRouteProp = RouteProp<RootStackParamList, 'EditPost'>;

type Props = {
  navigation: EditPostScreenNavigationProp;
  route: EditPostScreenRouteProp;
};

const EditPostScreen: React.FC<Props> = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      const post = await fetchPostById(route.params.postId);
      setTitle(post.title);
      setBody(post.body);
    };
    loadPost();
  }, []);

  const handleSave = async () => {
    await updatePost(route.params.postId, { title, body });
    alert('Post updated!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Post</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default EditPostScreen;

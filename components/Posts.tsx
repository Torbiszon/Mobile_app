import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { fetchPosts, updatePost } from '../services/Api';
import { useAuth } from './AppContext';

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    loadPosts();
  }, []);

  const handleEditPost = async (postId: number) => {
    const updatedPost = await updatePost(postId, { title: 'Updated Title', body: 'Updated Body' });
    setPosts(posts.map(post => (post.id === postId ? updatedPost : post)));
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
          {item.userId === user.id && ( 
            <Button title="Edit" onPress={() => handleEditPost(item.id)} />
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Posts;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { fetchPhotos } from '../services/Api';

type Photo = {
  id: number;
  title: string;
  thumbnailUrl: string;
};

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const data = await fetchPhotos();
      setPhotos(data);
    };
    loadPhotos();
  }, []);

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.thumbnailUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
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
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Photos;

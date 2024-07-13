// components/Albums.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { fetchAlbums } from '../services/Api';
import SearchBar from './SearchBar';

type Album = {
  id: number;
  title: string;
};

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const loadAlbums = async () => {
      const data = await fetchAlbums();
      setAlbums(data);
      setFilteredAlbums(data);
    };
    loadAlbums();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = albums.filter(album =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAlbums(filtered);
    } else {
      setFilteredAlbums(albums);
    }
  }, [searchTerm, albums]);

  return (
    <View style={styles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FlatList
        data={filteredAlbums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Albums;

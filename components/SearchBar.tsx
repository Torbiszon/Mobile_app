
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Albums..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 8,
  },
});

export default SearchBar;

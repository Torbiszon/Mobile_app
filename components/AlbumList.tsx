// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
// import storage from '@react-native-firebase/storage';

// const AlbumList = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const storageRef = storage().ref();
//       const result = await storageRef.listAll();
//       const urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());

//       const urls = await Promise.all(urlPromises);
//       setImages(urls);
//     };

//     fetchImages();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={images}
//         keyExtractor={(_, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Image source={{ uri: item }} style={styles.image} />
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     margin: 10,
//   },
// });

// export default AlbumList;

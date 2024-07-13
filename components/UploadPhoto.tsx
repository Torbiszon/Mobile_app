// import React, { useState } from 'react';
// import { View, Button, Image, ActivityIndicator, StyleSheet } from 'react-native';
// import { launchImageLibrary } from 'react-native-image-picker';
// import storage from '@react-native-firebase/storage';

// const UploadPhoto = () => {
//   const [imageUri, setImageUri] = useState<string | null>(null);
//   const [uploading, setUploading] = useState(false);

//   const selectImage = () => {
//     launchImageLibrary({ mediaType: 'photo' }, response => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorMessage) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         setImageUri(response.assets[0].uri);
//       }
//     });
//   };

//   const uploadImage = async () => {
//     if (imageUri == null) return;
//     const filename = imageUri.substring(imageUri.lastIndexOf('/') + 1);
//     setUploading(true);
//     const reference = storage().ref(filename);
//     const task = reference.putFile(imageUri);

//     task.on('state_changed', taskSnapshot => {
//       console.log(
//         `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
//       );
//     });

//     task.then(() => {
//       setUploading(false);
//       alert('Image uploaded to the bucket!');
//       setImageUri(null);
//     }).catch(error => {
//       setUploading(false);
//       console.error(error);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Select Image" onPress={selectImage} />
//       {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
//       {uploading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         imageUri && <Button title="Upload Image" onPress={uploadImage} />
//       )}
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

// export default UploadPhoto;

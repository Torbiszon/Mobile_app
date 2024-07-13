import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './NavigationTs';
import { useAuth } from './AppContext';

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Button title="Photos" onPress={() => navigation.navigate('Photos')} />
        <Button title="Albums" onPress={() => navigation.navigate('Albums')} />
        <Button title="Users" onPress={() => navigation.navigate('Users')} />
        <Button title="Add Post" onPress={() => navigation.navigate('AddPost')} />
        <Button title="Posts" onPress={() => navigation.navigate('Posts')} />
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 10,
  },
});

export default DashboardScreen;

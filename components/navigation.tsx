import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import DashboardScreen from './Dashboard';
import PhotosScreen from './Photos';
import AlbumsScreen from './Albums';
import UsersScreen from './UserList'; // Assuming UserList is the main user screen
import { useAuth } from './AppContext';
import AddPostScreen from './AddPost';
import PostsScreen from './Posts';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  Photos: undefined;
  Albums: undefined;
  Users: undefined;
  AddPost: undefined;
  Posts: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Photos" component={PhotosScreen} />
            <Stack.Screen name="Albums" component={AlbumsScreen} />
            <Stack.Screen name="Users" component={UsersScreen} />
            <Stack.Screen name="AddPost" component={AddPostScreen} />
            <Stack.Screen name="Posts" component={PostsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

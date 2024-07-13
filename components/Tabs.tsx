
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import PostsScreen from './Posts';
import AlbumsScreen from './Albums';
import PhotosScreen from './Photos';
import UserListScreen from './UserList';
import UserProfileScreen from './UserProfile';
import LoginScreen from './Login';
import AddPostScreen from './AddPost';

type RootTabParamList = {
  Home: undefined;
  Posts: undefined;
  Albums: undefined;
  Photos: undefined;
  UserList: undefined;
  UserProfile: undefined;
  Login: undefined;
  AddPost: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Posts') {
            iconName = 'dots-grid';
          } else if (route.name === 'Albums') {
            iconName = 'image';
          } else if (route.name === 'Photos') {
            iconName = 'camera';
          } else if (route.name === 'UserList') {
            iconName = 'account-multiple';
          } else if (route.name === 'UserProfile') {
            iconName = 'account';
          } else if (route.name === 'Login') {
            iconName = 'login';
          } else if (route.name === 'AddPost') {
            iconName = 'plus-box';
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#d62246',
        tabBarInactiveTintColor: 'lightgray',
        tabBarInactiveBackgroundColor: '#211338',
        tabBarActiveBackgroundColor: '#211338',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HOME',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarLabel: 'POSTS',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarLabel: 'ALBUMS',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Photos"
        component={PhotosScreen}
        options={{
          tabBarLabel: 'PHOTOS',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UserList"
        component={UserListScreen}
        options={{
          tabBarLabel: 'USERS',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
  name="Albums"
  component={AlbumsScreen}
  options={{
    tabBarLabel: 'ALBUMS',
    unmountOnBlur: true,
    headerShown: false,
  }}
/>

      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'LOGIN',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPostScreen}
        options={{
          tabBarLabel: 'ADD POST',
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

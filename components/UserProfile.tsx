import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fetchUserProfile } from '../services/Api';

type UserProfileProps = {
  route: {
    params: {
      userId: number;
    };
  };
};

type UserProfile = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ route }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const loadUserProfile = async () => {
      const data = await fetchUserProfile(route.params.userId);
      setUser(data);
    };
    loadUserProfile();
  }, [route.params.userId]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default UserProfile;

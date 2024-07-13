import React from 'react';
import { LogBox } from 'react-native';
import AppNavigator from './components/navigation';
import { AuthProvider } from './components/AppContext';  

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import {RootStackParamList} from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};
const ReduxApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isConnected = false;
  console.log('setIsLoading:', setIsLoading);
  console.log('isLoading:', isLoading);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator initialRouteName={isConnected ? 'Home' : 'Login'}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;

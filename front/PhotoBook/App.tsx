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
import HomeScreen from './src/HomeScreen';
import SplashScreen from './src/splashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  console.log('setIsLoading:', setIsLoading);
  console.log('isLoading:', isLoading);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style= {styles.safeAreaView}>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="name" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex:1
  }
});

export default App;

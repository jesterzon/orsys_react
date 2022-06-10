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
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import api from './src/api';
import {connect, User} from './src/redux/slices/authentication.slice';
import {useAppDispatch} from './src/redux/hook';
import DeviceInfoModule from './src/native/DeviceInfoModule';

const Stack = createNativeStackNavigator<RootStackParamList>();
const testX = async () => {
  try {
    const res = await DeviceInfoModule.getUniqueId('helooooo');
    console.log(res);
    const res1 = await DeviceInfoModule.getUniqueId('zut');
    console.log(res1);
  }
  catch(err) {
    console.log(err);
  }
}
const App = () => {
  testX();
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};
const ReduxApp = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  console.log('setIsLoading:', setIsLoading);
  console.log('isLoading:', isLoading);
  useEffect(() => {
    (async () => {
      try {
        const userConnected = await api.isConnected();
        console.log('userConnected', userConnected);
        if (userConnected) {
          dispatch(connect(userConnected));
        }
      } catch (err) {
        console.log('err', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="light-content" />
        {isLoading ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{headerShown: false}}>
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

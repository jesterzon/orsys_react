import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { RootStackParamList } from '../navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const LoginScreen = ({navigation}: LoginProps) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>LoginScreen</Text>
      <Button title="Connect" onPress={goToHome}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: '100%',
  },
  photobook: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'grey',
  },
});
export default LoginScreen;

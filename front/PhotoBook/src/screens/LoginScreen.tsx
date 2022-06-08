import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../navigation';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };
  const loginV = '';
  const passwordV = '';
  const onChangeLogin = () => {
    console.log('onChangeLogin: press');
  };
  const onChangePassword = () => {
    console.log('onChangePassword: press');
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>LoginScreen</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeLogin}
          placeholder="Votre Login"
          defaultValue={''}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={onChangeLogin}
          placeholder="Votre Password"
          defaultValue={''}
          secureTextEntry={true}
        />
        <Button title="Connect" onPress={goToHome}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'black',
  
    height: '100%',
    padding: 10,
  },
  photobook: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'grey',
  },
  textinput: {
    fontSize: 12,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
  },
  form: {
    alignItems: 'stretch',
    height: 200,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
});
export default LoginScreen;

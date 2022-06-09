import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { connect, selectAuthentication, User } from '../redux/slices/authentication.slice';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const goToHome = () => {
    const user : User = {
      displayName: login
    };
    dispatch(connect(user));
    navigation.navigate('Home');
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>LoginScreen</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.textinput}
          onChangeText={setLogin}
          placeholder="Votre Login"
          defaultValue={''}
        />
        <TextInput
          style={styles.textinput}
          onChangeText={setPassword}
          placeholder="Votre Password"
          defaultValue={''}
          secureTextEntry={true}
        />
        <Button title="Connect" onPress={goToHome}></Button>
        <Text>{JSON.stringify(login)} {JSON.stringify(password)}</Text>
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

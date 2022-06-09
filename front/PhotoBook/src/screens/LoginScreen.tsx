import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {applyMiddleware} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import api, {LoginForm} from '../api';
import {RootStackParamList} from '../navigation';
import {useAppDispatch, useAppSelector} from '../redux/hook';
import {
  connect,
  selectAuthentication,
  User,
} from '../redux/slices/authentication.slice';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginProps) => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const goToHome = () => {
    (async () => {
      try {
        setIsLoading(true);
        const loginForm: LoginForm = {login, password};
        const user = await api.connect(loginForm);
        dispatch(connect(user));
        navigation.navigate('Home');
      } catch (err) {
        console.log('err:', err);
        setErrorMsg('Bad login');
      } finally {
        setIsLoading(false);
      }
    })();
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
        <Text style={styles.error}>{errorMsg}</Text>
        <View style={styles.buttonContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <Button title="Connect" onPress={goToHome}></Button>
        )}
        </View>
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
    height: 300,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    height: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    height: 60
  }
});
export default LoginScreen;

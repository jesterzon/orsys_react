import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import api from '../api';
import {useAppDispatch} from '../redux/hook';
import {disconnect} from '../redux/slices/authentication.slice';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const onPressDisconnect = () => {
    console.log('about to disconnect');
    dispatch(disconnect(undefined));
    api.disconnect();
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>Settings</Text>
      <Button title="Disconnect" onPress={onPressDisconnect} />
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
export default SettingsScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useAppSelector } from '../redux/hook';
import { selectAuthentication } from '../redux/slices/authentication.slice';

const HomeScreen = () => {
  const authentication = useAppSelector(selectAuthentication);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>Hello {authentication.user?.displayName}</Text>
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
  }
});
export default HomeScreen;

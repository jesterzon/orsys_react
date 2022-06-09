import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useAppSelector} from '../redux/hook';
import {selectAuthentication} from '../redux/slices/authentication.slice';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: HomeProps) => {
  const authentication = useAppSelector(selectAuthentication);
  useLayoutEffect(() => {
    if (!authentication.user) {
      navigation.replace('Login');
    }
  }, [authentication]);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>
        Hello {authentication.user?.displayName}
      </Text>
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
export default HomeScreen;

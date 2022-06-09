import {TabActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useAppSelector} from '../redux/hook';
import {selectAuthentication} from '../redux/slices/authentication.slice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WallScreen from './WallScreen copy 3';
import LegalScreen from './LegalScreen';
import SettingsScreen from './SettingsScreen';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}: HomeProps) => {
  const authentication = useAppSelector(selectAuthentication);
  useLayoutEffect(() => {
    if (!authentication.user) {
      navigation.replace('Login');
    }
  }, [authentication]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Wall" component={WallScreen} />
      <Tab.Screen name="Legal" component={LegalScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
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

import {TabActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useAppSelector} from '../redux/hook';
import {selectAuthentication} from '../redux/slices/authentication.slice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WallScreen from './WallScreen';
import LegalScreen from './LegalScreen';
import SettingsScreen from './SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from '@rneui/themed';

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
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Wall"
        component={WallScreen}
        options={{
          tabBarLabel: 'Wall',
          tabBarIcon: ({color, size}) => (
            <Icon name="wallpaper" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Legal"
        component={LegalScreen}
        options={{
          tabBarLabel: 'Legal',
          tabBarIcon: ({color, size}) => (
            <Icon name="policy" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            //<Icon name="home" type="material-community" color="#517fa4" />
            <Icon name="settings" color={color} size={size}/>
          ),
        }}
      />
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

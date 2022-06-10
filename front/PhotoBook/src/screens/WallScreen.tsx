import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {backendUrl} from '../env';
import NewArticle from './NewArticle';

const WallScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.photobook}>Wall</Text>
      <Image
          style={styles.image}
          source={{uri: 'http://10.0.2.2:3000/images/wall.jpeg'}}
        />
      <NewArticle></NewArticle>
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
  image: {
    width: '100%',
    height: 300,
  },
});
export default WallScreen;

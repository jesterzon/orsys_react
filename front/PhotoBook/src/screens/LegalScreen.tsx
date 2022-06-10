import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const LegalScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/landes2.jpg')}
      />
      <Text style={styles.photobook}>Legal</Text>
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
    height: 300
  }
});
export default LegalScreen;

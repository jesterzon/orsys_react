import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LegalScreen = () => {
  return (
    <View style={styles.mainContainer}>
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
  }
});
export default LegalScreen;

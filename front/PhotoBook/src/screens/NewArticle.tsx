import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAppDispatch} from '../redux/hook';
import {addNewArticle, fetchAllArticles} from '../redux/slices/article.slice';

const NewArticle = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("Hey, what's up?");
  const [images] = useState([]);

  const onSubmit = async () => {
    try {
      //setIsLoading(true);
      await dispatch(addNewArticle({content: text, images: images})).unwrap();
      //setIsLoading(false);
      setText('');
      //setImages([]);
      //dispatch(fetchAllArticles());
    } catch (err) {
      //setIsLoading(false);
      console.log('err: ', err);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        multiline
        numberOfLines={3}
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Ajouter un article" onPress={onSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
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
  input: {
    borderWidth: 3,
    width: '80%',
    backgroundColor: '#cccccc',
    textAlignVertical: 'top',
  },
});
export default NewArticle;

import React, {useState} from 'react';
import {Text, TextInput, Button, View, StyleSheet} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Yeni görev..."
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='Görev Ekle' color='#5e55fb'/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor:'white',
        borderRadius: 10,
    },
  });

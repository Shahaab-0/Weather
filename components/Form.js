import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const Form = ({search, onSetSearch, onSubmit}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter city name and press search button</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter city"
        value={search}
        onChangeText={val => onSetSearch(val)}
      />
      <Button title="Search" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginRight: 10,
  },
});

export default Form;

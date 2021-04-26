import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Form = ({search, onSetSearch, onSubmit}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Images/morning.jpg')}
        style={styles.image}>
        <Text style={styles.text}>Weather App</Text>

        <TextInput
          placeholderTextColor="#97adab"
          style={styles.input}
          placeholder="Enter location"
          value={search}
          onChangeText={val => onSetSearch(val)}
        />
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.appButtonContainer}
            onPress={onSubmit}>
            <Text style={styles.appButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 6,
    paddingBottom: 7,
    paddingHorizontal: 10,
    width: '75%',
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginRight: 10,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },

  icon: {
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#00c9b7',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginTop: 20,
    width: '30%',
    alignSelf: 'center',
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default Form;

import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('WeatherMain');
  }, 3000);
  return (
    <ImageBackground
      source={require('../Images/morning.jpg')}
      style={styles.image}>
      <View style={styles.margin}>
        <Text style={styles.text}>Weather</Text>
        <Image
          style={styles.imageDescription}
          source={require('../Images/icon.png')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  imageDescription: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#e2f4f6',
    textAlign: 'center',
  },
  margin: {
    marginTop: 270,
  },
});

export default SplashScreen;

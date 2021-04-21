import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const WeatherDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Weather Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WeatherDetail;

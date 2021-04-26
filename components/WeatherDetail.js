import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import Weather from './Weather';

const WeatherDetail = () => {
  const [loading, setLoading] = useState(false);
  const {data, error} = useSelector(state => state.weather);

  return (
    <View style={styles.container}>
      <Weather loading={loading} data={data} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
export default WeatherDetail;

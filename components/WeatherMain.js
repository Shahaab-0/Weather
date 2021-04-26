import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getWeather} from '../Store/actions/WeatherActions';
import Form from './Form';

const WeatherMain = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.weather);

  // useEffect(() => {
  //   dispatch(getWeather('mumbai'));
  // }, [dispatch]);

  const submitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required!', [
        {text: 'OK'},
      ]);
    }

    setLoading(true);
    setSearch('');
    Keyboard.dismiss();
    navigation.navigate('WeatherDetail');
    dispatch(getWeather(search));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Form
          search={search}
          onSetSearch={setSearch}
          onSubmit={submitHandler}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WeatherMain;

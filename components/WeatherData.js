import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WeatherData = ({data}) => {
  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const [loading, setLoading] = useState(true);
  const Plus = (data.main.temp - 272.15).toFixed(0);
  const Minus = (data.main.temp - 274.15).toFixed(0);
  const farenheit = (data.main.temp * 1.8 - 459.67).toFixed(0);
  const celsius = (data.main.temp - 273.15).toFixed(0);
  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ImageBackground
            source={require('../Images/night.jpg')}
            style={styles.image}>
            <ActivityIndicator
              size="large"
              color="#e2f4f6"
              style={styles.loader}
            />
          </ImageBackground>
        </View>
      ) : (
        <ImageBackground
          source={require('../Images/night.jpg')}
          style={styles.image}>
          <View style={styles.topIcons}>
            <View style={styles.row}>
              <Ionicons
                name="cloud-outline"
                size={35}
                color="#e2f4f6"
                style={styles.row}
              />
              <Text style={styles.boxText}>{data.clouds.all}%</Text>
            </View>
            <View style={styles.row}>
              <Feather name="wind" size={35} color="#e2f4f6" />
              <Text style={styles.boxText}>{data.wind.speed}m/s</Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="water-percent"
                size={35}
                color="#e2f4f6"
              />
              <Text style={styles.boxText}>{data.main.humidity}%</Text>
            </View>
          </View>
          <View style={styles.tempRow}>
            <Text style={styles.Temprature}>{celsius}</Text>
            <View>
              <Text style={styles.degree}> &#8451;</Text>
              <View style={styles.row}>
                <Ionicons
                  name="arrow-up-outline"
                  color="#e2f4f6"
                  size={22}
                  style={styles.arrowUp}
                />
                <Text style={styles.tempSmall}>{Plus}</Text>
                <Ionicons name="ellipse-outline" size={10} color="#e2f4f6" />
              </View>
              <View style={styles.rowMinus}>
                <Ionicons
                  name="arrow-down-outline"
                  color="#e2f4f6"
                  size={22}
                  style={styles.arrowDown}
                />
                <Text style={styles.tempMinus}>{Minus}</Text>
                <Ionicons name="ellipse-outline" size={10} color="#e2f4f6" />
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>
              {data.name} - {data.sys.country}
            </Text>
            <Text style={styles.titleDescription}>
              {data.weather[0].description}
            </Text>

            <Image
              style={styles.imageDescription}
              source={{
                uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
              }}
            />
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    marginBottom: -20,
  },
  boxText: {
    fontSize: 22,
    color: '#e2f4f6',
    marginLeft: 3,
    marginTop: 1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 25,
  },
  degree: {
    fontSize: 40,
    color: '#e2f4f6',
    marginLeft: -10,
    marginTop: 25,
    fontWeight: 'bold',
  },
  Temprature: {
    fontSize: 120,
    textAlign: 'center',
    color: '#e2f4f6',
    alignSelf: 'center',
  },
  tempRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  tempSmall: {
    color: '#e2f4f6',
    fontSize: 18,
  },
  arrowUp: {
    marginTop: 2,
  },
  arrowDown: {
    marginTop: 5,
  },
  tempMinus: {
    marginTop: 2,
    color: '#e2f4f6',
    fontSize: 18,
  },
  rowMinus: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
    color: '#e2f4f6',
    marginTop: 15,
  },
  imageDescription: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  titleDescription: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
    color: '#e2f4f6',
    marginTop: 30,
  },
  loader: {
    marginTop: 250,
  },
});

export default WeatherData;

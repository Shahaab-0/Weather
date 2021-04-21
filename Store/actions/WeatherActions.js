import {GET_WEATHER, SET_ERROR} from '../reducers/types';
import {openweathermap_api_key} from '../../config.json';

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openweathermap_api_key}`,
      );
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }
      const resData = await res.json();
      console.log(resData);
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
      onSuccess();
    } catch (error) {
      dispatch(setError(error.message));
      onError;
    }
  };
};

const setError = error => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

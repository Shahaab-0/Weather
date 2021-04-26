import React from 'react';
import {Provider} from 'react-redux';
import WeatherMain from './components/WeatherMain';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './Store/reducers/WeatherReducers';
import Navigation from './Navigation';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

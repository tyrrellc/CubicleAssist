import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';
import store from './src/store';

class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD6UpJstSAIqzhRmHYYLOd4RwKGZZLrXVE',
      authDomain: 'auth-71bc3.firebaseapp.com',
      databaseURL: 'https://auth-71bc3.firebaseio.com',
      projectId: 'auth-71bc3',
      storageBucket: 'auth-71bc3.appspot.com',
      messagingSenderId: '343162058900'
  };
  firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


Expo.registerRootComponent(App);

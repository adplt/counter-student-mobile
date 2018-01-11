import React from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import Title from './apps/components/TitleComponent/Title.component';
import {TextInput} from './apps/components/FormComponent';
import {Field} from 'redux-form';
import {wrapObjectInFunction} from './apps/utils/transformer.util';
import AppIndex from './apps/App.container';
import {initStore} from './apps/state/store';
import {Provider} from 'react-redux';

const store = initStore();

const MyApp = () => (
  <Provider store={store}>
    <AppIndex />
  </Provider>
);

export default MyApp;
AppRegistry.registerComponent('myapp', wrapObjectInFunction(MyApp));

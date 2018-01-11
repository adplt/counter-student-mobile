import React from 'react';
import {StackNavigator} from 'react-navigation';
import IndexContainer from '../containers/index.container';

export default StackNavigator({
  IndexScreen: {
    screen: IndexContainer
  },
}, {
  navigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
});

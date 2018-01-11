import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, Platform} from 'react-native';

const Loading = ({color = '#000000'}) => <ActivityIndicator color={color} size={Platform.OS === 'ios' ? 'large' : 80} />;

Loading.propTypes = {
  color: PropTypes.string,
};

export default Loading;

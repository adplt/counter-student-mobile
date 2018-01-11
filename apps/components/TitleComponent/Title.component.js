import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import styles from './Title.styles';

const Title = (props) => {
  const {title = '', center, ...extraProps} = props;
  let textAlign = {};
  if (center) {
    textAlign = {textAlign: center ? 'center' : ''};
  }
  const textStyle = [styles.title, textAlign, extraProps.style];
  return (
    <Text style={textStyle}>{title}</Text>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  center: PropTypes.bool,
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {noop, isEmpty} from 'lodash';
import {IconButton} from '../../FormComponent';
import styles from './DefaultHeader.styles';

const DefaultHeader = (props) => {
  const {
    leftIcon = '',
    rightIcon = '',
    title = '',
    leftIconSize = 30,
    rightIconSize = 30,
    headerStyle = {},
    leftIconPress = noop,
    rightIconPress = noop,
  } = props;

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.header}>
        {
          !isEmpty(leftIcon) &&
          <View style={styles.leftContainer}>
            <IconButton name={leftIcon} size={leftIconSize} style={styles.left} onPress={leftIconPress}/>
          </View>
        }
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {
          !isEmpty(rightIcon) &&
          <View style={styles.rightContainer}>
            {
              typeof rightIcon === 'string' ?
                <IconButton name={rightIcon} size={rightIconSize} style={styles.right} onPress={rightIconPress}/> :
                rightIcon
            }
          </View>
        }
      </View>
    </View>
  );
};

DefaultHeader.propTypes = {
  backButton: PropTypes.bool,
  headerStyle: PropTypes.object,
  title: PropTypes.string,
  leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftIconSize: PropTypes.number,
  rightIconSize: PropTypes.number,
  leftIconPress: PropTypes.func,
  rightIconPress: PropTypes.func,
};

export default DefaultHeader;

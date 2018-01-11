import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {isEmpty, noop} from 'lodash';
import {DefaultHeader} from '../../HeaderComponent';
import styles from './DefaultPage.styles';

export default class ScrollablePage extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    leftIconSize: PropTypes.number,
    rightIconSize: PropTypes.number,
    leftIconPress: PropTypes.func,
    rightIconPress: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    title: '',
    leftIcon: '',
    rightIcon: '',
    leftIconSize: 30,
    rightIconSize: 30,
    leftIconPress: noop,
    rightIconPress: noop,
  };

  render () {
    const {children, header, style, title, leftIcon, rightIcon, leftIconSize, rightIconSize, leftIconPress, rightIconPress, ...extraProps} = this.props;

    return (
      <View style={styles.container}>
        {
          isEmpty(header) ?
            <DefaultHeader
              title={title}
              leftIcon={leftIcon}
              leftIconSize={leftIconSize}
              rightIcon={rightIcon}
              rightIconSize={rightIconSize}
              leftIconPress={leftIconPress}
              rightIconPress={rightIconPress}
            /> :
            header
        }
        <View
          keyboardShouldPersistTaps='handled'
          style={[styles.container, style]}
          {...extraProps}
        >
          {children}
        </View>
      </View>
    );
  }
}

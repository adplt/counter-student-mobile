import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, ScrollView} from 'react-native';
import {noop, isEmpty} from 'lodash';
import {DefaultHeader} from '../../HeaderComponent';
import styles from './ScrollablePage.styles';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class ScrollablePage extends PureComponent {

  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.node,
    style: PropTypes.object,
    contentContainerStyle: PropTypes.object,
    title: PropTypes.string,
    leftIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    rightIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    leftIconSize: PropTypes.number,
    rightIconSize: PropTypes.number,
    leftIconPress: PropTypes.func,
    rightIconPress: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    contentContainerStyle: {},
    title: '',
    leftIcon: '',
    rightIcon: '',
    leftIconSize: 30,
    rightIconSize: 30,
    leftIconPress: noop,
    rightIconPress: noop,
  }

  render () {
    const {
      children,
      header,
      title,
      leftIcon,
      rightIcon,
      leftIconSize,
      rightIconSize,
      leftIconPress,
      rightIconPress,
      style,
      contentContainerStyle,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
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
        <ScrollView
          contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
          keyboardShouldPersistTaps='handled'
        >
          {children}
        </ScrollView>
      </View>
    );
  }
}

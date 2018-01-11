import React from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import Title from '../components/TitleComponent/Title.component';
import {TextInput, DefaultButton} from '../components/FormComponent';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

export default class IndexPage extends React.Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
  }

  render() {
    const {invalid, submitting, handleSubmit} = this.props;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Title title={'Input your student ID'} center style={{marginBottom: 20}}/>
          <Field
            name={'nim'}
            component={TextInput}
            inputStyles={{width: 250}}
            placeholder={'NIM'}
            theme={'primary'}
          />
          <View style={{marginBottom: 50, marginTop: 20}}>
            <DefaultButton
              disabled={invalid || submitting}
              onPress={handleSubmit}
              text={'Submit'}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

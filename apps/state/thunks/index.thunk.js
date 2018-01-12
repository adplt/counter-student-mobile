import * as actionCreators from '../actions/common.actions';
import * as api from '../../utils/api.util';
import {Alert} from 'react-native';
import {destroy} from 'redux-form';
import {prepareValidateStudentPayload} from '../../utils/middleware.util';

export const validateStudent = (payload) => (dispatch, getState) => {
  dispatch(actionCreators.showSpinner());
  return api.validateStudent(prepareValidateStudentPayload(payload)).
    then((res) => {
      dispatch(actionCreators.hideSpinner());
      const state = getState();
      const {saveCounter} = state;
      Alert.alert(
        'Success',
        'You have been counted as a visitor. Counter: ' + res.data.response.visitCount + ' nim: ' + res.data.response.nim,
        [{
          text: 'Ok',
          onPress: () => dispatch(destroy('IndexForm')),
        }]);
    }).catch((error) => {
      dispatch(actionCreators.hideSpinner());
      Alert.alert(
        'Error',
        error.data.responseMessage,
        [{
          text: 'Ok',
        }]);
    });
};

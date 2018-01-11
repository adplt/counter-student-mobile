import * as actionCreators from '../actions/common.actions';
import * as api from '../../utils/api.util';
import {Alert} from 'react-native';

export const validateStudent = (payload) => (dispatch) => {
  dispatch(actionCreators.showSpinner());
  return api.validateStudent(payload).then((res) => {
    console.log('res: ', res);
    dispatch(actionCreators.hideSpinner());
    Alert.alert(
      'Success',
      'You have been counted as a visitor',
      [{
        text: 'Ok',
      }]);
  }).catch((error) => console.log('error: ', error));
};

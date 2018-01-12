import {SAVE_COUNTER} from '../actions/common.actions';

const saveCounter = (state = 0, action) => {
  switch (action.type) {
  case SAVE_COUNTER:
    return Number(state + 1);
  default:
    return state;
  }
};

export default saveCounter;

import {createAction} from 'redux-actions';

export const CLEAN_APP_STATE = 'CLEAN_APP_STATE';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

export const SAVE_COUNTER = 'SAVE_COUNTER';

export const cleanAppState = createAction(CLEAN_APP_STATE);

export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);

export const saveCounter = createAction(SAVE_COUNTER);

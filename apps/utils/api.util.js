import * as Http from './http.util';

export const validateStudent = (payload) => Http.post('VALIDATE_STUDENT', payload);

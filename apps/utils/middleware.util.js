import result from 'lodash/result';

export const prepareValidateStudentPayload = (rawData) => ({
  nim: result(rawData, 'nim', ''),
});

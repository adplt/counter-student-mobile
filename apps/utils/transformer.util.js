// GENERAL utility methods
export const wrapObjectInFunction = (obj) => () => obj;

export const filterObjectProperties = (sourceObject = {}, keys = []) => {
  const filtered = {};
  keys.forEach((eachKey) => {
    filtered[eachKey] = sourceObject[eachKey];
  });
  return filtered;
};

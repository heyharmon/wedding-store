import get from "lodash/get";
import set from "lodash/set";
import concat from "lodash/concat";
import pullAt from "lodash/pullAt";

function getValue({object, path}) {
  return get(object, path)
}

function setValue({object, path, value}) {
  set(object, path, value)
}

function addToArray({object, path, value}) {
  let array = get(object, path)
  array.push(value)
  // concat(array, value)
}

function forget({array, index}) {
  console.log('array', array)
  console.log('index', index)
  pullAt(array, index)
}

export {
  getValue,
  setValue,
  addToArray,
  forget,
}
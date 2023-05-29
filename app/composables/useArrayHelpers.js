import set from "lodash/set";
import pullAt from "lodash/pullAt";

function setValue({object, path, value}) {
  set(object, path, value)
}

function forget({array, index}) {
  pullAt(array, [index])
}

export {
  setValue,
  forget,
}
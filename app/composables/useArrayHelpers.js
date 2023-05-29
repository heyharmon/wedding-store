import collect from 'collect.js'

function forget({array, index}) {
  let collection = collect(array)
      collection.forget(index);
}

export {
  forget
}
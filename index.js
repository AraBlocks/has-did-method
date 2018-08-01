'use strict'

const { parse } = require('did-uri')

/**
 * Returns whether a DID URI contains a method or not.
 * If the DID is invalid, the function will return false.
 * @param  {String} uri 
 * @return {Boolean}     
 * @throws {TypeError}
 */
module.exports = (uri) => {
  if (!uri || 'string' != typeof uri) {
    throw new TypeError("has-did-method: Expecting uri to be a string.")
  }
   try {
    uri = parse(uri)
  } catch (err) {
    return false
  }
  return Boolean(uri.method)
}
/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */

let nextUserId = 0
export const addUser = function(firstName, lastName, address) {
  return {
    type: 'ADD_USER',
    id: nextUserId++,
    payload: {
      firstName: firstName,
      lastName: lastName,
      address: address
    }
  }
}

export const deleteUser = function(id) {
  return {
    type: 'DELETE_USER',
    id: id
  }
}

export const updateUser = function(id, firstName, lastName, address) {
  return {
    type: 'UPDATE_USER',
    id: id,
    payload: {
      firstName: firstName,
      lastName: lastName,
      address: address
    }
  }
}

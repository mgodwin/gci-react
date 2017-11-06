/* eslint-disable import/newline-after-import */
/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
/* Populated by react-webpack-redux:reducer */
import { combineReducers } from 'redux';

const reducers = {
  users: function(state = [], action) {
    switch (action.type) {
      case 'ADD_USER':
        return [
          {
            id: action.id,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            address: action.payload.address,
          }, ...state
        ]
      case 'DELETE_USER':
        return state.filter((user) => user.id !== action.id)
      case 'UPDATE_USER':
        return state.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName,
              address: action.payload.address
            }
          }
          return user
        })
      default:
        return state
    }
  }
}
const combined = combineReducers(reducers);
module.exports = combined;

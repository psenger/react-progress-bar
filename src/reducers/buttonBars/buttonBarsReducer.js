import { fromJS, List } from 'immutable';
import ACTIONS from '../../actionCreators/actionTypes/index';

let initialState = fromJS({ buttons: List([]), bars: List([]) });

/**
 * @typedef {Object} action - an Event.
 * @property {string} action.type - the action type.
 * @property {*} target.value - the value.
 */

/**
 * button and bars Reducer
 *
 * @param {*} state - the state of this reducer
 * @param {action} action - the action.
 * @returns {any}
 */
export default function buttonBarsReducer(state = initialState, action) {
  let value = action.value;

  switch (action.type) {

    case ACTIONS.BUTTON_BARS.SAVE:
      return state.merge(value);

    case ACTIONS.BUTTON_BARS.UPDATE:
      if (value) {
        let { index, percentage } = value;

        if (index !== undefined && index >= 0 && percentage !== undefined) {
          let base = (state.get('bars').has(index))? state.get('bars').get(index): 0;
          let newValue = 0;

          if (percentage + base >= 0) {
            newValue = percentage + base;
          }
          return state.set('bars', state.get('bars').setIn([index], newValue));
        } // if for some reason, the user did not pass the correct parameters or a negative fall through to default.
      }
      return state;

    default:
      return state;
  }
}

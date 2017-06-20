import ACTIONS from './actionTypes/index';

/**
 * Initiate the workflow by making request for the button bars data.
 * @function
 * @return {action}
 */
export const fetchData = () => ({
  type: ACTIONS.BUTTON_BARS.FETCH
});

/**
 * Save the data into the store. This is a destructive operation.
 * @function
 * @param {{ buttons: [number], bars: [number] }} data - the data to store.
 * @return {action}
 */
export const saveData = data => ({
  type: ACTIONS.BUTTON_BARS.SAVE,
  value: data
});

/**
 * Update the given Bar by index, adding the given percentage to the value. This could be a negative number, decrementing the value.
 * @function
 * @param {{index:number,percentage:number}} data - the data to store.
 * @return {action}
 */
export const updateBar = (data) => ({
  type: ACTIONS.BUTTON_BARS.UPDATE,
  value: data
});

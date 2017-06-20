import { takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../actionCreators/actionTypes/index';
import fetchButtonBarsWorker from '../workers/buttonsWorker';

/** *********************************************** **/
/** Designed to regulate the frequency of the calls **/
/** *********************************************** **/

/**
 * Watch for Dispatch ACTIONS.MAKE.INITIATE so the saga can be kicked off.
 * The user has requested all the makes
 *
 * takeLatest ask almost like a de-bounce.
 */
export function* fetchButtonBarsWatcher() {
  // takeLatest does not allow concurrent fetches
  yield takeLatest(ACTIONS.BUTTON_BARS.FETCH, fetchButtonBarsWorker);
}

import { fork } from 'redux-saga/effects';
import { fetchButtonBarsWatcher } from './watchers/buttonsWatcher';

/** ******************************* **/
/** Root Exported Saga, that is run **/
/** ******************************* **/

export default function* rootSaga() {
  yield [
    fork(fetchButtonBarsWatcher)
  ];
}

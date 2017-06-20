import { call, put } from 'redux-saga/effects';
import { saveData } from '../../actionCreators/buttonBarsActions';
import * as api from '../../services/buttons/api';
// import {saveMessage, setError, setInFlight} from "../../actionCreators/messageActions";

/** **************** **/
/** Actual API calls **/
/** **************** **/

export default function* fetchButtonBarsWorker() {
  try {
    // yield put(saveMessage('loading'));
    // yield put(setError(false));
    // yield put(setInFlight(true));
    const payload = yield call(api.fetchButtonBars);

    yield put(saveData(payload));
    // yield put(saveMessage(null));
  } catch (e) {
    // yield put(setError(true));
    // yield put(saveMessage(e.message));
  } finally {
    // yield put(setInFlight(false));
  }
}

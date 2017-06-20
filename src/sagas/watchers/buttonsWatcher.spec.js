import sagaHelper from 'redux-saga-testing';
import { takeLatest } from 'redux-saga/effects';
import ACTIONS from '../../actionCreators/actionTypes/index';
import fetchButtonBarsWorker from '../workers/buttonsWorker';
import { fetchButtonBarsWatcher } from './buttonsWatcher.js';

test('SAGA:WATCHERS', () => {
  describe('buttonsWatcher.js', () => {
    const it = sagaHelper(fetchButtonBarsWatcher());
    it('should have called takeLatest with the correct ', result => {
      expect(result).toEqual(takeLatest(ACTIONS.BUTTON_BARS.FETCH, fetchButtonBarsWorker));
    });
  })
});

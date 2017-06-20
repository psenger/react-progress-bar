import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import { mockResponseHelper } from '../../../test/mocks';
import { saveData } from '../../actionCreators/buttonBarsActions';
import { fetchButtonBars } from '../../services/buttons/api.js';
import fetchButtonBarsWorker from './buttonsWorker.js';

test('SAGA:WORKERS', () => {

  describe('buttonWorker.js', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponseHelper(200, null, JSON.stringify({
      'buttons': [32, 33, -8, -16],
      'bars': [69, 51, 19]
    }))));
    const it = sagaHelper(fetchButtonBarsWorker());

    it('should have called the mock API first with no parameters', result => {
      expect(result).toEqual(call(fetchButtonBars));
      expect(fetchButtonBars).not.toHaveBeenCalled();
    });

    it('should have called the Action saveData and passed the data from api', result => {
      expect(result).toEqual(put(saveData({ 'buttons': [32, 33, -8, -16], 'bars': [69, 51, 19] })));
    });
  })

});

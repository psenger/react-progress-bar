import ACTIONS from './actionTypes/index';
import { fetchData, saveData, updateBar } from './buttonBarsActions';

describe('ACTION:', () => {
  describe('buttonBarsActions.js', () => {
    describe('ACTIONS.BUTTON_BARS.FETCH', () => {
      it('should return button bar fetch', () => {
        expect(fetchData()).toMatchObject({
          type: ACTIONS.BUTTON_BARS.FETCH
        });
      });
      it('should return button bar fetch without any parameter feed to it', () => {
        expect(fetchData('monkey')).toMatchObject({
          type: ACTIONS.BUTTON_BARS.FETCH
        });
      });
    });
    describe('ACTIONS.BUTTON_BARS.SAVE', () => {
      it('should return button bar save with value undefined when nothing passed', () => {
        expect(saveData()).toMatchObject({
          type: ACTIONS.BUTTON_BARS.SAVE,
          value: undefined
        });
      });
      it('should return button bar save with a value when it is passed the value', () => {
        expect(saveData('monkey')).toMatchObject({
          type: ACTIONS.BUTTON_BARS.SAVE,
          value: 'monkey'
        });
      });
    });
    describe('ACTIONS.BUTTON_BARS.UPDATE', () => {
      it('should return button bar save with value undefined when nothing passed', () => {
        expect(updateBar()).toMatchObject({
          type: ACTIONS.BUTTON_BARS.UPDATE,
          value: undefined
        });
      });
      it('should return button bar save with a value when it is passed the value', () => {
        expect(updateBar({ index: 1, percentage: 100 })).toMatchObject({
          type: ACTIONS.BUTTON_BARS.UPDATE,
          value: { index: 1, percentage: 100 }
        });
      });
    });
  });
});
import { fromJS, List, Map } from 'immutable';
import * as ACTIONS from '../../actionCreators/buttonBarsActions';
import reducer from './buttonBarsReducer';

let expect = require('chai').expect;

describe('REDUCER:', () => {

  const initialState = undefined;
  Object.freeze(initialState);

  describe('buttonBarsReducer.js', () => {

    it('should return the current state when action actionConstants is of unknown', () => {
      expect(reducer(initialState, {})).to.deep.equal(fromJS({ buttons: List([]), bars: List([]) }));
    });

    describe('ACTIONS.BUTTON_BARS.FETCH', () => {
      it('should return the current state because this does nothing', () => {
        expect(reducer(initialState, ACTIONS.fetchData())).to.deep.equal(fromJS({ buttons: List([]), bars: List([]) }));
      });
      it('should return the current state because this does nothing', () => {
        expect(reducer(initialState, ACTIONS.fetchData(fromJS({
          buttons: List([1]),
          bars: List([1])
        })))).to.deep.equal(fromJS({ buttons: List([]), bars: List([]) }));
      });
    });

    describe('ACTIONS.BUTTON_BARS.SAVE', () => {
      it('should return the current state because this does nothing', () => {
        let x = reducer(initialState, ACTIONS.saveData());
        expect(x).to.deep.equal(fromJS({ buttons: List([]), bars: List([]) }));
      });
      it('should return return the initial state', () => {
        expect(reducer(initialState, ACTIONS.saveData(initialState))).to.deep.equal(fromJS({
          buttons: List([]),
          bars: List([])
        }));
      });
      it('should return return the new state', () => {
        let x = reducer(initialState, ACTIONS.saveData(fromJS({ buttons: List([1, 2]), bars: List([1, 2]) })));
        let y = Map({ buttons: List([1, 2]), bars: List([1, 2]) });
        expect(x.toJS()).to.deep.equal(y.toJS());
      });
      it('should return return the new state', () => {
        let alteredInitialState = fromJS({ buttons: List([1, 1]), bars: List([2, 2]) });
        Object.freeze(alteredInitialState);
        let x = reducer(alteredInitialState, ACTIONS.saveData(fromJS({
          buttons: [3, 3],
          bars: [4, 4]
        })));
        let y = Map({ buttons: List([3, 3]), bars: List([4, 4]) });
        expect(x.toJS()).to.deep.equal(y.toJS());
      });
      it('should return return the new state when the lists are not the same size', () => {
        let alteredInitialState = fromJS({ buttons: List([1, 1, 1, 1]), bars: List([2, 2, 2, 2]) });
        Object.freeze(alteredInitialState);
        let x = reducer(alteredInitialState, ACTIONS.saveData(fromJS({
          buttons: [3, 3],
          bars: [4, 4]
        })));
        let y = Map({ buttons: List([3, 3]), bars: List([4, 4]) });
        expect(x.toJS()).to.deep.equal(y.toJS());
      });
    });

    describe('ACTIONS.BUTTON_BARS.UPDATE', () => {
      it('should return the initial state because no parameter was passed', () => {
        let x = reducer(initialState, ACTIONS.updateBar());
        let y = fromJS({ buttons: List([]), bars: List([]) });
        expect(x.toJS()).to.deep.equal(y.toJS());
      });
      it('should properly update an existing position from 25 to 100', () => {
        let x = reducer(fromJS({
          buttons: List([]),
          bars: List([25])
        }), ACTIONS.updateBar({ index: 0, percentage: 100 }));
        let y = fromJS({ buttons: List([]), bars: List([125]) });
        expect(x.toJS())
          .to.deep.equal(y.toJS());
      });
      it('should properly update an non existing position to 75', () => {
        let x = reducer(fromJS({
          buttons: List([]),
          bars: List([25, 50, 75])
        }), ACTIONS.updateBar({ index: 4, percentage: 100 }));
        let y = fromJS({ buttons: List([]), bars: List([25, 50, 75, undefined, 100]) });
        expect(x.toJS())
          .to.deep.equal(y.toJS());
      });
      it('should not update when a negative number is passed.', () => {
        let x = reducer(fromJS({
          buttons: List([]),
          bars: List([25, 50, 75])
        }), ACTIONS.updateBar({ index: -4, percentage: 100 }));
        let y = fromJS({ buttons: List([]), bars: List([25, 50, 75]) });
        expect(x.toJS())
          .to.deep.equal(y.toJS());
      });
      it('should should set the value to zero when the percentage wants to go below 0', () => {
        let x = reducer(fromJS({
          buttons: List([]),
          bars: List([25])
        }), ACTIONS.updateBar({ index: 0, percentage: -50 }));
        let y = fromJS({ buttons: List([]), bars: List([0]) });
        expect(x.toJS())
          .to.deep.equal(y.toJS());
      });
    });
  });
});
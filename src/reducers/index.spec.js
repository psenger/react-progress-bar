import combineReducers from '../reducers/index';

let expect = require('chai').expect;

describe('REDUCER:', () => {
  describe('combineReducers', () => {
    it('should not have a combineReducers set to null',()=>{
      expect(combineReducers).is.not.equal(null);
    });
  })
});
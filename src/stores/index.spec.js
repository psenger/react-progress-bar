import store from './index';

let expect = require('chai').expect;

describe('STORE:', () => {
  describe('combineReducers', () => {
    it('should not have a store that is null',()=>{
      expect(store).is.not.equal(null);
    })
  })
});
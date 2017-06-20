import { shallow } from 'enzyme';
import React from 'react';
import Option from './Option';

describe('COMPONENT:', () => {
  describe('Option', () => {
    it('should produce one option', () => {
      const component = shallow(
        <Option value={123} text={456} />
      );
      expect(component.find('option').length).toEqual(1);
    });
    it('should produce value equal to 123', () => {
      const component = shallow(
        <Option value={123} text={456} />
      );
      expect(component.html()).toEqual(expect.stringContaining('value=\"123\"'));
    });
    it('should produce value equal to 123', () => {
      const component = shallow(
        <Option value={123} text={456} />
      );
      expect(component.html()).toEqual(expect.stringContaining('456'));
    });
  });
});
